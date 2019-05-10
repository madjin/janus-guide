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
