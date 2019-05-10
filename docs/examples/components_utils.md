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
