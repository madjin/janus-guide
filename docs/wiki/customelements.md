# Custom Elements

---

As of JanusWeb 1.1, we're experimenting with a new syntax for defining custom elements in Janus room scripts.  This allows developers to extend built-in functionality or create all-new functionality from scratch, opening the community up to build, share, and use libraries of custom-defined object types.

This scripting engine also adds more object-oriented functionality to our scripting API, as well as some convenience 
functions for translating between object-relative and world-relative coordinates.

---

A key part of being able to build reusable components for VR and the web is to be able to encapsulate code into reusable, extendable, and shareable chunks.  We've built our implementation based on the HTML5 Custom Elements spec, and we now expose an API to room scripts which makes it easy for room developers to define the objects they need to add interactivity and other advanced functionality to their sites.  We've also started a few side projects to build up some libraries of components we see as being useful to the creation of VR experiences as a whole:

 - [janus-script-ui](https://github.com/jbaicoianu/janus-script-ui/): a collection of 3D/VR UI controls - buttons, toggles, sliders, etc
 - [janus-script-layout](https://github.com/jbaicoianu/janus-script-layout/): a collection of components for quickly laying out groups of objects in 3D
 - [janus-script-game](https://github.com/jbaicoianu/janus-script-game/): a collection of custom components inspired by gaming mechanics (doors, teleporters, etc)
 - [janus-script-video](https://github.com/jbaicoianu/janus-script-video/): a collection of components for building advanced players for various media types
 - [janus-script-audio](https://github.com/jbaicoianu/janus-script-audio/): a collection of components for wiring up positional audio and audio processing for your room

So what is a Custom Element?  Well, first let's look at a super-basic Janus room.  Following the markup reference at janusvr.com/guide/markuplanguage/index.html we start with a basic room:
```xml
<FireBoxRoom>
  <Room use_local_asset="room1">
    <Object js_id="mycube" id="cube" col="1 0 0" pos="0 0 5" />
  </Room>
</FireBoxRoom>
```

Nothing fancy, just a room with a red cube.  But let's say we want something to happen to the cube - let's say we want a button, and when we push the button it'll change to a green cube.  With custom elements and the janus-ui library, this is easy:

```xml
<FireBoxRoom>
  <Assets>
    <AssetScript src="janus-ui.js" />
  </Assets>
  <Room use_local_asset="room1">
    <Object js_id="mycube" id="cube" col="1 0 0" pos="0 0 5" />
    <PushButton pos="0 0 4" onbuttonpush="room.objects['mycube'].col = V(0,1,0)" />
  </Room>
</FireBoxRoom>
```

What if we want each push of the button to toggle between red and green?  No problem - there's a ```<ToggleButton>``` component.  Let's get fancy with the colors, too - you can use any approved HTML color name:
```xml
<FireBoxRoom>
  <Assets>
    <AssetScript src="janus-ui.js" />
  </Assets>
  <Room use_local_asset="room1">
    <Object js_id="mycube" id="cube" col="1 0 0" pos="0 0 5" />
    <ToggleButton pos="0 0 4" 
                  onbuttonpush="room.objects['mycube'].col = 'forestgreen'" 
                  onbuttonrelease="room.objects['mycube'].col = 'maroon'" 
                  />
  </Room>
</FireBoxRoom>
```

What if we have a bunch of images, and we want to lay them out in a circle?  Janus-layout and ```<CircularLayout>``` to the rescue:
```xml
<FireBoxRoom>
  <Assets>
    <AssetScript src="janus-layout.js" />
  </Assets>
  <Room use_local_asset="room1">
    <CircularLayout radius="2.5" pos="0 1 0">
      <Image id="http://i.imgur.com/ff3Wn06.png" />
      <Image id="http://i.imgur.com/rtCeOEs.png" />
      <Image id="http://i.imgur.com/ByExCaO.png" />
      <Image id="http://i.imgur.com/dYBH57H.png" />
      <Image id="http://i.imgur.com/2PQlhdB.png" />
      <Image id="http://i.imgur.com/xNEw11S.png" />
    </CircularLayout>
  </Room>
</FireBoxRoom>
```

Okay, cool.  So how do I go about defining my own components?  Well, let's take another example, and say we want an easy way to display an image with a caption.  Let's define a ```<CaptionedImage>``` element which does this for us.  We can inherit from the built-in ```<Image>``` class, and just add our own functionality without having to change anything else.

Our markup will look like this
```xml
<FireBoxRoom>
  <Assets>
    <AssetScript src="captionedimage.js" />
  </Assets>
  <Room use_local_asset="room1">
    <CaptionedImage image_id="http://i.imgur.com/ff3Wn06.png" caption="WebVR Fireworks Experiment" pos="-2 0 4" />
    <CaptionedImage image_id="http://i.imgur.com/ByExCaO.png" caption="Teleporters" pos="0 0 4" />
    <CaptionedImage image_id="http://i.imgur.com/2PQlhdB.png" caption="Sliders and Buttons" pos="2 0 4" />
  </Room>
</FireBoxRoom>
```

And **_captionedimage.js_** looks like this:
```javascript
room.registerElement('captionedimage', {
  image_id: '',
  caption: '',
  createChildren: function() {
     this.image = this.createObject('image', {
       id: this.image_id
     });
     this.captionobject = this.createObject('text', {
       pos: V(0,-.5,0),
       text: this.caption
     });
  }
});
```

Now how about something more advanced.  Let's say we want to make a slideshow to show off some number of images.  We want our slideshow to have fancy bouncy physics animations, and we want the selected image to be large and centered, while the other images fade out to either side.  Clicking on an image will slide the whole set over to make the selected image active.

Our markup looks a lot like the ```<CircularLayout>``` example above, but here we use ```<SlideShow>``` instead:
```xml
<FireBoxRoom>
  <Assets>
    <AssetScript src="janus-layout.js" />
  </Assets>
  <Room use_local_asset="room2">
    <SlideShow pos="0 1.8 5">
      <Image id="http://i.imgur.com/ff3Wn06.png" />
      <Image id="http://i.imgur.com/rtCeOEs.png" />
      <Image id="http://i.imgur.com/ByExCaO.png" />
      <Image id="http://i.imgur.com/dYBH57H.png" />
      <Image id="http://i.imgur.com/2PQlhdB.png" />
      <Image id="http://i.imgur.com/xNEw11S.png" />
    </SlideShow>
  </Room>
</FireBoxRoom>
``` 



## janusbase
All scripting objects inherit from the ```janusbase``` type.  This class, and all those that inherit from it, expose the following API:

### Properties
          object.parent         // Returns a reference to this object's parent
          object.children       // Returns an array of references to any children this object might have
          object.js_id          // the object's unique ID
          object.pos:           // object's position, relative to its parent
          object.vel:           // object's velocity
          object.accel:         // object's acceleration
          object.mass:          // object's physical mass
          object.scale:         // scaling factor for this object and its children
          object.col:           // color override
          object.xdir           // X-axis component of rotation matrix
          object.ydir           // Y-axis component of rotation matrix
          object.zdir           // Z-axis component of rotation matrix
          object.fwd            // alias for zdir
          object.rotation       // Object rotation in euler angles
          object.rotation_order // euler angle order
          object.sync           // Sync object over network when changed
          object.visible        // Show or hide object

### Event callbacks
          // Mouse events
          object.onmouseover 
          object.onmouseout
          object.onmousemove
          object.onmousedown
          object.onmouseup
          object.onclick

          // Touch events
          object.ontouchstart
          object.ontouchmove
          object.ontouchend

          // Drag and drop events
          object.ondragover
          object.ondrag
          object.ondragenter
          object.ondragleave
          object.ondragstart
          object.ondragend
          object.ondrop

          // Physics events
          object.oncollision // called when this object collides with another object

### Functions
          createObject(type, args) // Spawn a new object as a child of this one
          appendChild(child) // Attach the specified child object as a child of this one
          addEventListener(type, callback) // Register callbacks to be fired when this object throws the specified event
          removeEventListener(type, callback) // Unregister event callbacks
          localToWorld(localpoint) // Transform a vector from object's local space to world space
          worldToLocal(worldpoint) // Transform a vector from world space to object's local space
          distanceTo(other) // Calculate the scalar distance from this object to another
          addForce(type, args) // Attach a physical force to this object (supported types: 'static', 'gravity', 'spring', 'buoyancy', 'friction', 'drag', 'aero', 'aerocontrol', 'magnet', 'electrostatic')
          removeForce(force) // Remove the specified force from this body
          die() // Destroy this object and remove it from the scene
          executeCallback:     ['function', 'executeCallback']
}
