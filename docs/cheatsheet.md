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

### [Assets](https://vesta.janusvr.com/guide/assets)

    <FireBoxRoom>
    <Assets>
    </Assets>
    </FireBoxRoom>

### [Image](https://vesta.janusvr.com/guide/assetimage)

    <FireBoxRoom>
    <Assets>
    <AssetImage id="image" src="image.jpg" />
    </Assets>
    <Room>
    <Image id="image" js_id="0" pos="0 1 10" scale="10 10 10" lighting="false" />
    </Room>
    </FireBoxRoom>

### [Sound](https://vesta.janusvr.com/guide/assetsound)

    <FireBoxRoom>
    <Assets>
    <AssetSound id="music" src="song.mp3" />
    </Assets>
    <Room>
    <Sound id="music" js_id="0" pos="0 1 5" rect="-100 -50 100 50" loop="true" />
    </Room>
    </FireBoxRoom>

### [Video](https://vesta.janusvr.com/guide/assetvideo)

    <FireBoxRoom>
    <Assets>
    <AssetObject id="screen" src="screen.obj" />
    <AssetVideo id="video" src="video.mp4" auto_play="true" loop="true" />
    </Assets>
    <Room>
    <Object id="screen" js_id="0" pos="0 -1 8" scale="10 8 1" lighting="false" video_id="video" />
    </Room>
    </FireBoxRoom>

### [Object](https://vesta.janusvr.com/guide/assetobject)

    <FireBoxRoom>
    <Assets>
    <AssetObject id="thing" src="thing.obj" />
    </Assets>
    <Room>
    <Object id="thing" js_id="0" pos="0 2 10" scale="2 2 2" />
    </Room>
    </FireBoxRoom>

### [Shader](https://vesta.janusvr.com/guide/assetshader)

    <FireBoxRoom>
    <Assets>
    <AssetShader id="shader" vertex_src="twist.txt" />
    </Assets>
    <Room>
    <Object id="cube" js_id="0" pos="0 0 10" xdir="-1 0 0" zdir="0 0 -1" scale="2 4 2" shader_id="shader" />
    </Room>
    </FireBoxRoom>

### [Ghost](https://vesta.janusvr.com/guide/assetghost)

    <FireBoxRoom>
    <Assets>
    <AssetGhost id="ghost" src="ghost.txt" />
    </Assets>
    <Room>
    <Ghost id="ghost" ghost_id="ghost" scale="3 3 3" lighting="false" head_id="head" head_pos="0 0.2 0" body_id="body" />
    </Room>
    </FireBoxRoom>

### [Websurface](https://vesta.janusvr.com/guide/assetwebsurface)

    <FireBoxRoom>
    <Assets>
    <AssetWebSurface id="startpage" src="https://startpage.com/" width="1000" height="800" />
    </Assets>
    <Room>
    <Object id="plane" js_id="1" pos="0 0 10" xdir="-1 0 0" zdir="0 0 -1" lighting="false" cull_face="none" websurface_id="startpage" />
    </Room>
    </FireBoxRoom>

### [Scripts](https://vesta.janusvr.com/guide/assetscript)

    <FireBoxRoom>
    <Assets>
    <AssetScript src="script.js" />
    </Assets>
    </FireBoxRoom>


## **ROOMS**

<http://janusvr.com/docs/build/roomtag/index.html>

### [Skybox](https://vesta.janusvr.com/guide/skybox)

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

### [Room Template](https://vesta.janusvr.com/guide/room-template)

    <FireBoxRoom>
    <Assets>
    </Assets>
    <Room use_local_asset="room_plane" pos="0 0 0" xdir="1 0 0" ydir="0 1 0" zdir="0 0 1">
    </Room>
    </FireBoxRoom>

### [Near Far Plane](https://vesta.janusvr.com/guide/near-far-plane)

    <FireBoxRoom>
    <Assets>
    </Assets>
    <Room use_local_asset="room_plane" near_dist="0.01" far_dist="12.0">
    </Room>
    </FireBoxRoom>

### [Gravity, Jump, Run, Walk](https://vesta.janusvr.com/guide/movement)

    <FireBoxRoom>
    <Assets>
    </Assets>
    <Room gravity="-3.0" jump_velocity="10.0" walk_speed="5.0" run_speed="10.0" use_local_asset="room_plane" >
    </Room>
    </FireBoxRoom>

### [Cursor Visible](https://vesta.janusvr.com/guide/multiplayer-privacy)

    <FireBoxRoom>
    <Assets>
    </Assets>
    <Room use_local_asset="room_plane" cursor_visible="false">
    </Room>
    </FireBoxRoom>

### [Fog](https://vesta.janusvr.com/guide/fog)

    <FireBoxRoom>
    <Assets>
    </Assets>
    <Room use_local_asset="room_plane" fog="true" fog_mode="exp" fog_density="0.1" fog_col="1 1 1">
    </Room>
    </FireBoxRoom>

### [Teleport Distance](https://vesta.janusvr.com/guide/teleportation)

    <FireBoxRoom>
    <Assets>
    </Assets>
    <Room use_local_asset="room_plane" teleport_min_dist="10.0" teleport_max_dist="100.0" >
    </Room>
    </FireBoxRoom>

### [Global Shader](https://vesta.janusvr.com/guide/global-shader)

    <FireBoxRoom>
    <Assets>
    <AssetShader id="room_shader" src="party_frag.txt" />
    </Assets>
    <Room shader_id="room_shader">
    </Room>
    </FireBoxRoom>

### [Multiplayer Server](https://vesta.janusvr.com/guide/multiplayer-server)

    <FireBoxRoom>
    <Assets>
    </Assets>
    <Room server="presence.janusvr.com" port="5567" >
    </Room>
    </FireBoxRoom>

### [Reset Volume](https://vesta.janusvr.com/guide/reset-volume)

    <FireBoxRoom>
    <Assets>
    </Assets>
    <Room reset_volume="-1000 -500 -1000 1000 0 1000">
    </Room>
    </FireBoxRoom>

### [Global Env Probe](https://vesta.janusvr.com/guide/global-environment-probe)

    <FireBoxRoom>
    <Assets>
    <AssetImage id="skybox_radiance" src="radiance.dds" tex_clamp="false" tex_linear="true" /> 
    <AssetImage id="skybox_irradiance" src="irradiance64.dds" tex_clamp="false" tex_linear="true" />
    </Assets>
    <Room cubemap_radiance_id="skybox_radiance" cubemap_irradiance_id="skybox_irradiance" >
    </Room>
    </FireBoxRoom>

## **CONTENT**

<http://janusvr.com/docs/build/roomtag/index.html>

### [Text](https://vesta.janusvr.com/guide/text)

    <FireBoxRoom>
    <Room>
    <Text js_id="0" pos="0 2.6 5" xdir="-1 0 -0.000002" zdir="0.000002 0 -1" scale="2 2 2">example text</Text>
    </Room>
    </FireBoxRoom>

### [Paragraph](https://vesta.janusvr.com/guide/paragraph)

    <FireBoxRoom>
    <Room>
    <Paragraph js_id="0" pos="0 2.6 5" xdir="-1 0 -0.000002" zdir="0.000002 0 -1" scale="4 4 4">The Paragraph tag allows the addition a generated image which contains text, use this instead of "Text" when you want to display a large amount of text within the room (either this, or create your own image with text in it)</Paragraph>
    </Room>
    </FireBoxRoom>

### [Link](https://vesta.janusvr.com/guide/link)

    <FireBoxRoom>
    <Room>
    <Link pos="0 0 8" url="http://janusvr.com/index.html" scale="1.8 3.2 1" title="Home" />
    </Room>
    </FireBoxRoom>

### [Image](https://vesta.janusvr.com/guide/image)

    <FireBoxRoom>
    <Assets>
    <AssetImage id="imgur" src="http://i.imgur.com/cSTBoJM.jpg" />
    </Assets>
    <Room>
    <Image id="imgur" js_id="0" pos="0 2 8" xdir="-1 0 0.000003" zdir="-0.000003 0 -1" scale="2 2 1" />
    </Room>
    </FireBoxRoom>

### [Image3D](https://vesta.janusvr.com/guide/image3d)

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

    <FireBoxRoom>
    <Assets>
    <AssetImage id="maniR" src="http://geniusvr.com/teststuff/manifoldrighteye32x5new2.png" />
    <AssetImage id="maniL" src="http://geniusvr.com/teststuff/manifoldlefteye32x5new2.png" />
    </Assets>
    <Room>
    <Image3D js_id="9sd" pos="0 8.2 21.300001" xdir="-1 0.000001 0.000001" ydir="0 0.866026 -0.5" zdir="-0.000001 -0.5 -0.866026" scale="3.3 3.3 1" lighting="false" left_id="maniL" right_id="maniR" />
    </Room>
    </FireBoxRoom>

### [Sound](https://vesta.janusvr.com/guide/sound)

    <FireBoxRoom>
    <Assets>
    <AssetSound id="song" src="music.mp3" auto_play="true" />
    </Assets>
    <Room>
    <Sound id="song" rect="-100 -50 100 50" loop="true" />
    </Room>
    </FireBoxRoom>

### [Video](https://vesta.janusvr.com/guide/video)

    <FireBoxRoom>
    <Assets>
    <AssetVideo id="video" src="video.mp4" auto_play="true" loop="true" />
    </Assets>
    <Room>
    <Object id="plane" js_id="0" pos="0 -1 8" xdir="-1 0 0" zdir="0 0 -1" scale="10 11 1" lighting="false" video_id="video" />
    </Room>
    </FireBoxRoom>

### [Object](https://vesta.janusvr.com/guide/object)

    <FireBoxRoom>
    <Assets>
    <AssetObject id="box" src="UVcubebox.obj" tex0="https://i.imgur.com/DNwR5wi.jpg" />
    </Assets>
    <Room>
    <Object id="box" js_id="1" pos="4 0 10" xdir="-1 0 0" zdir="0 0 -1" scale="2 2 2" lighting="false" />
    </Room>
    </FireBoxRoom>

### [Ghost](https://vesta.janusvr.com/guide/ghost)

    <FireBoxRoom>
    <Assets>
    <AssetGhost id="ghost" src="ghost.txt" />
    </Assets>
    <Room>
    <Ghost id="ghost" auto_play="true" />
    </Room>
    </FireBoxRoom>

### [Particle](https://vesta.janusvr.com/guide/particle)

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

### [Light](https://vesta.janusvr.com/guide/light)

    <FireBoxRoom>
    <Room>
    <Light js_id="15" pos="4 7.5 6.7" xdir="0 0 0" ydir="0 0 0" zdir="0 -1 0" col="#ffe5bf" light_intensity="100" light_cone_angle="0.8" light_cone_exponent="40" light_range="12" />
    <Light js_id="16" pos="-4 7.5 6.7" xdir="0 0 0" ydir="0 0 0" zdir="0 -1 0" col="#ffe5bf" light_intensity="100" light_cone_angle="0.8" light_cone_exponent="40" light_range="12" />
    </Room>
    </FireBoxRoom>

### [Light with Shadow](https://vesta.janusvr.com/guide/light-shadow)

    <FireBoxRoom>
    <Room shadows="true" />
    <Light pos="-2 2 8" light_intensity="10" light_range="20" light_shadow="true" />
    </Room>
    </FireBoxRoom>

## **Scripts**

<http://demos.janusvr.com/JavaScript/index.html>

### [AppendChild](https://vesta.janusvr.com/guide/appendchild)

    <FireBoxRoom>
    <Assets>
    <AssetScript src="https://vesta.janusvr.com/files/guide/javascript/appendchild/AppendChildJS.js" />
    </Assets>
    <Room>
    <Object id="cube" collision_id="cube" pos="0 1 4" js_id="examplecube" /> 
    <Object id="cone" collision_id="cube" pos="0 3 0" js_id="examplecubechild" col="1 0 0" />
    </Room>
    </FireBoxRoom>

### [Snow](https://vesta.janusvr.com/guide/snow)

    <FireBoxRoom>
    <Assets>
    <AssetImage id="particle" src="https://i.imgur.com/99xXncY.png" tex_colorspace="sRGB" />
    <AssetScript src="https://paradox.spyduck.net/rooms/landscapes/snow.js" />
    </Assets>
    <Room>
    <Particle js_id="js_snow" pos="-56.99268 7.215594 -29.51825" vel="-0.25 -3 -0.25" scale="0.07 0.07 0.07" col="white" lighting="false" loop="true" count="100" rate="50" duration="4" fade_in="0.5" rand_pos="48 24 48" rand_vel="0.5 1.5 0.5" />
    </Room>
    </FireBoxRoom>

### [Audio/Video](Functions https://vesta.janusvr.com/guide/av-functions)

    <FireBoxRoom>
    <Assets>
    <AssetScript src="https://vesta.janusvr.com/files/guide/javascript/avfunctions/audioJS.js"/>
    </Assets>
    <Room>
    <Object id="cube" js_id="stopcube" onclick="jukeboxS()" pos="-2 1 6" col="#ff0000" collision_id="cube" />
    <Object id="cube" js_id="playcube" onclick="jukeboxP()" pos="0 1 6" col="#00ff00" collision_id="cube" />
    <Sound id="track1" js_id="soundtrack" />
    </Room>
    </FireBoxRoom>

### [Bounding Box](https://vesta.janusvr.com/guide/boundingbox)

    <FireBoxRoom>
    <Assets>
    <AssetScript src="https://vesta.janusvr.com/files/guide/javascript/boundingbox/BoundingBox.js" />
    </Assets>
    </FireBoxRoom>

### [Clickball](https://vesta.janusvr.com/guide/clickball1)

    <FireBoxRoom>
    <Assets>
    <AssetScript src="https://vesta.janusvr.com/files/guide/javascript/clickball/ball_withpos_reset.js" />
    </Assets>
    </FireBoxRoom>

### [Collider](https://vesta.janusvr.com/guide/collider1)

    <FireBoxRoom>
    <Assets>
    <AssetScript src="https://vesta.janusvr.com/files/guide/javascript/colliders/ColliderJS.js" />
    </Assets>
    </FireBoxRoom>

### [Create Destroy objects](https://vesta.janusvr.com/guide/create-destroy)

    <FireBoxRoom>
    <Assets>
    <AssetScript src="https://vesta.janusvr.com/files/guide/javascript/createdestroy/Create_Destory_objects.js" />
    </Assets>
    </FireBoxRoom>

### [Door](https://vesta.janusvr.com/guide/door1)

    <FireBoxRoom>
    <Assets>
    <AssetScript src="https://nazrin.net/COS/TACOS_Vnazrin.1.0.js" />
    </Assets>
    <Room>
    <Object id="bathroom" js_id="bdoor1" pos="0 1.2 7"   collision_id="bathroom" onclick="rDoor('bdoor1',90,1,0,'once');"/>
    </Room>
    </FireBoxRoom>

### [FBX Animations](https://vesta.janusvr.com/guide/fbx-animations)

    <FireBoxRoom>
    <Assets>
    <AssetScript src="https://vesta.janusvr.com/files/guide/javascript/fbxanimations/fbxtrigger.js" />
    </Assets>
    <Room>
    <Object id="zombie" js_id="fbxanimation" collider_id="testbox" anim_id="zombie_idle" collider_scale="1 1 1" collider_pos="0 0 0" pos="1.5 0 5" scale="0.0095 0.0095 0.0095" />
    <Text pos="0 1.5 4" js_id="text1" scale="1 1 1" fwd="0 0 -1"></Text>
    </Room>
    </FireBoxRoom>

### [Flashlight](https://vesta.janusvr.com/guide/flashlight)

    <FireBoxRoom>
    <Assets>
    <AssetScript src="https://vesta.janusvr.com/files/guide/javascript/flashlight/torch.js" />
    </Assets>
    <Room>
    <Light js_id="headlight" pos="0 1000 0" light_intensity="800" visible="false" light_cone_angle="0.05" light_cone_exponent="10" light_range="150" col="#FF9900"/>
    <Light js_id="handlight" pos="0 1000 0" light_intensity="800" visible="false" light_cone_angle="0.05" light_cone_exponent="10" light_range="150" col="#FF9900"/>
    </Room>
    </FireBoxRoom>

### [Gaze Detection](https://vesta.janusvr.com/guide/gaze-detection)

    <FireBoxRoom>
    <Assets>
    <AssetScript src="https://vesta.janusvr.com/files/guide/javascript/gazedetection/gaze_test.js" />
    </Assets>
    <Room>
    <Object id="cube" js_id="ThingToLookAT" pos="0 1 0" scale="0.5 0.5 0.5" collision_id="cube" />
    </Room>
    </FireBoxRoom>

### [Gaze Teleport](https://vesta.janusvr.com/guide/gaze-teleport)

    <FireBoxRoom>
    <Assets>
    <AssetScript src="https://vesta.janusvr.com/files/guide/javascript/gazeteleport/GazeTeleport.js" />
    </Assets>
    <Room>
    <Object  collision_id="cube" collision_scale="2 2 2" js_id="gazeteleportlocaton1" id="min1"  lighting="true" pos="5 0 0" scale="0.2 0.2 0.2"  />
    </Room>
    </FireBoxRoom>

### [Hover Over](https://vesta.janusvr.com/guide/hoverover)

    <FireBoxRoom>
    <Assets>
    <AssetObject id="popupbox" src="https://vesta.janusvr.com/files/guide/javascript/hoverover/popupbox.dae" />
    <AssetScript src="https://vesta.janusvr.com/files/guide/javascript/hoverover/Hoverover_popupJS.js" />
    </Assets>
    </FireBoxRoom>

### [Jedi Force](https://vesta.janusvr.com/guide/jediforce)

    <FireBoxRoom>
    <Assets>
    <AssetScript src="https://vesta.janusvr.com/files/guide/javascript/jediforce/JediForce.js" />
    </Assets>
    <Room>
    <Object id="cube" js_id="ViveRightHand" visible="false" scale="0.01 0.01 0.01" />
    <Object id="cube" js_id="ViveLeftHand"  visible="false" scale="0.01 0.01 0.01" />
    </Room>
    </FireBoxRoom>

### [JS Debugger](https://vesta.janusvr.com/guide/js-debugger)

    <FireBoxRoom>
    <Assets>
    <AssetScript src="https://vesta.janusvr.com/files/guide/javascript/jsdebugger/TextDebuggerJS.js" />
    </Assets>
    <Room>
    <Object id="cube" collision_id="cube" pos="0 2 0" js_id="examplecube" /> 
    </Room>
    </FireBoxRoom>

### [JS Function Performance Timer](https://vesta.janusvr.com/guide/js-performance-timer)

    <FireBoxRoom>
    <Assets>
    <AssetScript src="https://vesta.janusvr.com/files/guide/javascript/jsfunctionperformance/JSperformanceTimer.js" />
    </Assets>
    </FireBoxRoom>

### [JS Keymapping](https://vesta.janusvr.com/guide/js-keymapping)

    <FireBoxRoom>
    <Assets>
    <AssetScript src="https://vesta.janusvr.com/files/guide/javascript/jskeymapping/3dControllerKeytest.js" />
    </Assets>
    </FireBoxRoom>

### [Lamp](https://vesta.janusvr.com/guide/lamp)

    <FireBoxRoom>
    <Assets>
    <AssetScript src="https://vesta.janusvr.com/files/guide/scripts/LightSwitch.js" />
    </Assets>
    <Room>
    <Object id="cube" collision_id="cube" js_id="stopcube" onclick="LightS()" pos="3.000 1.000 3.000" col="1 0 0"  />
    <Object id="cube" collision_id="cube" js_id="playcube" onclick="LightP()" pos="3.000 1.000 1.500" col="0 1 0"  />
    <Light js_id="OmniLight" pos="5 3 5" light_intensity="80" light_cone_angle="0" light_cone_exponent="10" light_range="15" col="#FF9900"/>
    </Room>
    </FireBoxRoom>

### [Master JS Attribute Stress Test](https://vesta.janusvr.com/guide/masterjs1)

### [Master JS One-of-Everything](https://vesta.janusvr.com/guide/masterjs2)

### [Master Weapons Script](https://vesta.janusvr.com/guide/master-weapons-script)

    <FireBoxRoom>
    <Assets>
    <AssetScript src="https://vesta.janusvr.com/files/guide/javascript/masterweapons/MasterWeapons.js" />
    </Assets>
    </FireBoxRoom>

### [Morph Targets](https://vesta.janusvr.com/guide/morph-targets)
 
### [Move Object](https://vesta.janusvr.com/guide/move-object)

    <FireBoxRoom>
    <Assets>
    <AssetScript src="https://vesta.janusvr.com/files/guide/javascript/moveobject/MovingSomething.js" />
    </Assets>
    </FireBoxRoom>

### [Object List](https://vesta.janusvr.com/guide/object-list)

    <FireBoxRoom>
    <Assets>
    <AssetScript src="https://vesta.janusvr.com/files/guide/javascript/objectlist/ObjectListJS.js" />
    </Assets>
    </FireBoxRoom>

### [Paragraph HTML](https://vesta.janusvr.com/guide/paragraph-html)

    <FireBoxRoom>
    <Assets>
    <AssetScript src="https://vesta.janusvr.com/files/guide/javascript/paragraphhtml/Paragraph_HTML_tester.js" />
    </Assets>
    </FireBoxRoom>

### [Player Hand Functions](https://vesta.janusvr.com/guide/player-hand-functions)

    <FireBoxRoom>
    <Assets>
    <AssetObject id="Xart" src="https://vesta.janusvr.com/files/guide/javascript/playerhand/3dtracker.dae" />
    <AssetScript src="https://vesta.janusvr.com/files/guide/javascript/playerhand/Trackedrotationscrpt.js" />
    </Assets>
    <Room>
    <Object id="Xart" js_id="rot1"  lighting="false" />
    <Object id="Xart" js_id="rot2"  lighting="false" />
    <Object id="Xart" js_id="Rhand" scale="0.1 0.1 0.1"  lighting="false" />
    <Object id="Xart" js_id="Lhand"  scale="0.1 0.1 0.1" lighting="false" />
    </Room>
    </FireBoxRoom>

### [Programmatic Mesh](https://vesta.janusvr.com/guide/programmatic-mesh)

    <FireBoxRoom>
    <Assets>
    <AssetScript src="https://vesta.janusvr.com/files/guide/javascript/programmaticmesh/ProgramaticalMesh.js" />
    </Assets>
    </FireBoxRoom>

### [Quadcopter](https://vesta.janusvr.com/guide/quadcopter)

    <FireBoxRoom>
    <Assets>
    <AssetObject id="terrain" src="https://vesta.janusvr.com/files/guide/javascript/quadcopter/terrain.dae" />
    <AssetScript src="https://vesta.janusvr.com/files/guide/javascript/quadcopter/quadcopter.js" />
    </Assets>
    <Room>
    <Object id="terrain" scale="1 0.1 1" pos="0 0 0" js_id="rot2" cull_face="none"  />
    <Object id="cube" pos="0 1.6 0" js_id="zeropos"  />
    </Room>
    </FireBoxRoom>

### [Realtime Lights](https://vesta.janusvr.com/guide/realtime-lights)

    <FireBoxRoom>
    <Assets>
    <AssetScript src="https://vesta.janusvr.com/files/guide/javascript/realtimelights/EditJS.txt" />
    <AssetScript src="https://vesta.janusvr.com/files/guide/javascript/realtimelights/JS_Light.js" />
    </Assets>
    <Room>
    <Light js_id="Light" pos="0 0 0" light_intensity="40" light_cone_angle="0" light_cone_exponent="10" light_range="8" col="#FF9900" />
    </Room>
    </FireBoxRoom>

### [Rotation Matrix to Euler](https://vesta.janusvr.com/guide/rotation-to-euler)

    <FireBoxRoom>
    <Assets>
    <AssetScript src="https://vesta.janusvr.com/files/guide/javascript/rotationmatrix/MatrixToEulerAndBack.txt" />
    </Assets>
    <Room>
    <Object id="cube" js_id="rot"  collision_id="cube" pos="3 0 1" col="1 0 0" cull_face="none" />
    <Object id="cube" js_id="rot2"  collision_id="cube"  pos="3 0 3" cull_face="none" />
    </Room>
    </FireBoxRoom>

### [Shotgun](https://vesta.janusvr.com/guide/shotgun)

    <FireBoxRoom>
    <Assets>
    <AssetObject id="Shotgun" src="https://vesta.janusvr.com/files/guide/javascript/shotgun/Shotgun.dae.gz" />
    <AssetObject id="ShotgunSlide" src="https://vesta.janusvr.com/files/guide/javascript/shotgun/Shotgunpump.dae.gz" />
    <AssetSound id="shotgunpump" src="https://vesta.janusvr.com/files/guide/javascript/shotgun/ShotgunPump.wav" />
    <AssetSound id="shotgunblast" src="https://vesta.janusvr.com/files/guide/javascript/shotgun/ShotgunBlast.wav" />
    <AssetImage id="flame" src="https://vesta.janusvr.com/files/guide/javascript/shotgun/fire.png" />
    <AssetScript src="https://vesta.janusvr.com/files/guide/javascript/shotgun/shotgun.js" />
    </Assets>
    <Room>
    <Object id="Shotgun" pos="0 1 0" js_id="Shotgun" cull_face="none" />
    <Object id="ShotgunSlide" pos="0 1 0" js_id="ShotgunSlide" cull_face="none" />
    <Object id="cube" collision_trigger="true" collision_id="cube" visible="false" js_id="Bullet" scale="0.05 0.05 0.05" />
    <Particle id="1" js_id="flameonfireball" pos="19.5 0.1 -6.5"  fade_in="0.4" vel ="0 0 2" rand_vel="7.5 7.5 7.5" rand_scale="0.1 0.1 0.1" scale="0.02 0.02 0.02" lighting="false" image_id="flame" count="0" rate="3000" duration="1" rand_pos="0 0 0" rand_accel="0 0 0" />
    <Light js_id="OmniLightfireball" visible="false" pos="8.37 2.11 30.95" light_intensity="0" light_cone_angle="0" light_cone_exponent="10" light_range="15" col="#FF9900"/>
    <Sound js_id="shotgunpumpjs" visible="false" id="shotgunpump" pos="1.6 0 1.6" />
    <Sound js_id="shotgunblastjs" visible="false" id="shotgunblast" pos="1.6 0 1.6" />
    <Object id="cube" js_id="ViveRightHand" visible="false" scale="0.01 0.01 0.01" />
    <Object id="cube" js_id="ViveLeftHand"  visible="false" scale="0.01 0.01 0.01" />
    </Room>
    </FireBoxRoom>

### [Timer](https://vesta.janusvr.com/guide/timer)

    <FireBoxRoom>
    <Assets>
    <AssetScript src="https://vesta.janusvr.com/files/guide/javascript/timer/TimerExample.js" />
    </Assets>
    </FireBoxRoom>

### [TrackpadGrid](https://vesta.janusvr.com/guide/trackpadgrid)

### [VideoSeek](https://vesta.janusvr.com/guide/videoseek)

    <FireBoxRoom>
    <Assets>
    <AssetScript src="https://vesta.janusvr.com/files/guide/javascript/videoseek/seektest.js" />
    </Assets>
    </FireBoxRoom>

### [SyncedSeek](https://vesta.janusvr.com/guide/syncedseek)

    <FireBoxRoom>
    <Assets>
    <AssetScript src="https://vesta.janusvr.com/files/Spyduck/scripts/SyncedSeek.js"/>
    </Assets>
    <Room>
    <videoscreen id="plane" video_id="main4kvid" js_id="mainvideo" pos="0.5 8 -21" xdir="0 0 1" zdir="-1 0 0" cull_face="none" scale="6.3774 3.587 .001" col="1 1 1" lighting="false" />
    <Object js_id="TextSync_myglobaltime" sync="true" />
    </Room>
    </FireBoxRoom>

### Env maps
Right now we only do envmaps if you set pbr="true" on the room - then we'll use the skybox by default, or you can set it per-object by setting envmap_id="..." to reference an AssetImage which points to an equirect image

 

