# The Unofficial Guide to JanusVR

Inspired by the [Metaverse](https://en.wikipedia.org/wiki/Metaverse) of Snow Crash and named after [Janus](https://en.wikipedia.org/wiki/Janus), the Roman God of passages, [JanusVR](https://janusvr.com) transforms the internet into a world you can visit and build in. The analogy is that webpages are rooms, and links connect rooms via portals (doorways which seamlessly connect rooms). The experience draws you into this metaverse whether you are strapped to a headset or on the move with a tablet. Here is a passage which describes the god Janus from the novel "The Light Between Oceans" by M. L. Stedman:

> "You know Janus is where the word January comes from? It's named after the same god as this island. He's got two faces, back to back. Pretty ugly fellow." 
>
> "What's he god of?"
>
>  "Doorways. Always looking both ways, torn between two ways of seeing things. January looks forward to the new year and back to the old year. He sees past and future. And the island looks in the direction of two different oceans, down to the South Pole and up to the Equator."
 
To be precise about the meaning of the name Janus - it is in reference to the portals which are used to interconnect rooms. Like the Roman god Janus, a portal is a single object with two faces that can peer into two separate spaces. Pages with specially-crafted HTML show enhanced 3D content and interactive editing of these environments is possible. Site translators take content and structure of existing sites, generating environments from this data which arrange the content in a meaningful way. The experience is collaborative -- multiple people can navigate virtual spaces together, communicating via voice or text and sharing portals to new areas to explore as a group.

- Author content using existing 3D modeling tools, with our extended HTML and javascript
- Navigate using traditional gamer controls, touch, teleporting ghosts or 3D hand gestures
- Open source native and web clients, networking server, and tools for porting content
- Real-time physics, physically based rendering, spatialized audio
- Customize your Avatar
- Talk, chat and visually interact in 3D
- Surf the 2D web in 3D environments

***

# Table of Contents

- :wrench: [**Build**](https://madjin.github.io/janus-guide/#/build/README): Learn how to create immersive worlds with Janus
  - [Assets](https://madjin.github.io/janus-guide/#/build/assets) - List of assets that can be used throughout a web space
  - [Rooms](https://madjin.github.io/janus-guide/#/build/room) - Section of JML that declares how assets appear in the web space
  - [Javascript](https://madjin.github.io/janus-guide/#/build/javascript) - Overview of scripting compatible with Janus native
  - [Server](https://madjin.github.io/janus-guide/#/build/server) - Server API for the networking layer

- :mount_fuji: [**JanusWeb**](https://madjin.github.io/janus-guide/#/wiki/README): Web framework for building interconnected 3D experiences
  - [Loading Anatomy](https://madjin.github.io/janus-guide/#/wiki/anatomy) - Overview of how JanusWeb is loaded
  - [Collision Meshes](https://madjin.github.io/janus-guide/#/wiki/collisionmeshes) - Learn how to setup collision detection
  - [Controls](https://madjin.github.io/janus-guide/#/wiki/controls) - Control mapping system for VR controllers, gamepads, joysticks, etc
  - [Custom Elements](https://madjin.github.io/janus-guide/#/wiki/customelements) - Extend functionality with custom-defined object types
  - [JanusWeb UI](https://madjin.github.io/janus-guide/#/wiki/januswebui) - Create and extend the JanusWeb user interface

- :open_file_folder: [**Examples**](https://madjin.github.io/janus-guide/#/examples/README): Presets for quickly getting started making worlds
  - [Janus Markup](https://madjin.github.io/janus-guide/#/examples/markup) - Introduction to JML
  - [Janus Scripts](https://madjin.github.io/janus-guide/#/examples/scripts) - Janus script examples (native compatibility)
  - [Janus Components](https://madjin.github.io/janus-guide/#/examples/components?id=janus-custom-components) - Variety of custom components
    - [Media](https://madjin.github.io/janus-guide/#/examples/components?id=media) - Powerful components for interactive media
    - [Scenery](https://madjin.github.io/janus-guide/#/examples/components?id=scenery) - Fireworks, procedural nature, and water
    - [Space](https://madjin.github.io/janus-guide/#/examples/components?id=space) - Experiment using the built-in physics force generators
    - [Tools](https://madjin.github.io/janus-guide/#/examples/components?id=tools) - Bitcoin exchange and various lights
    - [Utils](https://madjin.github.io/janus-guide/#/examples/components?id=utils) - Instancing, layouts, buttons, teleporters, and more

- :notebook: [**Guides**](https://madjin.github.io/janus-guide/#/guide/README): Useful tutorials made by the community
  - [Unity to JanusVR](https://madjin.github.io/janus-guide/#/guide/unity) - Guide on exporting unity scenes to webvr compatible JML
  - [Vesta Basics](https://madjin.github.io/janus-guide/#/guide/vestabasics) - Tutorial on how to use Vesta with native client editor
  - [Janus to Decentraland](https://madjin.github.io/janus-guide/#/guide/dclconvert) - Convert Janus scenes to DCL SDK
  - [Blender to JanusVR](https://madjin.github.io/janus-guide/#/guide/firevr) - Learn about the Blender plugin for JanusVR
  - [Share to Dat](https://madjin.github.io/janus-guide/#/guide/dat) - Distribute your virtual worlds over a P2P network

## Table of Contents

- :wrench: [**Build**](https://madjin.github.io/janus-guide/#/build/README): Learn how to create immersive worlds with Janus
  - [Assets](https://madjin.github.io/janus-guide/#/build/assets) - List of assets that can be used throughout a web space
  - [Rooms](https://madjin.github.io/janus-guide/#/build/room) - Section of JML that declares how assets appear in the web space
  - [Javascript](https://madjin.github.io/janus-guide/#/build/javascript) - Overview of scripting compatible with Janus native
  - [Server](https://madjin.github.io/janus-guide/#/build/server) - Server API for the networking layer

- :mount_fuji: [**JanusWeb**](https://madjin.github.io/janus-guide/#/wiki/README): Web framework for building interconnected 3D experiences
  - [Loading Anatomy](https://madjin.github.io/janus-guide/#/wiki/anatomy) - Overview of how JanusWeb is loaded
  - [Collision Meshes](https://madjin.github.io/janus-guide/#/wiki/collisionmeshes) - Learn how to setup collision detection
  - [Controls](https://madjin.github.io/janus-guide/#/wiki/controls) - Control mapping system for VR controllers, gamepads, joysticks, etc
  - [Custom Elements](https://madjin.github.io/janus-guide/#/wiki/customelements) - Extend functionality with custom-defined object types
  - [JanusWeb UI](https://madjin.github.io/janus-guide/#/wiki/januswebui) - Create and extend the JanusWeb user interface

- :open_file_folder: [**Examples**](https://madjin.github.io/janus-guide/#/examples/README): Presets for quickly getting started making worlds
  - [Janus Markup](https://madjin.github.io/janus-guide/#/examples/markup) - Introduction to JML
  - [Janus Scripts](https://madjin.github.io/janus-guide/#/examples/scripts) - Janus script examples (native compatibility)
  - [Janus Components](https://madjin.github.io/janus-guide/#/examples/components?id=janus-custom-components) - Variety of custom components
    - [Media](https://madjin.github.io/janus-guide/#/examples/components?id=media) - Powerful components for interactive media
    - [Scenery](https://madjin.github.io/janus-guide/#/examples/components?id=scenery) - Fireworks, procedural nature, and water
    - [Space](https://madjin.github.io/janus-guide/#/examples/components?id=space) - Experiment using the built-in physics force generators
    - [Tools](https://madjin.github.io/janus-guide/#/examples/components?id=tools) - Bitcoin exchange and various lights
    - [Utils](https://madjin.github.io/janus-guide/#/examples/components?id=utils) - Instancing, layouts, buttons, teleporters, and more

- :notebook: [**Guides**](https://madjin.github.io/janus-guide/#/guide/README): Useful tutorials made by the community
  - [Unity to JanusVR](https://madjin.github.io/janus-guide/#/guide/unity) - Guide on exporting unity scenes to webvr compatible JML
  - [Vesta Basics](https://madjin.github.io/janus-guide/#/guide/vestabasics) - Tutorial on how to use Vesta with native client editor
  - [Janus to Decentraland](https://madjin.github.io/janus-guide/#/guide/dclconvert) - Convert Janus scenes to DCL SDK
  - [Blender to JanusVR](https://madjin.github.io/janus-guide/#/guide/firevr) - Learn about the Blender plugin for JanusVR
  - [Share to Dat](https://madjin.github.io/janus-guide/#/guide/dat) - Distribute your virtual worlds over a P2P network

---

# Technology

The JanusVR project has evolved into a suite of technology addressing different areas needed to catalyze the open and immersive web. 

---

### Native C++ client

**<https://github.com/janusvr/janus>**

![Janus client](https://i.imgur.com/xVguGZb.jpg)

---

### Android Client

**<https://play.google.com/store/apps/details?id=org.janusvr>**

Port of the native client to Android phones.

![Android client in Vesta lobby](https://i.imgur.com/KCHf0b9.jpg)

---

### Web Client

**<https://github.com/jbaicoianu/janusweb>**

- Build immersive 3D environments for desktop, mobile, and VR devices using HTML and JS
- Rendering functionality provided by Three.js / WebGL
- Oculus Rift, Vive, GearVR, Daydream, and Cardboard support via WebVR API
- Realtime collaboration across all devices via built-in networking
- Import Collada, OBJ, glTF, and other popular 3d file formats
- 3D positional audio
- Gamepad support via the HTML5 Gamepad API
- Supports hand tracking peripherals like Leap Motion, Oculus Touch, and Vive controllers
- Support for 2d, sbs3d/ou3d, and 360 degree video textures using HTML5 Video
- Scriptable client enables many customized uses

<a href="https://i.imgur.com/mw0Um3C.gif">
  <img alt="Crystalball" target="_blank" src="https://i.imgur.com/mw0Um3C.gif" height="190" width="32%">
</a>
<a href="https://i.imgur.com/V6fqjVG.gif">
  <img alt="Augmented Perception" target="_blank" src="https://i.imgur.com/V6fqjVG.gif" height="190" width="32%">
</a>
<a href="https://i.imgur.com/i1nIXI8.gif">
  <img alt="Cinema" target="_blank" src="https://i.imgur.com/i1nIXI8.gif" height="190" width="32%">
</a>
<a href="https://i.imgur.com/FX3skXb.gif">
  <img alt="Drag n' Drop" target="_blank" src="https://i.imgur.com/FX3skXb.gif" height="190" width="32%">
</a>
<a href="https://i.imgur.com/9CqBKV5.gif">
  <img alt="Metacade" target="_blank" src="https://i.imgur.com/9CqBKV5.gif" height="190" width="32%">
</a>
<a href="https://imgur.com/pQAQ4yt.gif">
  <img alt="Mansion" target="_blank" src="https://imgur.com/pQAQ4yt.gif" height="190" width="32%">
</a>

---

### Janus Tools

**<https://github.com/janusvr/janus-tools>**

Import and Export between different engines 

![Janus Tools](https://i.imgur.com/VpsamZV.jpg)

---

### Vesta 

**<https://vesta.janusvr.com/>** 

Social network for WebVR, Build Create and Share 3D worlds: 

![Vesta 2D frontend with world select and building](https://i.imgur.com/xVPUoEK.jpg)

![JS spatializer for exploring Vesta in 3D (Early Access)](https://i.imgur.com/sXT0CiU.jpg)

---

### Janus Server

**<https://github.com/janusvr/janus-server>**

Lightweight networking server 

- Networks all (web, android, native) Janus client browsers into social Janus sessions
- Based on node.js, recording and playback
- Syncs text, voice, and editing in-world per site
- Private/Public/Party mode and local network support

![Group of players gathering together](https://i.imgur.com/fnNmqKK.jpg)

![Multiplayer support in Janus is open source](https://i.imgur.com/6RXHCGB.jpg)

---

### JML

**<https://madjin.github.io/janus-guide/#/examples/markup>**

Extensible Markup language and Entity Component System 

![XML and JSON versions of JML](https://i.imgur.com/DOgVDEa.jpg)

- Markup language examples: <https://madjin.github.io/janus-guide/#/examples/markup>
- Custom component examples: <https://madjin.github.io/janus-guide/#/examples/components?id=janus-custom-components>

![JML and the result 3D site](https://i.imgur.com/oTsRSIp.jpg)

---

### JS Spatializers

Demo: **<https://web.janusvr.com/sites/https/reddit.com/r/pics>**

Javascript translators to spatialize sites generatively 

JML is a language for defining immersive experiences on websites, while our spatialzers are customizable scripts that can convert any ordinary HTML page into JML, allowing anyone to make any part of the web (or all of it!) immersive.

Source to Reddit site translator: <https://github.com/jbaicoianu/janusweb/tree/master/media/assets/translator/reddit>

![Reddit site translator](https://i.imgur.com/i25kRic.jpg)

![Error code translators](https://i.imgur.com/eHj1VE3.jpg)

---

:pencil2: **To do**

- [ ] update all the pictures
- [ ] cover missing features
- [ ] add more information about light / shadow in a blog
- [ ] add links to examples for people to experiment
- [ ] spicy tutorials with links to the 'ingredients' in recipe
- [x] test frameworks to autogen beautiful themed documentation sites
