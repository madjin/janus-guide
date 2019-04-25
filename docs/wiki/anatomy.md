# Overview
In order to maintain interactivity, all assets in JanusWeb are loaded asynchronously.  This introduces a lot of complexity into how assets are processed, and the current code is a bit hacky.  This page is an attempt to document how it SHOULD work, so that we can apply that to the working codebase, enabling better performance and more complex features which depend on having more visibility into the loading process.

## Concepts and Classes
#### ```engine.assets.base```
  Base class for assets, which represent an external resource, usually referenced by a URL.  Inherited by ```engine.assets.model```, ```engine.assets.sound```, ```engine.assets.image```, etc.

#### ```janusweb.room```
  Represents a specific room, referenced by a URL.  Consists of a collection of ```janusweb.object```, ```janusweb.video```, ```janusweb.image```, etc. objects.  

#### ```janusweb.object```
  Represents an instance of an ```engine.assets.model``` asset.  Each object has its own independent position and orientation within the room, as well as any other properties which control the styling of this object.  Objects can reference ```engine.assets.image``` and ```engine.assets.video``` assets as textures.

#### ```janusweb.video```
  Represents an instance of an ```engine.assets.video``` asset mapped to a simple plane.

#### ```janusweb.image```
  Represents an instance of an ```engine.assets.image``` asset mapped to a simple plane.

#### ```janusweb.sound```
  Represents an instance of an ```engine.assets.sound``` asset.  There is no geometry associated with a sound.


## Events
Asynchronous loading involves several different loading states, and we want to be able to communicate this for all levels.  For example, a room hasn't completed loading until all of its objects have completed loading, which only happens after all of their assets are complete.  We want to be able to display loading information for the entire room, as well as for each individual object.

To this end, all async-loading classes will fire the following events:

| Event Name      | Fires | When                                                        | Event Data |
| --------------- | ----- | ----------------------------------------------------------- | ---------- |
| asset_load_queued     | once  | the object is first requested                               |            |
| asset_load_start      | once  | the browser has started fetching bytes for this object      |            |
| asset_load_progress   | many  | some amount of data for this object has loaded              |            |
| asset_load_processing | once  | all data for this object has finished loading and is about to be processed | | 
| asset_load_processed  | once  | data for this object has finished parsing                   |            |
| asset_load_complete   | once  | all of this object's children have fired load_complete      |            |


## Worker Loader
Assets in Elation Engine are loaded using WebWorkers, which lets the operating system handle them in a multithreaded or multiprocess way.  This allows the main thread to continue operating uninterrupted even while parsing very large assets, but it also makes the whole system a lot more complicated.

```
/*
  -eventname> means async event handler in main thread
  +eventname> means async event handler in worker
*/

elation.engine.assets.fetch('model', modelid);
    elation.engine.assets.model.getInstance(modelid)
        if (this.loaded) { 
           var model = this.model.clone(); 
           this.assignTextures(model); 
           return model; 
        } else {
           this.displayPlaceholder();
           this.loadWithWorker();
           +onmessage>  elation.engine.assetworker.model.load()
                  elation.net.xhr()
                  +onload>  elation.engine.assetworker.model.onload(data)
                          if (this.contentIsGzipped(data)) data = pako.inflate(data);
                          var type = this.detectContentType(data);
                          var parser = this.getParser(type);
                          var modeldata = parser.parse(data);
                          postMessage(modeldata.toJSON());
           -onmessage> handleLoadJSON(json)
                  this.model = THREE.ObjectLoader.parse(json)
                  var model = this.model.clone()
                  this.removePlaceholder()
                  this.extractTextures(model)
                      for (m in model.materials) {
                          for (t in ['map', 'normalMap', 'specularMap', 'lightMap', 'envMap']) {
                              var img = m[t].image;
                              m[t] = elation.engine.assets.find('image', img.src);
                          }
                      }
                  this.assignTextures(model)
                  elation.events.fire({type: 'asset_load', element: this});
                  return model;
        }
```