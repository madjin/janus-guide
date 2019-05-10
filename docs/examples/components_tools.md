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
