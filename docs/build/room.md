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

**use_local_asset** - By entering any of the strings from the above image as a value, the associated default room geometry will be used.

**col** - (default "#ffffff") Allows the user to change the colour of the template geometry. The formatting is as follows:

**visible** - (default "true") Whether or not the default room geometry is visible.

***

### Entrance Portal

When you enter a webspace, you usually do so through an "entrance portal." Below are the attributes used to define the position and orientation of this entrance portal. When users teleport into the room via their pocketspace, they will do so in the same position and orientation that is defined by these attributes.

Example:

The below example places an entrance portal at 1 meter on the z axis facing 1 meter on the x axis.

```
<Room col="0 0 1" pos="5 0 5" fwd="1 0 0">
 ...
</Room>
```

**pos** - (default "0 0 0") A vector containing x, y and z values. These values define where the user will enter the webspace.

**fwd** - (default "0 0 0") The forward direction (direction the user is facing) when entering the webspace. It is a vector containing x,y and z values.

**xdir** - (default "1 0 0") May be used as an alternative to the fwd attribute. A vector containing x, y and z values which defines the x direction in a rotation matrix.

**ydir** - (default "0 1 0") May be used as an alternative to the fwd attribute. A vector containing x, y and z values which defines the y direction in a rotation matrix.

**zdir** - (default "0 0 1") May be used as an alternative to the fwd attribute. A vector containing x, y and z values which defines the z direction in a rotation matrix.

**rotation** - (default "0 0 0") Specifies an Eulerian rotation in degrees.

**rotation_order** - (default "xyz") A string which defines the order of each of the x, y and z axes associated with the "rotation" attribute. Possible settings may be any combination of the letters "xyz".

***

### Near and Far Plane

**near_dist** - (default 0.0025) How many meters from the user's camera the near plane is located. All geometry before this distance will be clipped.

**far_dist** - (default 500) How many meters from the user's camera the far plane is located. All geometry after this distance will be clipped.

***

### Movement

**jump_velocity** - (default 5.0) How many meters per second the user will start moving upwards when they press the jump button.

**walk_speed** - (default 1.8) How many meters per second the user can walk.

**run_speed** - (default 5.4) How many meters per second the user can run.

***

### Environmental

**gravity** - (default -9.8) The gravity (defined in meters per second squared) to be applied to all physics capable objects which are not being supported by collision geometry.

***

### Multiplayer Privacy

**cursor_visible** - (default "true") - Whether or not to display other users' current cursor position.

**party_mode** - (default "true") - Whether or not to allow users to broadcast the room on the JanusVR "party mode" server. With this attribute set to false, even users who are currently in party mode will not be able to transmit their location. However, users may still tell others, or may be using a client which does not honor these settings. If you want to truly secure your webspace, consider using a password defined in the .htaccess file of your website. Tip: Don't want the world to see the room you are working on yet? There is a way to disable 'Party Mode' broadcast from your room, and also stop it being added to the 'popular rooms' list In the <Room> tag add party_mode="false"

***

### Fog

Fog allows the developer to create ambient scenes in which distant areas are obscured by a fog-like effect.

Example:

```
<Room use_local_asset="room_home" fog="true" fog_mode="exp" fog_density="0.1" fog_col="0 0 0.2">
 ...
</Room>
```

**fog** - (default "false") - Whether or not to use fog in the webspace.

**fog_mode** - (default "exp") - Defines the weight function to use, choices are: exp, exp2, linear.

**fog_density** - (default "1.0") - The coefficient which applies to the "exp" and "exp2" fog_mode.

**fog_start** - (default "0.0") - The coefficient which applies to the "linear" fog_mode (the distance at which "fog begins").

**fog_end** - (default "1.0") - The coefficient which applies to the "linear" fog_mode (the distance at which "fog ends/is maximal").

**fog_col** - (default "0 0 0") - Defines the colour of the fog. 

***

### Teleportation

Users in JanusVR are able to teleport through space. These attributes allow web developers to set limits on the minimum and maximum teleport distances.

**teleport_min_dist** - (default "5.0") The minimum cursor distance in meters needed to allow teleporting.

**teleport_max_dist** - (default "100.0") The maximum cursor distance in meters needed to allow teleporting.

### Global Shader

Users may apply an AssetShader to the entirety of the room's contents, portals and users' avatars through the attributes below. This global shader may be overwritten on a per-Object basis by setting the shader_id attribute for each Object.

**shader_id** - (default "") The AssetShader id to use as the global shader.

***

### Multiplayer Server

Janus VR allows the use of custom multiplayer servers for any room. The Janus VR client will create a new connection to the specified multiplayer server if a connection does not exist, and in addition subscribe to the URL on that server (to listen to and broadcast user events which happen in the room). The custom multiplayer server is specified by adding server and port for the Room.

**server** - (default "presence.janusvr.com") Set to the domain name or IP of the custom multiplayer server for the room.

**port** - (default "5566") Set to the port of the custom multiplayer server for the room.

**rate** - (default "200") Set to the update rate (in milliseconds) for connected clients to send updates the multiplayer server.

***

### Manipulation

**grab_dist** - (default 0.5) The maximum distance which a user can 'pick up' and object using the 'grab' button.

***

### Reset Volume

The Room attribute "reset_volume" defines a volume where if the user enters it, they are brought back to the entrance of the room. This is most commonly used to reset a user who has "fallen" from the geometry of the room and needs to be reset. It is defined by two 3D endpoints of a cuboid/axis-aligned bounding box. The default value effectively acts as an infinite volume below y=-100, so for Rooms where the user is expected to go below this y value, the reset volume should be redefined accordingly.

**reset_volume** - (default "-FLT_MAX -FLT_MAX -FLT_MAX FLT_MAX -100.0f FLT_MAX", where FLT_MAX is the largest representable floating point value) Set the endpoints of two opposite corners of the reset volume (an axis-aligned bounding box with format "x0 y0 z0 x1 y1 z1").

Example:

An example which users corner points (-1000,-500,-1000) and (1000,0,1000):

```
<Room reset_volume="-1000 -500 -1000 1000 0 1000">
 ...
</Room> 
```

***

### Global Environmental Probe

JanusVR automatically generates radiance and irradiance maps for global lighting based on the skybox imagery. However, if the user wishes to define their own there are simple markup tags to do so. Radience and Irradience maps must be defined as AssetImages whose source files are .dds format.

**cubemap_radiance_id** - (default "") Defines the radiance map to be used.

**cubemap_irradiance_id** - (default "") Defines the irradiance map to be used.

Example:

Below is an example of a custom radiance and irradiance map being defined.

```
<Assets>
 <AssetImage id="Annotated_skybox_radiance" src="cubemap_radiance256.dds" tex_clamp="false" tex_linear="true" ></AssetImage>
  <AssetImage id="Annotated_skybox_Irradiance" src="cubemap_irradiance64.dds" tex_clamp="false" tex_linear="true" ></AssetImage>
</Assets>
<Room>
 <Room cubemap_radiance_id="Annotated_skybox_radiance" cubemap_irradiance_id="Annotated_skybox_Irradiance"/ >
</Room> 
```




