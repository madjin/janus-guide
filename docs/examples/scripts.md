## **Janus Script Examples**

<http://demos.janusvr.com/JavaScript/index.html>

### [AppendChild]()

```html
<FireBoxRoom>
<Assets>
<AssetScript src="https://vesta.janusvr.com/files/guide/javascript/appendchild/AppendChildJS.js" />
</Assets>
<Room>
<Object id="cube" collision_id="cube" pos="0 1 4" js_id="examplecube" /> 
<Object id="cone" collision_id="cube" pos="0 3 0" js_id="examplecubechild" col="1 0 0" />
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/appendchild)

### [Snow]()

```html
<FireBoxRoom>
<Assets>
<AssetImage id="particle" src="https://i.imgur.com/99xXncY.png" tex_colorspace="sRGB" />
<AssetScript src="https://paradox.spyduck.net/rooms/landscapes/snow.js" />
</Assets>
<Room>
<Particle js_id="js_snow" pos="-56.99268 7.215594 -29.51825" vel="-0.25 -3 -0.25" scale="0.07 0.07 0.07" col="white" lighting="false" loop="true" count="100" rate="50" duration="4" fade_in="0.5" rand_pos="48 24 48" rand_vel="0.5 1.5 0.5" />
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/snow)

### [Audio/Video Functions]()

```html
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
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/av-functions)

### [Bounding Box]()

```html
<FireBoxRoom>
<Assets>
<AssetScript src="https://vesta.janusvr.com/files/guide/javascript/boundingbox/BoundingBox.js" />
</Assets>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/boundingbox)

[Clickball]()

```html
<FireBoxRoom>
<Assets>
<AssetScript src="https://vesta.janusvr.com/files/guide/javascript/clickball/ball_withpos_reset.js" />
</Assets>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/clickball1)


### [Collider]()

```html
<FireBoxRoom>
<Assets>
<AssetScript src="https://vesta.janusvr.com/files/guide/javascript/colliders/ColliderJS.js" />
</Assets>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/collider1)

### [Create Destroy objects]()

```html
<FireBoxRoom>
<Assets>
<AssetScript src="https://vesta.janusvr.com/files/guide/javascript/createdestroy/Create_Destory_objects.js" />
</Assets>
</FireBoxRoom>
```
[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/create-destroy)

### [Door]()

```html
<FireBoxRoom>
<Assets>
<AssetScript src="https://nazrin.net/COS/TACOS_Vnazrin.1.0.js" />
</Assets>
<Room>
<Object id="bathroom" js_id="bdoor1" pos="0 1.2 7"   collision_id="bathroom" onclick="rDoor('bdoor1',90,1,0,'once');"/>
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/door1)

### [FBX Animations]()

```html
<FireBoxRoom>
<Assets>
<AssetScript src="https://vesta.janusvr.com/files/guide/javascript/fbxanimations/fbxtrigger.js" />
</Assets>
<Room>
<Object id="zombie" js_id="fbxanimation" collider_id="testbox" anim_id="zombie_idle" collider_scale="1 1 1" collider_pos="0 0 0" pos="1.5 0 5" scale="0.0095 0.0095 0.0095" />
<Text pos="0 1.5 4" js_id="text1" scale="1 1 1" fwd="0 0 -1"></Text>
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/fbx-animations)

### [Flashlight]()

```html
<FireBoxRoom>
<Assets>
<AssetScript src="https://vesta.janusvr.com/files/guide/javascript/flashlight/torch.js" />
</Assets>
<Room>
<Light js_id="headlight" pos="0 1000 0" light_intensity="800" visible="false" light_cone_angle="0.05" light_cone_exponent="10" light_range="150" col="#FF9900"/>
<Light js_id="handlight" pos="0 1000 0" light_intensity="800" visible="false" light_cone_angle="0.05" light_cone_exponent="10" light_range="150" col="#FF9900"/>
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/flashlight)

### [Gaze Detection]()

```html
<FireBoxRoom>
<Assets>
<AssetScript src="https://vesta.janusvr.com/files/guide/javascript/gazedetection/gaze_test.js" />
</Assets>
<Room>
<Object id="cube" js_id="ThingToLookAT" pos="0 1 0" scale="0.5 0.5 0.5" collision_id="cube" />
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/gaze-detection)

### [Gaze Teleport]()

```html
<FireBoxRoom>
<Assets>
<AssetScript src="https://vesta.janusvr.com/files/guide/javascript/gazeteleport/GazeTeleport.js" />
</Assets>
<Room>
<Object  collision_id="cube" collision_scale="2 2 2" js_id="gazeteleportlocaton1" id="min1"  lighting="true" pos="5 0 0" scale="0.2 0.2 0.2"  />
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/gaze-teleport)

### [Hover Over]()

```html
<FireBoxRoom>
<Assets>
<AssetObject id="popupbox" src="https://vesta.janusvr.com/files/guide/javascript/hoverover/popupbox.dae" />
<AssetScript src="https://vesta.janusvr.com/files/guide/javascript/hoverover/Hoverover_popupJS.js" />
</Assets>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/hoverover)

### [Jedi Force]()

```html
<FireBoxRoom>
<Assets>
<AssetScript src="https://vesta.janusvr.com/files/guide/javascript/jediforce/JediForce.js" />
</Assets>
<Room>
<Object id="cube" js_id="ViveRightHand" visible="false" scale="0.01 0.01 0.01" />
<Object id="cube" js_id="ViveLeftHand"  visible="false" scale="0.01 0.01 0.01" />
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/jediforce)

### [JS Debugger]()

```html
<FireBoxRoom>
<Assets>
<AssetScript src="https://vesta.janusvr.com/files/guide/javascript/jsdebugger/TextDebuggerJS.js" />
</Assets>
<Room>
<Object id="cube" collision_id="cube" pos="0 2 0" js_id="examplecube" /> 
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/js-debugger)

### [JS Function Performance Timer]()

```html
<FireBoxRoom>
<Assets>
<AssetScript src="https://vesta.janusvr.com/files/guide/javascript/jsfunctionperformance/JSperformanceTimer.js" />
</Assets>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/js-performance-timer)

### [JS Keymapping]()

```html
<FireBoxRoom>
<Assets>
<AssetScript src="https://vesta.janusvr.com/files/guide/javascript/jskeymapping/3dControllerKeytest.js" />
</Assets>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/js-keymapping)

### [Lamp]()

```html
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
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/lamp)

***

### [Master JS Attribute Stress Test]()

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/masterjs1)

### [Master JS One-of-Everything]()

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/masterjs2)

### [Master Weapons Script]()

```html
<FireBoxRoom>
<Assets>
<AssetScript src="https://vesta.janusvr.com/files/guide/javascript/masterweapons/MasterWeapons.js" />
</Assets>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/master-weapons-script)

***

### [Morph Targets]()

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/morph-targets)
 
### [Move Object]()

```html
<FireBoxRoom>
<Assets>
<AssetScript src="https://vesta.janusvr.com/files/guide/javascript/moveobject/MovingSomething.js" />
</Assets>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/move-object)

### [Object List]()

```html
<FireBoxRoom>
<Assets>
<AssetScript src="https://vesta.janusvr.com/files/guide/javascript/objectlist/ObjectListJS.js" />
</Assets>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/object-list)

### [Paragraph HTML]()

```html
<FireBoxRoom>
<Assets>
<AssetScript src="https://vesta.janusvr.com/files/guide/javascript/paragraphhtml/Paragraph_HTML_tester.js" />
</Assets>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/paragraph-html)

### [Player Hand Functions]()

```html
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
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/player-hand-functions)

### [Programmatic Mesh]()

```html
<FireBoxRoom>
<Assets>
<AssetScript src="https://vesta.janusvr.com/files/guide/javascript/programmaticmesh/ProgramaticalMesh.js" />
</Assets>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/programmatic-mesh)

[Quadcopter]()

```html
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
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/quadcopter)

### [Realtime Lights]()

```html
<FireBoxRoom>
<Assets>
<AssetScript src="https://vesta.janusvr.com/files/guide/javascript/realtimelights/EditJS.txt" />
<AssetScript src="https://vesta.janusvr.com/files/guide/javascript/realtimelights/JS_Light.js" />
</Assets>
<Room>
<Light js_id="Light" pos="0 0 0" light_intensity="40" light_cone_angle="0" light_cone_exponent="10" light_range="8" col="#FF9900" />
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/realtime-lights)

### [Rotation Matrix to Euler]()

```html
<FireBoxRoom>
<Assets>
<AssetScript src="https://vesta.janusvr.com/files/guide/javascript/rotationmatrix/MatrixToEulerAndBack.txt" />
</Assets>
<Room>
<Object id="cube" js_id="rot"  collision_id="cube" pos="3 0 1" col="1 0 0" cull_face="none" />
<Object id="cube" js_id="rot2"  collision_id="cube"  pos="3 0 3" cull_face="none" />
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/rotation-to-euler)

### [Shotgun]()

```html
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
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/shotgun)

### [Timer]()

```html
<FireBoxRoom>
<Assets>
<AssetScript src="https://vesta.janusvr.com/files/guide/javascript/timer/TimerExample.js" />
</Assets>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/timer)

### [TrackpadGrid]()

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/trackpadgrid)

### [VideoSeek]()

```html
<FireBoxRoom>
<Assets>
<AssetScript src="https://vesta.janusvr.com/files/guide/javascript/videoseek/seektest.js" />
</Assets>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/videoseek)

### [SyncedSeek]()

```html
<FireBoxRoom>
<Assets>
<AssetScript src="https://vesta.janusvr.com/files/Spyduck/scripts/SyncedSeek.js"/>
</Assets>
<Room>
<videoscreen id="plane" video_id="main4kvid" js_id="mainvideo" pos="0.5 8 -21" xdir="0 0 1" zdir="-1 0 0" cull_face="none" scale="6.3774 3.587 .001" col="1 1 1" lighting="false" />
<Object js_id="TextSync_myglobaltime" sync="true" />
</Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/syncedseek)

### Env maps
Right now we only do envmaps if you set pbr="true" on the room - then we'll use the skybox by default, or you can set it per-object by setting envmap_id="..." to reference an AssetImage which points to an equirect image

 
