## **Intro to JML**

<http://janusvr.com/docs/build/introtojml/index.html> 

Common attributes:
    
pos = "1 2 3" -> x=1, y=2, z=3

scale = "1 2 3" -> x=1, y=2, z=3

rot = "0 45 90" -> x=0, y=45, z=90

js_id -> id used by scripts to refer to the object

id -> id of the asset used by this object

sync = "true" -> synchronizes this object with other users

## [Basic Template](https://github.com/janusvr/janusvr-examples)

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


### Assets

```html
<FireBoxRoom>
<Assets>
</Assets>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/assets)

### Image

```html
<FireBoxRoom>
<Assets>
<AssetImage id="image" src="image.jpg" />
</Assets>
<Room>
<Image id="image" js_id="0" pos="0 1 10" scale="10 10 10" lighting="false" />
</Room>
</FireBoxRoom>
```
[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/assetimage) 
    
### Sound
    
```html
<FireBoxRoom>
<Assets>
<AssetSound id="music" src="song.mp3" />
</Assets>
<Room>
<Sound id="music" js_id="0" pos="0 1 5" rect="-100 -50 100 50" loop="true" />
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/assetsound)

### Video

```html
<FireBoxRoom>
<Assets>
<AssetObject id="screen" src="screen.obj" />
<AssetVideo id="video" src="video.mp4" auto_play="true" loop="true" />
</Assets>
<Room>
<Object id="screen" js_id="0" pos="0 -1 8" scale="10 8 1" lighting="false" video_id="video" />
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/assetvideo)

### Object

```html
<FireBoxRoom>
<Assets>
<AssetObject id="thing" src="thing.obj" />
</Assets>
<Room>
<Object id="thing" js_id="0" pos="0 2 10" scale="2 2 2" />
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/assetobject)

### Shader

```html
<FireBoxRoom>
<Assets>
<AssetShader id="shader" vertex_src="twist.txt" />
</Assets>
<Room>
<Object id="cube" js_id="0" pos="0 0 10" xdir="-1 0 0" zdir="0 0 -1" scale="2 4 2" shader_id="shader" />
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/assetshader)

### Ghost

```html
<FireBoxRoom>
<Assets>
<AssetGhost id="ghost" src="ghost.txt" />
</Assets>
<Room>
<Ghost id="ghost" ghost_id="ghost" scale="3 3 3" lighting="false" head_id="head" head_pos="0 0.2 0" body_id="body" />
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/assetghost)

### Websurface

```html
<FireBoxRoom>
<Assets>
<AssetWebSurface id="startpage" src="https://startpage.com/" width="1000" height="800" />
</Assets>
<Room>
<Object id="plane" js_id="1" pos="0 0 10" xdir="-1 0 0" zdir="0 0 -1" lighting="false" cull_face="none" websurface_id="startpage" />
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/assetwebsurface)

### Scripts

```html
<FireBoxRoom>
<Assets>
<AssetScript src="script.js" />
</Assets>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/assetscript)

***

## **ROOMS**

<http://janusvr.com/docs/build/roomtag/index.html>

### Skybox

```html
<FireBoxRoom>
<Assets>
<AssetImage id="sky_down"  src="sky_down.jpg" tex_clamp="true" />
<AssetImage id="sky_right" src="sky_right.jpg" tex_clamp="true" />
<AssetImage id="sky_front" src="sky_front.jpg" tex_clamp="true" />
<AssetImage id="sky_back"  src="sky_back.jpg" tex_clamp="true" />
<AssetImage id="sky_up"    src="sky_up.jpg" tex_clamp="true" />
<AssetImage id="sky_left"  src="sky_left.jpg" tex_clamp="true" />
</Assets>
<Room skybox_down_id="sky_down"  skybox_right_id="sky_right" skybox_front_id="sky_front" skybox_back_id="sky_back" skybox_up_id="sky_up" skybox_left_id="sky_left" >
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/skybox)

### Room Template

```html
<FireBoxRoom>
<Assets>
</Assets>
<Room use_local_asset="room_plane" pos="0 0 0" xdir="1 0 0" ydir="0 1 0" zdir="0 0 1">
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/room-template)

### Near Far Plane

```html
<FireBoxRoom>
<Assets>
</Assets>
<Room use_local_asset="room_plane" near_dist="0.01" far_dist="12.0">
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/near-far-plane)

### Gravity, Jump, Run, Walk

```html
<FireBoxRoom>
<Assets>
</Assets>
<Room gravity="-3.0" jump_velocity="10.0" walk_speed="5.0" run_speed="10.0" use_local_asset="room_plane" >
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/movement)

### Cursor Visible

```html
<FireBoxRoom>
<Assets>
</Assets>
<Room use_local_asset="room_plane" cursor_visible="false">
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/multiplayer-privacy)

### Fog

```html
<FireBoxRoom>
<Assets>
</Assets>
<Room use_local_asset="room_plane" fog="true" fog_mode="exp" fog_density="0.1" fog_col="1 1 1">
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/fog)

### Teleport Distance

```html
<FireBoxRoom>
<Assets>
</Assets>
<Room use_local_asset="room_plane" teleport_min_dist="10.0" teleport_max_dist="100.0" >
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/teleportation)

### Global Shader

```html
<FireBoxRoom>
<Assets>
<AssetShader id="room_shader" src="party_frag.txt" />
</Assets>
<Room shader_id="room_shader">
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/global-shader)

### Multiplayer Server

```html
<FireBoxRoom>
<Assets>
</Assets>
<Room server="presence.janusvr.com" port="5567" >
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/multiplayer-server)

### Reset Volume

```html
<FireBoxRoom>
<Assets>
</Assets>
<Room reset_volume="-1000 -500 -1000 1000 0 1000">
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/reset-volume)


### Global Env Probe

```html
<FireBoxRoom>
<Assets>
<AssetImage id="skybox_radiance" src="radiance.dds" tex_clamp="false" tex_linear="true" /> 
<AssetImage id="skybox_irradiance" src="irradiance64.dds" tex_clamp="false" tex_linear="true" />
</Assets>
<Room cubemap_radiance_id="skybox_radiance" cubemap_irradiance_id="skybox_irradiance" >
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/global-environment-probe)

***

## **CONTENT**

<http://janusvr.com/docs/build/roomtag/index.html>

### Text

```html
<FireBoxRoom>
<Room>
<Text js_id="0" pos="0 2.6 5" xdir="-1 0 -0.000002" zdir="0.000002 0 -1" scale="2 2 2">example text</Text>
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/text)

### Paragraph

```html
<FireBoxRoom>
<Room>
<Paragraph js_id="0" pos="0 2.6 5" xdir="-1 0 -0.000002" zdir="0.000002 0 -1" scale="4 4 4">The Paragraph tag allows the addition a generated image which contains text, use this instead of "Text" when you want to display a large amount of text within the room (either this, or create your own image with text in it)</Paragraph>
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/paragraph)

### Link

```html
<FireBoxRoom>
<Room>
<Link pos="0 0 8" url="http://janusvr.com/index.html" scale="1.8 3.2 1" title="Home" />
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/link)

### Image

```html
<FireBoxRoom>
<Assets>
<AssetImage id="imgur" src="http://i.imgur.com/cSTBoJM.jpg" />
</Assets>
<Room>
<Image id="imgur" js_id="0" pos="0 2 8" xdir="-1 0 0.000003" zdir="-0.000003 0 -1" scale="2 2 1" />
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/image)

### Image3D

```html
<FireBoxRoom>
<Assets>
<AssetImage id="imgur1" src="http://i.imgur.com/MDM50wl.jpg" sbs3d="true" tex_compress="true" />
<AssetImage id="imgur2" src="http://i.imgur.com/sRShxpk.png" ou3d="true" tex_compress="true" />
</Assets>
<Room>
<Image id="imgur1" js_id="0" pos="-2 2 7" xdir="-1 0 0.000003" zdir="-0.000003 0 -1" scale="2 2 1" />
<Image id="imgur2" js_id="1" pos="2.7 2 7" xdir="-1 0 0.000003" zdir="-0.000003 0 -1" scale="2 2 1" />
</Room>
</FireBoxRoom>
```

```html
<FireBoxRoom>
<Assets>
<AssetImage id="maniR" src="http://geniusvr.com/teststuff/manifoldrighteye32x5new2.png" />
<AssetImage id="maniL" src="http://geniusvr.com/teststuff/manifoldlefteye32x5new2.png" />
</Assets>
<Room>
<Image3D js_id="9sd" pos="0 8.2 21.300001" xdir="-1 0.000001 0.000001" ydir="0 0.866026 -0.5" zdir="-0.000001 -0.5 -0.866026" scale="3.3 3.3 1" lighting="false" left_id="maniL" right_id="maniR" />
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/image3d)

### Particle

```html
<FireBoxRoom>
<Assets>
<AssetImage id="smoke" src="smoke_white.png" />
<AssetImage id="sparkle" src="sparkle.png" />
<AssetImage id="water_particle1" src="water1.png" tex_compress="true" />
<AssetImage id="water_particle2" src="water2.png" tex_compress="true" />
<AssetImage id="darksmoke" src="fire_smoke.png" />
<AssetImage id="flame" src="fire.png" />
</Assets>
<Room>
<Particle id="sparkle" js_id="0" vel="-0.1 -0.1 -0.1" scale="0.2 0.2 0.2" col="#666666" lighting="false" loop="true" image_id="sparkle" blend_src="src_color" blend_dest="one_minus_constant_color" count="500" rate="50" duration="10" rand_pos="80 118 80" rand_vel="0.2 0.2 0.2" rand_accel="0.1 1.1 0.1" />
<Particle id="smokes1" js_id="1" pos="-5.6 0 0" vel="0.092189 0.995145 0.033038" lighting="false" loop="true" image_id="smoke" count="5" rate="5" duration="2.5" rand_accel="0.4 0.2 0.4" rand_scale="0.5 0.8 0.5" />
<Particle id="smokes2" js_id="2" pos="-5.7 0 0.1" vel="0.092189 0.995145 0.033038" lighting="false" loop="true" image_id="smoke" count="5" rate="2" duration="1.5" rand_accel="0.3 0.3 0.3" rand_scale="0.5 0.9 0.5" />
<Particle id="darksmoke" js_id="3" pos="7 0 0" vel="0 0.6 0" scale="0.2 0.2 0.2" lighting="false" loop="true" image_id="darksmoke" count="600" rate="60" duration="10" fade_in="0.4" rand_vel="0.2 0 0.2" rand_scale="0.2 0.2 0.2" />
<Particle js_id="4" pos="0 4 0.9" vel="-0.5 0 1.2" accel="0 -9.8 0" scale="0.11 0.08 0.08" col="#ccccff" lighting="false" loop="true" image_id="water_particle1" blend_dest="one" count="200" rate="100" fade_in="0.1" fade_out="0.1" rand_pos="0.25 0.1 0" rand_vel="1 0 0.5" rand_accel="0 0.5 0" rand_col="0 0 0.3" />
<Particle js_id="5" pos="0 4 0.92" vel="-0.5 0 1.2" accel="0 -9.8 0" scale="0.11 0.09 0.09" col="#ccccff" lighting="false" loop="true" image_id="water_particle2" blend_dest="one" count="200" rate="100" fade_in="0.2" fade_out="0.2" rand_pos="0.25 0.1 0" rand_vel="1 0 0.5" rand_accel="0 0.5 0" rand_col="0 0 0.3" />
<Particle js_id="6" pos="-0.5 0 1.6" vel="-0.5 1 -0.5" accel="0 -9.8 0" scale="0.1 0.1 0.1" col="#ccccff" lighting="false" loop="true" image_id="water_particle2" blend_dest="one" count="400" rate="600" duration="0.5" fade_in="0.2" fade_out="0.2" rand_pos="1 0.1 1" rand_vel="1 1 1" rand_accel="0 0.5 0" rand_col="0 0 0.3" />
<Particle id="fire" js_id="7" pos="5 0 0" vel="0 0.2 0" scale="0.09 0.09 0.09" lighting="false" loop="true" image_id="flame" count="40" rate="30" fade_in="0.4" rand_accel="0 1.1 0" rand_scale="0.2 0.2 0.2" />
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/particle)

### Light

```html
<FireBoxRoom>
<Room>
<Light js_id="15" pos="4 7.5 6.7" xdir="0 0 0" ydir="0 0 0" zdir="0 -1 0" col="#ffe5bf" light_intensity="100" light_cone_angle="0.8" light_cone_exponent="40" light_range="12" />
<Light js_id="16" pos="-4 7.5 6.7" xdir="0 0 0" ydir="0 0 0" zdir="0 -1 0" col="#ffe5bf" light_intensity="100" light_cone_angle="0.8" light_cone_exponent="40" light_range="12" />
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/light)

### Light with Shadow

```html
<FireBoxRoom>
<Room shadows="true" />
<Light pos="-2 2 8" light_intensity="10" light_range="20" light_shadow="true" />
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/light-shadow)

