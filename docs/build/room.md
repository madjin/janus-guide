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

#### Attributes

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

***

# Object

An Object refers to an instance of 3D geometry placed in the room. Objects can be used to define both the geometry of the room, as well as the boundary for the room, by using the collision_id attribute, detailed below.

![tree](http://janusvr.com/docs/build/roomtag/img/object.jpg)

Example:

Here is an example Object, which is an instance of an AssetObject with id "room_adventure", which is also used as a collision model. It is locked, at position "0 0 0", faces direction "0 0 1", and will be coloured dark green.

```
<Room>
 <Object id="room_adventure" collision_id="room_adventure" locked="true" pos="0 0 0" xdir="1 0 0" ydir="0 1 0" zdir="0 0 1" scale="1 1 1" col="0.2 0.3 0.2" ></Object>
</Room>
```

#### Attributes

**id** - set to the id of an AssetObject. This attribute also accepts the following primitive values: "capsule", "cone", "cube", "cylinder", "pipe", "plane", "pyramid", "sphere", "torus".

**pos** (default "0 0 0") - specify the position (anchor point is centered horizontally, and at the bottom vertically)

**fwd** (default "0 0 1") - specify the orientation (or use xdir, ydir, zdir, defaults "1 0 0", "0 1 0", "0 0 1")

**vel** (default "0") - Specifies the velocity of the object.

**rotation** - (default "0 0 0") Specifies an Eulerian rotation in degrees.

**rotation_order** - (default "xyz") A string which defines the order of each of the x, y and z axes associated with the "rotation" attribute. Possible settings may be any combination of the letters "xyz".

**col** (default "#ffffff") - Allows the user to change the colour of the associated element.

**scale** (default "1 1 1") - scale the object along each of its x (horizontal), y (vertical) and z (forward) axes

**locked** (default "false") - if "true", prevents modification of attributes

**cull_face** (default "back") - options are "back", "front", "none" which specify what polygons are culled when the Object is rendered

**rotate_axis** (default "0 1 0") - defines an axis of rotation

**rotate_deg_per_sec** (default "0") - specifies the number of degrees to rotate per second about the axis defined by rotate_axis.

**video_id** (default "") - set to the id of an AssetVideo to shade the Object using frames of the video as a texture (see the section on AssetVideos for more information on defining an AssetVideo). Also note that the Object if clicked will serve as a control to start/stop the AssetVideo.

**image_id** (default "") - set to the id of an AssetImage to shade the Object using the image as a texture (see the section on AssetImages for more information). Note that the AssetImage will work even if SBS/UO formatted, or has animation.

**shader_id** (default "") - set to the id of an AssetShader to shade the Object with a GLSL fragment shader (see the section on AssetShaders for more information on defining an AssetShader)

**websurface_id** (default "") - set to the id of an AssetWebSurface to texture the Object with a 2D web view (see the section on AssetWebSurfaces for more information on defining an AssetWebSurface)

**thumb_id** (default "") - set to the id of an AssetImage, to show an image/thumbnail when an attached websurface is not selected (the AssetImage can animate)

**lighting** (default "true") - if "true", uses the default shading which includes diffuse and specular components

**anim_id** (default "") - set to the id of an AssetObject containing an animation

**anim_speed** (default "1.0") - changes the rate of playback of the animation defined by anim_id

**loop** (default "false") - if set to true, an animation will repeat from the start once completed

**visible** (default "true") - if set to false, the geometry for the Object is not visible/rendered

**collision_ccdmotionthreshold** (default 1.0) - Defines a minimum threshold for object velocity (defined in metres/sec) where continuous collision detection is used. (Objects with a velocity below this threshold use discrete instead)

**collision_ccdsweptsphereradius** (default 0.0) - When continuous collision detection is used, this values defines the radius of a swept sphere volume used to efficiently calculate collision with other objects in the scene.

**collision_id** (default "") - when set to the id of an AssetObject, collision testing is performed with that AssetObject. This makes it possible to define the boundary for the room using one's own custom geometry. (Note that the id and collision_id attributes can be set differently - the collision_id may refer to an AssetObject which is a low-polygon count version of a more detailed model, such as a bounding cube or sphere. Note also that collision tests are not performed if the player is not within the bounding volume of the AssetObject.)

**collision_trigger** (default "false") - When set to true, registers the object into the physics system so that it can be tested for collisions, but allows other objects to pass through it as if it were not a solid object.

**collision_radius** (default "0") - when set to a value greater than zero, an invisible cylinder at the specified radius prevents the player from passing through this Object (note that presently, this ignores the vertical or Y-position of the player, the cylinder extends in both directions along the Y-axis infinitely)

**collision_pos** (default "0 0 0") - Defines the collision mesh's x y and z offset from the parent object

**collision_scale** (default "1 1 1") - Scales the collision mesh along each of its x (horizontal), y (vertical) and z (forward) axes

**collision_static** (boolean, default "true") - Whether this Object is motionless/immovable (e.g. set to "true" for a wall or obstacle like the floor, set to "false" for a projectile).

**teleport_id** (default "") - if set to an AssetObject's id, will constrain teleportation in the HTC Vive to the defined mesh.

**draw_layer** (default 0) - Allows the user to manually sort the depth order of an object. For instance, an object of depth 0 will draw above an object of depth 1. Priority may be negative. Each priority group is also sorted based on distance.

**onclick** (default "") - Allows you to execute Javascript once the object is clicked upon by the user.

**cubemap_radiance_id** (default "") - Set to the id of an AssetImage to use it as the cubemap radiance for this object. Must be a .dds file. Look into the Room Tag: Global Environmental Probe section of the documentation for more info on this.

**cubemap_irradiance_id** (default "") - Set to the id of an AssetImage to use it as the cubemap irradiance for this object. Must be a .dds file. Look into the Room Tag: Global Environmental Probe section of the documentation for more info on this.

***

# Text

The Text tag allows the addition of 3D text to the room.

![Drunken Surfer](http://janusvr.com/docs/build/roomtag/img/text.jpg)

Example:

The following example shows a user placing text in the world.

```
<FireBoxRoom>
 <Assets>

 </Assets>
 <Room>
  <Text pos="5 5 5" fwd="0 0 1" col="0.5 0.8 0.5" scale="2 2 2" locked="false">example text</Text>
 </Room>
</FireBoxRoom>
```

#### Attributes

**pos** (default "0 0 0") - specify the position (anchor point is centered horizontally, and at the bottom vertically)

**fwd** (default "0 0 1") - specify the orientation (or use xdir, ydir, zdir, defaults "1 0 0", "0 1 0", "0 0 1")

**rotation** - (default "0 0 0") Specifies an Eulerian rotation in degrees.

**rotation_order** - (default "xyz") A string which defines the order of each of the x, y and z axes associated with the "rotation" attribute. Possible settings may be any combination of the letters "xyz".

**col** (default "#ffffff") - Allows the user to change the colour of the associated element.

**scale** (default "1 1 1") - scale the object along each of its x (horizontal), y (vertical) and z (forward) axes

**locked** (default "false") - if "true", prevents modification of attributes

**lighting** (default "true") - if "true", uses the default shading which includes diffuse and specular components

**draw_layer** (default 0) - Allows the user to manually sort the depth order of an object. For instance, an object of depth 0 will draw above an object of depth 1. Priority may be negative. Each priority group is also sorted based on distance.

***

# Paragraph

The Paragraph tag allows the addition a generated image which contains text, use this instead of "Text" when you want to display a large amount of text within the room (either this, or create your own image with text in it).

![Paragraph](http://janusvr.com/docs/build/roomtag/img/paragraph.jpg)

Example:

Like with the text tag, the paragraph's text content is placed between the opening and closing Paragraph tags. Here is an example which adds a Paragraph to the room at position "5 5 5" and facing direction "0 0 1".

```
<Room>
 <Paragraph pos="5 5 5" fwd="0 0 1" col="0.5 0.8 0.5" scale="2 2 2" locked="false">example paragraph's text</Paragraph>
</Room>
```

#### Attributes

**pos** (default "0 0 0") - specify the position (anchor point is centered horizontally, and at the bottom vertically)

**fwd** (default "0 0 1") - specify the orientation (or use xdir, ydir, zdir, defaults "1 0 0", "0 1 0", "0 0 1")

**rotation** - (default "0 0 0") Specifies an Eulerian rotation in degrees.

**rotation_order** - (default "xyz") A string which defines the order of each of the x, y and z axes associated with the "rotation" attribute. Possible settings may be any combination of the letters "xyz".

**col** (default "#ffffff") - Allows the user to change the colour of the associated element.

**scale** (default "1 1 1") - scale the object along each of its x (horizontal), y (vertical) and z (forward) axes

**locked** (default "false") - if "true", prevents modification of attributes

**lighting** (default "true") - if "true", uses the default shading which includes diffuse and specular components

**draw_layer** (default 0) - Allows the user to manually sort the depth order of an object. For instance, an object of depth 0 will draw above an object of depth 1. Priority may be negative. Each priority group is also sorted based on distance.

**font_size** (default "16") - specify the font size for the text

**text_col** (default "#000000") - Specifies the color of the paragraph's text. Uses the same formatting as any col attribute.

**back_col** (default "#ffffff") - Specifies the color of the paragraph's background. Uses the same formatting as any col attribute.

**back_alpha** (default "1") - specify the opacity (non-transparency) of the background

***

# Link

A Link creates a portal which can be used to connect to another FireBoxRoom, or any other webpage specified with a URL.

![Portal links](http://janusvr.com/docs/build/roomtag/img/link.jpg)

Example:

Here is an example Link.

```
<Room>
 <Link pos="66.7 -5 -9" url="horses.html" col="0.6 1 0.6" scale="1.8 3.2 1" title="A Strange Room Full of Horse Pictures" ></Link>
</Room>
```


