# Dat VR

[dat://](https://datproject.org) is a peer-to-peer protocol that is similar to HTTP but can work offline or with poor connectivity. The data is hosted and distributed by many computers on the network and the original uploader can modify data while keeping a full history.

If you are interested in learning more about Dat the docs are a great place to start: <https://docs.datproject.org/docs/intro>

This guide is more useful after having already made a world already because it is largely focused around how to distribute it. If you are interested in learning how to make worlds, here are some recommended learning resources:


- [Janus Build Introduction](https://madjin.github.io/janus-guide/#/build/README) - Start here to learn how to build
- [Blender to WebVR Guide](https://madjin.github.io/janus-guide/#/guide/firevr) - FireVR, a Blender to JanusVR plugin 
- [JanusVR Examples](https://github.com/janusvr/janusvr-examples) - Sample templates to bootstrap VR sites with 
- [Unity to Janus Guide](https://madjin.github.io/janus-guide/#/guide/unity) - Use a plugin to export a scene from Unity3D
 

## Pre-requisites:

- [dat command line tool](https://try-dat.com/01-install.html)
- [JanusWeb](https://github.com/jbaicoianu/janusweb)
- [Hashbase account](https://hashbase.io/) - OPTIONAL
- [JanusVR](http://www.janusvr.com/download.php) - OPTIONAL


---

### 1. Install dat

Read this for the full guide <https://try-dat.com/01-install.html>!

Type this in your local terminal:

`npm install -g dat`

After dat is installed, we can now share a folder.


### 2. Share project

Make a new folder and then copy the project files over to it. All that is needed for a Janus site is a text file containing HTML. The template for a basic janus site looks as follows:

```html
<html>
<body>
<!--
<FireBoxRoom>
<Assets>
</Assets>
<Room>
</Room>
</FireBoxRoom>
 -->
<script src="https://web.janusvr.com/janusweb.js"></script>
<script>elation.janusweb.init({url: document.location.href})</script>
</body>
</html>
```

**OPTIONAL**: Build and host janusweb.js yourself: <https://github.com/jbaicoianu/janusweb>

If you save this as a file in an empty directory, give it a name like `test.html`, then open a terminal from that folder and type: 
`dat share`

You will get the address to share the VR site as well as other useful output. As long as this process is open your folder content can be viewed p2p by another person in the swarm that has that unique string. 

If you want to keep your files distributed while your computer is off, you can install dat on a spare computer or try something like [Hashbase](https://hashbase.io). 

<https://www.youtube.com/watch?v=wwLaEyKGc90>: Watch a tutorial on uploading to [Hashbase.io](https://hashbase.io/) 


#### **Resources**

- <https://madjin.github.io/janus-guide/#/examples/markup>: Further documentation for JML (Janus Markup Language)
- <https://github.com/madjin/janusvr-examples>: Start with a template


### 3. Connect Worlds

WIP

