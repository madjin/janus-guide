# Room

Having defined a list of assets via the [Assets Tag](http://janusvr.com/docs/build/assetstag/index.html), we are now ready to place them within the webspace. The <room></room> section of any webspace contains a list of assets that will appear within the webspace when viewed through JanusVR.

Example:

The following example defines an AssetImage named "tree" and then places a copy in the environment at position 0 0 0. The entrance portal is located at 0 0 5 via the pos attribute attached to the Room tag.

```
<FireBoxRoom>
 <Assets>
  <AssetImage id="tree" src="testimage.jpg" ></AssetImage>
 </Assets>
 <Room pos="0 0 5">
  <Image id="tree" pos="0 0 0" ></Image>
 </Room>
</FireBoxRoom>
```

### Attributes

**Skybox** - By default, a "sky" for the Room will be randomly selected amongst a small set which are packaged with JanusVR. Optionally, one can define a custom skybox for the Room. 

![skybox](http://janusvr.com/docs/build/roomtag/img/sky.png)

**skybox_left_id** - The AssetImage to use as the left skybox.

**skybox_right_id** - The AssetImage to use as the right skybox.

**skybox_front_id** - The AssetImage to use as the front skybox.

**skybox_back_id** - The AssetImage to use as the back skybox.

**skybox_up_id** - The AssetImage to use as the upper skybox.

**skybox_down_id** - The AssetImage to use as the bottom skybox.

***

### Room Templates

To help users quickly begin building, JanusVR offers "template rooms", which are geometry that can be used to define a structure and boundary for a Room.

![Room templates](http://janusvr.com/docs/build/roomtag/img/templates.png)


