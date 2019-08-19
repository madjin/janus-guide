# Guide to JanusVR

JanusVR is a 3D internet browser and editor where users can meet and create VR content together in real-time.

## Features

- Create WebXR content in a real-time collaborative editor
- Author with our extended HTML and javascript framework
- Open source native and web clients, networking server, and [tools](https://github.com/janusvr/janus-tools) for porting content
- Optimized for 2D displays with support for Oculus Rift, HTC Vive, WMR, and other I/O
- Navigate using traditional gamer controls, touch, teleportation, or 3D hand gestures
- Real-time physics, physically based rendering, spatialized audio, glTF 2.0 support
- Customize your avatar ([see examples](https://github.com/janusvr-examples/custom-avatars))
- Talk, chat, and surf the 2D web in 3D environments with others!

### Janus

**<https://github.com/janusvr/janus>**

Native C++ client for browsing and editing the immersive web.

![Janus client](https://i.imgur.com/xVguGZb.jpg)

---

### Jandroid 

**<https://play.google.com/store/apps/details?id=org.janusvr>**

Port of the native client to Android devices.

![Android client in Vesta lobby](https://i.imgur.com/KCHf0b9.jpg)

---

### JanusWeb

**<https://github.com/jbaicoianu/janusweb>**

Web client built from the ground up with feature parity to native Janus to run on standard web browsers.

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

Import and Export scenes between different game engines and development environments using open source plugins. 

- Export from Unity / Unreal / Blender to WebVR
- Out of the box multiplayer support with Janus Presence
- Build maps 10x faster with your team using Janus
- Recycle content back into your favorite development environments

![Janus Tools](https://i.imgur.com/VpsamZV.jpg)

---

### Vesta 

**<https://vesta.janusvr.com/>** 

Social network for WebVR: Discover, build, and easily embed virtual worlds to your website! You can follow other creators, leave comments, and fork projects to remix other creations. Vesta is like the Neocities / Myspace / Glitch / Newgrounds of WebVR content.

![Vesta 2D frontend with world select and building](https://i.imgur.com/xVPUoEK.jpg)

![JS spatializer for exploring Vesta in 3D (Early Access)](https://i.imgur.com/sXT0CiU.jpg)

---

### Janus Server

**<https://github.com/janusvr/janus-server>**

Lightweight networking server to enable multiplayer interaction and real-time collaboration. 

- Networks all (web, android, native) Janus client browsers into social Janus sessions
- Based on node.js, recording and playback
- Syncs text, voice, and editing in-world per site
- Private/Public/Party mode and local network support

![Group of players gathering together](https://i.imgur.com/fnNmqKK.jpg)

![Multiplayer support in Janus is open source](https://i.imgur.com/6RXHCGB.jpg)

---

### JML

**<https://madjin.github.io/janus-guide/#/examples/markup>**

Extensible Markup language and Entity Component System for authoring VR sites. 

![XML and JSON versions of JML](https://i.imgur.com/DOgVDEa.jpg)

- Markup language examples: <https://madjin.github.io/janus-guide/#/examples/markup>
- Custom component examples: <https://madjin.github.io/janus-guide/#/examples/components?id=janus-custom-components>

![JML and the result 3D site](https://i.imgur.com/oTsRSIp.jpg)

---

### JS Spatializers

Demo: **<https://web.janusvr.com/sites/https/reddit.com/r/pics>**

Javascript translators dynamically generate 3D sites from data.

JML is a language for defining immersive experiences on websites, while the JSspatialzers are customizable scripts that can convert any ordinary HTML page into JML, allowing anyone to make any part of the web (or all of it!) immersive.

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

---

Legacy manual: <https://web.archive.org/web/20160328012318/http://www.janusvr.com/manual.html>
