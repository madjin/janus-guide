# Janus Custom Components

We've built a collection of various Janus custom components for developers to experiment with. The custom entity system, ECS for short, allows developers to define their own complex object types.

Check the [Reference](https://github.com/jbaicoianu/janusweb/wiki/Scripting-Support-2.0) for more info.

- [Media](/examples/components.md#media)
  - [Audio System](/examples/components.md#audiosystem)
  - [Meta Shortcut Format](/examples/components.md#msf)
  - [Presentation](/examples/components.md#presentation)
  - [Media Player](/examples/components.md#mediaplayer)
  - [Projector](/examples/components.md#projector)
  - [Record Player](/examples/components.md#recordplayer)
  - [Search](/examples/components.md#search)
  - [Stereosystem](/examples/components.md#stereosystem)
  - [Video Screen](/examples/components.md#videoscreen)
- [Scenery](/examples/components.md#scenery)
  - [Fireworks](/examples/components.md#fireworks)
  - [Forest](/examples/components.md#forest)
  - [Tree](/examples/components.md#tree)
  - [Water](/examples/components.md#water)
- [Space](/examples/components.md#space)
- [Tools](/examples/components.md#tools)
  - [Change Machine](/examples/components.md#changemachine)
  - [Street Light](/examples/components.md#streetlight)
  - [Torch](/examples/components.md#torch)
  - [Vending Machine](/examples/components.md#vendingmachine)
- [Utils](/examples/components.md#utils)
  - [Instanced Object](/examples/components.md#instancedobject)
  - [Layout](/examples/components.md#layout)
  - [Push Button](/examples/components.md#pushbutton)
  - [Showcase](/examples/components.md#showcase)
  - [Slider](/examples/components.md#slider)
  - [Speech Text](/examples/components.md#speechtext)
  - [Teleporter](/examples/components.md#teleporter) 

---

# Media

## [audiosystem](https://github.com/madjin/janus-custom-components/blob/master/media/audiosystem/audiosystem.js)

With audiosystem, you can take an audio source and drop it onto the scene and create connections to a variety of splitters and bandwidth filters, and can separately route the bass, mids, and highs to different physically-positioned speakers around the scene. Click below to watch virtually wiring up a room with audio-reactive lighting.

<a href="http://www.youtube.com/watch?feature=player_embedded&v=2zDDcD0Xwpk" target="_blank"><img src="http://img.youtube.com/vi/2zDDcD0Xwpk/0.jpg" alt="IMAGE ALT TEXT HERE" width="846" height="468" /></a>

***

## [book](https://github.com/madjin/janus-custom-components/blob/master/media/book/book.js)


***

## [msf](https://github.com/madjin/janus-custom-components/blob/master/media/msf/aarcade.js)

Regular shortcuts look like app icons, text links, or bookmark buttons. **Meta Shortcut Format** exists to facilitate a minimalistic rich presence for shortcuts, especially when used in 2D or 3D environments. This specification is to help 2D & 3D frontends dynamically generate rich representations of shortcut meta data.

Read more here: <https://github.com/smsithlord/MetaShortcutFormat>

![Preview](https://i.imgur.com/28iXQJs.jpg)

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/bai/anarchy-arcade-test)

```
<aacabinet cabinet_id="arcademachine" controlpanel_part_name="cabinet-front" js_id="supersmashland" marquee_part_name="cabinet-marquee" msf='{"title":"SuperSmashLand","file":"SuperSmashLand.exe","screen":"http://www.supersmashland.com/imgs/screenshot1.png","marquee":"https://i.ytimg.com/vi/KVROb_FPZCc/maxresdefault.jpg","preview":"https://www.youtube.com/watch?v=351CO5_8fbM","download":"http://www.supersmashland.com/","reference":"http://en.wikipedia.org/wiki/Super_Smash_Land","description":"Super Smash Land is a demake of Super Smash Bros. released in September 14, 2011 by Dan Fornace. The game features 6 playable characters and 11 stages. The game visual design resembles the graphics from the Nintendo Game Boy. The game was developed with GameMaker 7.","keywords":"retro, nintendo","type":"pc"}' pos="0 0 -2" scale="1.25 1.25 1.25" screen_part_name="screen"/>
```

***

## [presentation](https://github.com/madjin/janus-custom-components/blob/master/media/presentation/presentation.js)

![Preview](https://i.imgur.com/s55HNSs.jpg)

***

## [mediaplayer](https://github.com/madjin/janus-custom-components/blob/master/media/mediaplayer/mediaplayer.js)

This component isn't used directly, it's the base class for projector, cassetteplayer, etc. It's a great example of extended components where you write one base class which defines all interaction behavior, then you extend it for the specific uses.

***

## [projector](https://github.com/madjin/janus-custom-components/blob/master/media/projector/projector.js)

![Preview](https://i.imgur.com/OrXxiFs.jpg)

```
<AssetObject id="projector" src="http://assets.metacade.com/archive/models/projector/projector.dae" />
<AssetObject id="filmreel" src="http://assets.metacade.com/archive/models/projector/film.dae" />
<AssetObject id="table" src="http://assets.metacade.com/archive/models/table/RageTable.obj" />
<AssetSound id="projector_start" src="http://assets.metacade.com/archive/sounds/projector/projector-start.ogg" auto_play="true" />
<AssetSound id="projector_loop" src="http://assets.metacade.com/archive/sounds/projector/projector-loop.ogg" auto_play="true" loop="true" />
<AssetSound id="projector_stop" src="http://assets.metacade.com/archive/sounds/projector/projector-stop.ogg" auto_play="true" />

<Object id="plane" image_id="prelinger" pos="-1.3 1.5 -1.8" rotation="0 125 0" lighting="false" cull_face="none" />
<Object pos="-1.2 0 -2.8" xdir="0 0 1" zdir="-1 0 0">
  <Object id="table" envmap_id="library-interior" pos="0 0 0" xdir="0 0 1" zdir="-1 0 0" scale="1 2 1.6"
  <Projector screen="screen" id="projector" pos=".4 .67 0" envmap_id="library-interior" />
  <ProjectorScreen js_id="screen" pos="0 1 2.1" scale="2 2 2" />
  <ArchiveCollection collectionname="prelinger" itemtype="archive_film" pos="-.2 .95 0" rotation="0 -45 0" />
</Object>
```

***

## [recordplayer](https://github.com/madjin/janus-custom-components/blob/master/media/recordplayer/recordplayer.js)

![Preview](https://i.imgur.com/JSuAJRd.jpg)

```
<AssetObject id="table" src="http://assets.metacade.com/archive/models/table/RageTable.obj" />
<AssetObject id="gramophone" src="http://assets.metacade.com/internetarchive/gramophone/scene.gltf" />
<AssetObject id="record" src="http://assets.metacade.com/archive/models/gramophone/record.dae" />

<Object pos="0 0 -4" xdir="0 0 -1" zdir="1 0 0">
  <Object id="table" envmap_id="library-interior" pos="0 0 0" xdir="1 0 0" zdir="0 0 1" scale="1 2 1.6" collision_id="cube" collision_scale="1 1.05 2" collision_pos="0 .22 0" />
  <RecordPlayer pos="0 .95 .475" id="gramophone" rotation="0 -135 0" modelscale=".18 .18 .18" js_id="recordplayer" />
  <ArchiveCollection collectionname="georgeblood" itemtype="archive_record" pos="-.2 .95 0" rotation="0 -45 0" />
</Object>
```

***

## [search](https://github.com/madjin/janus-custom-components/blob/master/media/search/search.js)

![Preview](https://i.imgur.com/nv8EUM9.jpg)

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](http://assets.metacade.com/internetarchive/)

```
<AssetObject id="crate" src="http://assets.metacade.com/internetarchive/crate/scene.gltf" />
<AssetScript src="http://assets.metacade.com/internetarchive/scripts/search.js" />

<ArchiveCollection collectionname="hiphopmixtapes" itemtype="archive_cassette" pos="-.25 .95 .4" rotation="0 0 0" />
<ArchiveCollection collectionname="georgeblood" itemtype="archive_record" pos="-.2 .95 0" rotation="0 -45 0" />
<ArchiveCollection collectionname="prelinger" itemtype="archive_film" pos="-.2 .95 0" rotation="0 -45 0" />
```

***

## [stereosystem](https://github.com/madjin/janus-custom-components/blob/master/media/stereosystem/stereosystem.js)

![Preview](https://i.imgur.com/wIPmZUQ.jpg)

```
<AssetObject id="boombox" src="https://vesta.janusvr.com/files/bepis/obj/boombox/scene.gltf" />
<AssetObject id="tapedeck" src="https://github.com/jbaicoianu/internetVRchive/raw/master/media/models/audio/technics-rs-bx404.dae" />
<AssetObject id="speaker" src="https://github.com/jbaicoianu/internetVRchive/raw/master/media/models/audio/speaker.dae" />
<AssetObject id="cassette" src="https://github.com/jbaicoianu/internetVRchive/raw/master/media/models/audio/cassette.dae" />

<Object pos="0 0 -1.6" xdir="0 0 1" zdir="-1 0 0">
  <Object id="table" envmap_id="library-interior" pos="0 0 0" xdir="1 0 0" zdir="0 0 1" scale="1 2 1.6" collision_id="cube" collision_scale="1 1 2" collision_pos="0 .22 0" />
  <CassettePlayer pos="0 1.425 -.2" rotation="0 -70 0" bodyid="boombox" modelscale=".05 .05 .05" speaker_left="speaker_left" speaker_right="speaker_right" envmap_id="library-interior" js_id="cassetteplayer">
          <Speaker js_id="speaker_left" bodyid="" pos="-10 0 0" />
          <Speaker js_id="speaker_right" bodyid="" pos="10 0 0" />
<Object id="plane" col="black" pos="0 -.3 .12" scale=".8 .35 1" cull_face="none" />
  </CassettePlayer>
  <ArchiveCollection collectionname="hiphopmixtapes" itemtype="archive_cassette" pos="-.25 .95 .4" rotation="0 0 0" />
</Object>
```

***

## [videoscreen](https://github.com/madjin/janus-custom-components/blob/master/media/videoscreen/videoscreen.js)

![Preview](https://i.imgur.com/USa1ELw.jpg)

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/bepis/cinema)

```
<AssetScript src="http://assets.metacade.com/flynns-theater/videoscreen.js"/>

<videoscreen col="1 1 1" cull_face="none" id="plane" js_id="mainvideo" lighting="false" pos="0.5 8.3 -21" scale="5.5 1.8 .001" video_id="main4kvid" xdir="0 0 1" zdir="-1 0 0"/>
```

***

## [viewer](https://github.com/madjin/janus-custom-components/blob/master/media/viewer/viewer.js)

```
<Viewer js_id="viewer" />
```

# Scenery

## [fireworks](https://github.com/madjin/janus-custom-components/blob/master/scenery/fireworks/fireworks.js)

<a href="http://www.youtube.com/watch?feature=player_embedded&v=mlprVOze43A" target="_blank"><img src="http://img.youtube.com/vi/mlprVOze43A/0.jpg" alt="IMAGE ALT TEXT HERE" width="846" height="468" /></a>

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](http://demos.janusvr.com/bai/fireworks/)

***

## [forest](https://github.com/madjin/janus-custom-components/blob/master/scenery/forest/forest.js)

![Preview](https://i.imgur.com/3ouXnJe.jpg)

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/bai/forest-test)

***

## [tree](https://github.com/madjin/janus-custom-components/blob/master/scenery/tree/tree.js)

![Preview](https://i.imgur.com/JxIjq0u.jpg)

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/bai/proctree-test)

```
<tree json='{"seed":152, "segments":8, "levels":5, "vMultiplier":1.16, "twigScale":0.39, "initalBranchLength":0.49, "lengthFalloffFactor":0.85, "lengthFalloffPower":0.99, "clumpMax":0.454, "clumpMin":0.454, "branchFactor":3.2, "dropAmount":0.09, "growAmount":0.235, "sweepAmount":0.051, "maxRadius":0.105, "climbRate":0.322, "trunkKink":0, "treeSteps":5, "taperRate":0.964, "radiusFalloffRate":0.73, "twistRate":1.5, "trunkLength":2.25, "trunkMaterial":"TrunkType1", "twigMaterial":"BranchType2"}' pos="-6 0 -5"/>
```

***

## [water](https://github.com/madjin/janus-custom-components/blob/master/scenery/water/water.js)

![Preview](https://i.imgur.com/9fatPKf.jpg)

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/water)

```
<AssetImage id="water" src="https://github.com/mrdoob/three.js/raw/master/examples/textures/waternormals.jpg"/>
<AssetScript src="https://github.com/jbaicoianu/janus-custom-components/raw/master/scenery/water.js"/>

<water pos="0 -1.3 70.75" sizex="1000" sizey="1000" />
```

# Space

An experiment using JanusWeb's built-in physics force generators (N-body universal simulation). This also demonstrates some of JanusWeb's positional audio support.

![Preview](https://i.imgur.com/DzJNeOk.jpg)

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/bai/gravity-sim-test)


## [asteroidbelt](https://github.com/madjin/janus-custom-components/blob/master/space/asteroidbelt/asteroidbelt.js)

```
<AsteroidBelt beltend="4.787e11" beltstart="3.142e11" count="5000"/>
```

## [planet](https://github.com/madjin/janus-custom-components/blob/master/space/planet/planet.js)

```
<Planet daylength="24" image_id="earth-diffuse" js_id="earth" mass="5.972e24" pos="1.496e11 0 0" radius="6.371e6">
  <Sound auto_play="true" gain=".2" id="jimihendrix-watchtower" loop="true" pos="0 0 0"/>
</Planet>
```

## [star](https://github.com/madjin/janus-custom-components/blob/master/space/star/star.js)

```
<Star col=".99 .83 .25" intensity="8" js_id="sun" mass="1.989e30" radius="6.957e8"/>
```

## [starsystem](https://github.com/madjin/janus-custom-components/blob/master/space/starsystem/starsystem.js)

```
<StarSystem js_id="sol" planetscale="1000" pos="0 1.5 14.15" scale="1e-10 1e-10 1e-10" spinscale=".05" starscale="100" timescale="1000000">
   <Star col=".99 .83 .25" intensity="8" js_id="sun" mass="1.989e30" radius="6.957e8"/>
   <Planet daylength="58.646" image_id="mercury-diffuse" js_id="mercury" mass="3.285e23" pos="5.791e10 0 0" radius="2.44e6">
    <Sound auto_play="true" id="gustavholst-mercury" loop="true" pos="0 0 0"/>
   </Planet>
   <Planet daylength="116.75" image_id="venus-diffuse" js_id="venus" mass="4.867e24" pos="1.082e11 0 0" radius="6.052e6">
    <Sound auto_play="true" id="gustavholst-venus" loop="true" pos="0 0 0"/>
   </Planet>
   <Planet daylength="24" image_id="earth-diffuse" js_id="earth" mass="5.972e24" pos="1.496e11 0 0" radius="6.371e6">
    <Sound auto_play="true" gain=".2" id="jimihendrix-watchtower" loop="true" pos="0 0 0"/>
   </Planet>
   <Planet daylength="24.67" image_id="mars-diffuse" js_id="mars" mass="6.39e23" pos="2.279e11 0 0" radius="3.39e6">
    <Sound auto_play="true" id="gustavholst-mars" loop="true" pos="0 0 0"/>
   </Planet>
   <AsteroidBelt beltend="4.787e11" beltstart="3.142e11" count="5000"/>
   <Planet daylength="9.93" image_id="jupiter-diffuse" js_id="jupiter" mass="1.898e27" pos="7.785e11 0 0" radius="6.9911e7">
    <Sound auto_play="true" id="gustavholst-jupiter" loop="true" pos="0 0 0"/>
   </Planet>
   <Planet daylength="10.7" image_id="saturn-diffuse" js_id="saturn" mass="5.683e26" pos="14.29e11 0 0" radius="5.8232e7">
    <Sound auto_play="true" id="gustavholst-saturn" loop="true" pos="0 0 0"/>
   </Planet>
   <Planet daylength="17.23" image_id="uranus-diffuse" js_id="uranus" mass="8.681e25" pos="28.71e11 0 0" radius="2.5362e7">
    <Sound auto_play="true" id="gustavholst-uranus" loop="true" pos="0 0 0"/>
   </Planet>
   <Planet daylength="16.1" image_id="neptune-diffuse" js_id="neptune" mass="1.024e26" pos="44.98e11 0 0" radius="2.4622e7">
    <Sound auto_play="true" id="gustavholst-neptune" loop="true" pos="0 0 0"/>
   </Planet>
</StarSystem>
```

# Tools

## [changemachine](https://github.com/madjin/janus-custom-components/blob/master/tools/changemachine/changemachine.js)

![Preview](https://i.imgur.com/Mdfhf3d.jpg)

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://www.metacade.com)

```
<AssetObject id="change-machine-high" src="http://assets.metacade.com/metacade/change-machine/change-machine.dae.gz"/><AssetObject id="change-machine-high_collider" src="http://assets.metacade.com/metacade/change-machine/change-machine-collider.dae.gz"/>
<AssetScript src="changemachine.js"/>

<ChangeMachine fwd="0 0 1" id="change-machine-high" lighting="true" pos="-1.5071823596954 0.065061643719673 2.5123152732849" up="0 1 0" xcollision_id="change-machine-high_collider" envmap_id="envmap-interior"/>
```

***

## [streetlight](https://github.com/madjin/janus-custom-components/blob/master/tools/streetlight/streetlight.js)

![Preview](https://i.imgur.com/NMjft9V.jpg)

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/streetlight)

```
<object pos="0 .2 0">
     <Text col="#0000ff" font_scale="false" font_size=".05" pos="-.5 .15 .2" scale="1 1 .2">&lt;pushButton&gt;</Text>
     <PushButton height=".2" length=".2" onclick="room.objects['mylamp'].toggleLight()" pos="-.5 0 .5" width=".2"/>
     <Text col="#4cb96f" font_scale="false" font_size=".05" pos=".2 .15 .2" scale="1 1 .2">&lt;slider&gt;</Text>
     <Slider max="15" min="0" onchange="room.objects['mylamp'].setBrightness(this.value)" pos=".2 0 .5" value="8"/>
     <Text col="#4cb96f" font_scale="false" font_size=".05" pos=".8 1.0 -.2" scale="1 1 .2">&lt;streetLight&gt;</Text>
     <StreetLight col="#ff5" js_id="mylamp" light_pos=".25 1.5 0" model_id="https://vesta.janusvr.com/files/bepis/obj/blocks/streetlamp2.obj.gz" model_pos="0 .5 0" pos=".5 0 0"/>
     <object col="#ccc" collision_id="cube" id="cube" pos="0 0 0" scale="2.5 .05 .8"/>
    </object>
```

***

## [torch](https://github.com/madjin/janus-custom-components/blob/master/tools/torch/torch.js)

![Preview](https://i.imgur.com/VqfQmC1g.jpg)

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/bai/minecraft-torch-test)

```
<AssetImage id="particle" src="https://vesta.janusvr.com/files/bepis/zelda/kokiri0/yellowparticle.png"/>

<Particle col="#666666" count="500" duration="10" id="1140" image_id="particle" lighting="false" loop="true" pos="-40 0 -40" rand_accel="0.1 0.1 0.1" rand_pos="70 6 70" rand_vel="0.2 0.2 0.2" rate="80" scale="0.02 0.02 0.02" vel="-0.1 -0.1 -0.1"/>
<Torch pos="0 0 2"/>
```

***

## [vendingmachine](https://github.com/madjin/janus-custom-components/blob/master/tools/vendingmachine/vendingmachine.js)

![Preview](https://i.imgur.com/TOvOwX9.jpg)

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/bai/vending-machine-test)

```
<AssetObject id="machine" src="https://vesta.janusvr.com/files/bai/vendingmachine/vendingmachine.obj"/>
<AssetObject id="coin" src="https://vesta.janusvr.com/files/bai/vendingmachine/coin.obj"/>

<VendingMachine pos="0 0 2" xdir="-1 0 0" zdir="0 0 -1"/>
<Coin pos="-1.04 1.2 1.1"/>
<Coin pos="-1.06 1.25 1.1"/>
<Coin pos="-.92 1.27 1.06"/>
```

***

# WIP

These are room scripts that can be easily turned into janus components. One can study the differences when any of these become adapted into a component.

## [minecraft](https://github.com/madjin/janus-custom-components/blob/master/tools/minecraft/minecraft2.js)

![Preview](https://i.imgur.com/hQMLPnc.jpg)

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/nazrin/minecraft-sandbox)


## [gta](https://github.com/madjin/janus-custom-components/blob/master/tools/gta/gta.js)

Pre-component, drive a car around the city.

## [hackthegibson](https://github.com/madjin/janus-custom-components/blob/master/tools/hackthegibson/hackthegibson.js)

Pre-component example that could become the basis of a fps game.

---

# Utils

## [bulletedlist](https://github.com/madjin/janus-custom-components/blob/master/utils/bulletedlist/bulletedlist.js)

```
<bulletedlist js_id="featurelist" pos="0 1 0">
 <listitem text="&lt;widget&gt; "/>
 <listitem text="&lt;slide&gt; "/>
</bulletedlist>
```

***

## [impostergroup](https://github.com/madjin/janus-custom-components/blob/master/utils/impostergroup/impostergroup.js)


***

## [instancedobject](https://github.com/madjin/janus-custom-components/blob/master/utils/instancedobject/instancedobject.js)

![Preview](https://i.imgur.com/ESWkWxe.jpg)

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/bai/instancing-test)

```
<AssetObject id="milktruck" src="https://github.com/KhronosGroup/glTF-Sample-Models/raw/master/2.0/CesiumMilkTruck/glTF/CesiumMilkTruck.gltf"/>


<InstancedObject model_id="milktruck" pos="0 0 0">
 <Instance pos="-40 0 -40"/>
 <Instance pos="-36 0 -36"/>
</InstancedObject>
```

***

## [layout](https://github.com/madjin/janus-custom-components/blob/master/utils/layout/layout.js)

![Preview](https://i.imgur.com/rnQbzlH.jpg)

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/layout)

The id="" can be a relative or absolute link pointing to the location of an assetobject.


```
<HorizontalLayout pos="-.75 .25 -.2" scale=".2 .2 .2">
 <Object id="https://vesta.janusvr.com/files/bepis/obj/blocks/lamp.obj.gz"/>
 <Object id="https://vesta.janusvr.com/files/bepis/obj/blocks/lampstand.obj.gz" scale=".2 .2 .2"/>
 <Object id="https://vesta.janusvr.com/files/bepis/obj/blocks/lantern.obj.gz"/>
 <Object id="https://vesta.janusvr.com/files/bepis/obj/blocks/streetlamp2.obj.gz"/>
 <Object id="https://vesta.janusvr.com/files/bepis/obj/blocks/tablelamp.obj.gz" scale=".2 .2 .2"/>
</HorizontalLayout>

<CircularLayout pos="-.25 1.5 -.2" radius="1.5" scale=".2 .2 .2" xdir="1 0 0" ydir="0 0 1" zdir="0 -1 0">
 <Object col="red" id="cube" scale=".5 .5 .5"/>
 <Object col="orange" id="cube" scale=".5 .5 .5"/>
 <Object col="yellow" id="cube" scale=".5 .5 .5"/>
 <Object col="green" id="cube" scale=".5 .5 .5"/>
 <Object col="blue" id="cube" scale=".5 .5 .5"/>
 <Object col="purple" id="cube" scale=".5 .5 .5"/>
</CircularLayout>

<VerticalLayout pos=".75 .1 -.2" scale=".3 .3 .3">
 <Object id="https://vesta.janusvr.com/files/bepis/obj/blocks/chococake.obj.gz" rotate_deg_per_sec="20" rotation="15 0 0" scale=".5 .5 .5"/>
 <Object id="https://vesta.janusvr.com/files/bepis/obj/blocks/taco.obj.gz" rotate_deg_per_sec="20" rotation="15 0 0"/>
 <Object id="https://vesta.janusvr.com/files/bepis/obj/blocks/pizza.obj.gz" rotate_deg_per_sec="20" rotation="15 0 0" scale="2 2 2"/>
 <Object id="https://vesta.janusvr.com/files/bepis/obj/blocks/hotdog.obj.gz" rotate_deg_per_sec="20" rotation="15 0 0" scale=".5 .5 .5"/>
 <Object id="https://vesta.janusvr.com/files/bepis/obj/blocks/donut2.obj.gz" rotate_deg_per_sec="20" rotation="15 0 0"/>
</VerticalLayout>
```

***

## [objectfader](https://github.com/madjin/janus-custom-components/blob/master/utils/objectfader/objectfader.js)


***

## [objectpool](https://github.com/madjin/janus-custom-components/blob/master/utils/objectpool/objectpool.js)

```
<objectpool count="4" objecttype="particle" js_id="explosionfactory" />
```

***

## [pushbutton](https://github.com/madjin/janus-custom-components/blob/master/utils/pushbutton/pushbutton.js)

![Preview](https://imgur.com/hxu1GKo.gif)

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/streetlight)

***

## [showcase](https://github.com/madjin/janus-custom-components/blob/master/utils/showcase/showcase.js)

![Preview](https://i.imgur.com/KRoeUQQ.jpg)

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/bepis/vrchat-hub)

```
<Showcase col="#ef2d5e" id="aframe" link_external="true" logo_url="https://aframe.io/aframe-school/media/img/aframe-logo.png" pos="-5.1 0.1 9.8" thumb_url="http://i.imgur.com/EHlQMRN.png" url="https://networked-aframe.glitch.me/" xdir="-1 0 0" zdir="0 0 -1"/>
```

***

## [slider](https://github.com/madjin/janus-custom-components/blob/master/utils/slider/slider.js)

![Preview](https://imgur.com/LUFicrn.gif)

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/streetlight)

```
<Slider max="15" min="0" onchange="room.objects['mylamp'].setBrightness(this.value)" pos=".2 0 .5" value="8"/>
```

***

## [speechtext](https://github.com/madjin/janus-custom-components/blob/master/utils/speechtext/speechtext.js)

![Preview](https://i.imgur.com/lfDOUq8.jpg)

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/bai/speechtext-test)

```
<AssetScript src="https://github.com/madjin/janus-custom-components/raw/master/utils/objectpool/objectpool.js"/>
<AssetScript src="https://raw.githubusercontent.com/madjin/janus-custom-components/master/utils/speechtext/speechtext.js"/>

<SpeechText pos="0 1 -5"/>
```

***

## [teleporter](https://github.com/madjin/janus-custom-components/blob/master/utils/teleporter/teleporter.js)

![Preview](https://i.imgur.com/FV4aO4u.gif)

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/teleporter)

```
<Teleporter col="#4cb96f" external="true" js_id="test" logo_scale="3.3 3 1" pos="-20 1.4 15.1" url="hifi://maker" xdir="0 0 -1" zdir="1 1 0"/>
```


