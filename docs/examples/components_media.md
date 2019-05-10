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
