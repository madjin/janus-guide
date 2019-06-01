# Assets

- [AssetImage](build/assets.md#assetimage)
- [AssetSound](build/assets.md#assetsound)
- [AssetVideo](build/assets.md#assetvideo)
- [AssetObject](build/assets.md#assetobject)
- [AssetShader](build/assets.md#assetshader)
- [AssetGhost](build/assets.md#assetghost)
- [AssetWebsurface](build/assets.md#assetwebsurface)
- [AssetScript](build/assets.md#assetscript)
- [AssetRecording](build/assets.md#assetrecording)

The `</assets>` section of JML contains a list of assets that will be used throughout the room. As with developing for the ordinary, two dimensional internet, files may be stored and loaded from any external website and even your own computer.

The code below is an example of a properly formatted webspace, with its Assets section in the proper area.

```
<FireBoxRoom>
 <Assets>

 </Assets>
 <Room>

 </Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/assets)

Most assets must have an id assigned to it. This id is their unique "identifier", which will be used later on when placing the asset in the room.


# AssetImage

AssetImage is used to define any standalone image file that will be used in the webspace. PNG, JPG, GIF and most other common formats are acceptable. Images with a transparency layer (such as with the PNG format) are also supported.

![AssetImage](https://i.imgur.com/fISNIB0.jpg)

The example below is of someone loading a picture of a wood plank into a webspace through the Assets section and giving it the id: woodplanks_img

```
<FireBoxRoom>
 <Assets>
  <AssetImage id="woodplanks_img" src="WoodPlanks.jpg" ></AssetImage>
 </Assets>
 <Room>

 </Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/assetimage)

### Attributes

**id** - The unique identifier assigned to this asset.

**src** - The location of the image file.

**sbs3d** - (default "false") When set to true, the image is treated as a SBS (side-by-side) formatted image. By default, the left eye will see the content on the left and the right eye the content on the right. Set the reverse3d attribute to true if you want to flip which side goes to each eye.

**ou3d** - (default "false") When set to true, the image is treated as an UO (under-over) format video. By default, the left eye will see the content on the top and the right eye the content on the bottom. Set the reverse3d attribute to true if you want to flip which side goes to each eye.

**reverse3d** - (default "false") Flips which half of the image is shown to each eye, when either sbs3d or ou3d are set to true.

**tex_clamp** - (default "false") Whether to perform texture clamping (GL_CLAMP_TO_EDGE), or allow textures to repeat (GL_REPEAT).

**tex_linear** - (default "true") if true, textures have bilinear filtering applied (GL_LINEAR). If false, a nearest sampling method (GL_NEAREST) is used which gives textures a pixellated look.

**tex_compress** - (default "false") If true, uses hardware-supported texture compression on the image texture (GL_COMPRESSED_RGBA).

**tex_alpha** (default "undefined") - Can be "undefined/none/cutout/blended". Defines how alpha transparency will be handled with a particular asset.

**tex_premultiply** (default "true") - Boolean. Set to false if the asset's albedo texture is already using a pre-multiplied alpha channel and you don't want the rendering engine interfering.

**tex_colorspace** (default "sRGB") - Can be "sRGB/linear". The colorspace to use for an objects associated textures. Typically only used when manually loading an asset's textures via tex0-tex9 attributes.

---

# AssetSound

These are sounds which can be used within the webspace. Supported formats are dependent upon the multimedia capabilities of the underlying platform (e.g. DirectShow on Windows, gstreamer on Linux). Uncompressed WAV will work universally, but is not bandwidth friendly. MP2 or MP3 are compressed formats which seem to work universally and offer great compression.

![AssetSound](https://i.imgur.com/dJXQSJI.jpg)

Here is an example of how to use the AssetSound tag to add the sound "localmap.mp3" to the collection of assets, assigning it id "localmap_sound".

```
<FireBoxRoom>
 <Assets>
  <AssetSound id="localmap_sound" src="localmap.mp3" ></AssetSound>
 </Assets>
 <Room>

 </Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/assetsound)

### Attributes

**id** - The unique identifier assigned to this asset.

**src** - The location of the sound file.

---

# AssetVideo

These are videos which can be used within the webspace. Supported formats are dependent upon the multimedia capabilities of the underlying platform (e.g. DirectShow on Windows, gstreamer on Linux). (On Windows, we use the [K-Lite Codec Pack Basic](http://www.codecguide.com/download_k-lite_codec_pack_basic.htm) to make a much wider variety of video formats available.)


Here is an example of how to use the AssetVideo tag to add the video "las_firebox_clip.mp4" to the collection of assets, assigning it id "vid_id".

```
<FireBoxRoom>
 <Assets>
  <AssetVideo id="vid_id" src="las_firebox_clip.mp4" ></AssetVideo>
 </Assets>
 <Room>

 </Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/assetvideo)

### Attributes

**id** - The unique identifier assigned to this asset.

**src** - The location of the video file.

**loop** - (default "false") Normally the video plays only one time, but when this attribute is set to true, the video will play indefinitely until the player leaves the room.

**auto_play** - (default "false") When set to true, video will play immediately when the room is entered. If set to false (the default), the user must click on the Video (or any Object!) to play it.

**tex_compress** - (default "false") If true, uses hardware-supported texture compression on the video texture (GL_COMPRESSED_RGBA).

**sbs3d** - (default "false") When set to true, video is treated as an SBS (side-by-side) format video. By default, the left eye will see the content on the left and the right eye the content on the right in each frame of video. Set reverse3d to true if you want to flip this.

**ou3d** - (default "false") When set to true, video is treated as an UO (under-over) format video. By default, the left eye will see the content on the top and the right eye the content on the bottom in each frame of video. Set reverse3d to true if you want to flip this.

**reverse3d** - (default "false") Flips which half of each frame is shown to each eye, when either sbs3d or ou3d are set to true.

---

# AssetObject

These are the 3D geometric objects which can be used within the FireBoxRoom. Supported formats are OBJ, DAE, 3DS, glTF, and FBX.

![AssetObject](https://i.imgur.com/fISNIB0.jpg)

The URL to the file is specified by the src attribute. You can also specify materials for the file using either a single texture file (specified with the tex attribute), or more traditionally by specifying the location of the material file (specified with the mtl attribute). Here is an example of the first method (specifying a single image as a texture).

`<AssetObject id="pinetree" src="pinetree.obj" tex="pinetree.png" ></AssetObject>`

Here is how to specify a material file (which may reference many textures):

`<AssetObject id="pinetree" src="pinetree.obj" mtl="pinetree.mtl" ></AssetObject>`

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/assetobject)

*Details for the more technical reader: If per-vertex normals are not specified in the file (specified by "vn" lines in the file), normals which are per-face will be generated by FireBox and assigned to each vertex. If textures are to be used, texture coordinates should be exported (these are "vt" lines in the file). Finally, meshes with 4 or more vertices used to define a polygonal face are supported - however FireBox's treatment is to divide these polygons into triangles using a naive triangle fan method, therefore only convex polygonal faces are properly supported and will render correctly.*

### Attributes

**id** - The unique identifier assigned to this asset.

**src** - The location of the geometry file.

**tex0 , tex1 , tex2 , tex3** - (default "") These attributes define different images to be used as textures on the geometry. These attributes may not reference material files.

**mtl** - (default "") The location of the associated material file. Typically used with .OBJ files.

**tex_clamp** - (default "false") whether to perform texture clamping (GL_CLAMP_TO_EDGE), or allow textures to repeat (GL_REPEAT).

**tex_linear** - (default "true") If true, textures have bilinear filtering applied (GL_LINEAR). If false, a nearest sampling method (GL_NEAREST) is used which gives textures a pixellated look.

**tex_compress** - (default "false") If true, uses hardware-supported texture compression on textures (GL_COMPRESSED_RGBA).

**tex_mipmap** - (default "true") If true, uses mipmapping for textures.

**tex_alpha** (default "undefined") - Can be "undefined/none/cutout/blended". Defines how alpha transparency will be handled with a particular asset. Only effects the albedo textures loaded by the model file.

**tex_premultiply** (default "true") - Boolean. Set to false if the asset's albedo texture is already using a pre-multiplied alpha channel and you don't want the rendering engine interfering. Only effects the albedo textures loaded by the model file.

**tex_colorspace** (default "sRGB") - Can be "sRGB/linear". The colorspace to use for an objects associated textures. Typically only used when manually loading an asset's textures via tex0-tex9 attributes. Only effects the albedo textures loaded by the model file.

---

# AssetShader

An AssetShader allows you to use either a GLSL fragment shader to shade geometry (set src), or a GLSL vertex shader to deform geometry (set vertex_src), or both.


Here is an example of defining a fragment shader.

`<AssetShader id="shader_id" src="shader1.txt" ></AssetShader>`

Here is another example (both custom fragment and vertex shaders).

`<AssetShader id="shader_id" src="frag.txt" vertex_src="vert.txt" ></AssetShader>`

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/assetshader)

*See the section on Objects for information on shading an Object using the AssetShader (essentially, you want to set an Object's shader_id to the AssetShader's id).*

### Attributes

**id** - The unique identifier assigned to this asset.

**src** - (default "") The location of a GLSL fragment shader (plaintext file with GLSL code).

**vertex_src** - (default "") The location of a GLSL vertex shader (plaintext file with GLSL code).

---

# AssetGhost

An AssetGhost defines a recording of a user. This recording will contain the position and orientation of the avatar, as well as the orientation of their head (as measured from the Oculus Rift headset).

EXAMPLE: 

Below is an example of defining a ghost via a ghost file generated through JanusVR.

```
<FireBoxRoom>
 <Assets>
  <AssetGhost id="ghost_id" src="ghost.txt" ></AssetGhost>
 </Assets>
 <Room>

 </Room>
</FireBoxRoom>
```

### Attributes

**id** - The unique identifier assigned to this asset.

**src** - The location of the ghost recording file (a plaintext file).

---

# AssetWebsurface

An AssetWebsurface defines an interactive surface that provides a 2D web view. Note that this surface can be placed on an Object by specifying a websurface_id that matches the AssetWebsurface's id.


Below is someone defining a 1920x1080 resolution AssetWebSurface and pointing it to the JanusVR website.

```
<FireBoxRoom>
 <Assets>
  <AssetWebSurface id="janusWebSurface" src="https://janusvr.com" width="1920" height="1080" ></AssetWebSurface>
 </Assets>
 <Room>

 </Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/assetwebsurface)

### Attributes

**id** - The unique identifier assigned to this asset. (Note: the corresponding Object should have its "websurface_id" attribute set to this value).

**src** - The website to assign to this asset.

**width** - The horizontal resolution.

**height** - The vertical resolution.

**show_url_bar** - Whether or not to show navigation controls on this asset.

---

# AssetScript

An AssetScript defines a file containing JavaScript (technically ECMAScript 3 compliant code) that you can run in the FireBoxRoom. Functions can be set up for specific events such as mouse clicks or on frame updates. Sounds can be played, Objects can be created, have their properties modified, and be destroyed. For further details about this, see this page: [Javascript - Room Object](http://janusvr.com/docs/build/roomobject/index.html). Also check the "experiment" workspace included with JanusVR which serves as a JS example.


Below is an example of someone defining a JS file called "script.txt", which will be automatically executed when the webspace begins.

```
<FireBoxRoom>
 <Assets>
  <AssetScript src="script.txt" ></AssetScript>
 </Assets>
 <Room>

 </Room>
</FireBoxRoom>
```

[![View Example](https://i.imgur.com/hPC9Ati.jpg)](https://vesta.janusvr.com/guide/assetscript)

*(More notes: Cookies can also be saved/loaded via the JS (in addition to those cookies set through AssetWebSurfaces). This can be used for inter-communication between the FireBoxRoom, the JS/AssetScripts, and AssetWebSurfaces in the room.)*

### Attributes

The id attribute is not required for this asset

**src** - The location of the JavaScript file that will be executed.

---


# AssetRecording

An AssetRecording defines a file containing all user activity recorded in a webspace. This differs from an AssetGhost in that it is a complete recording of all user activity within a space.

EXAMPLE:

Below is an example of defining a recording via a recording file generated through JanusVR.

```
<FireBoxRoom>
 <Assets>
  <AssetRecording id="recording_id" src="recording.txt" ></AssetRecording>
 </Assets>
 <Room>

 </Room>
</FireBoxRoom>
```

### Attributes

**id** - The unique identifier assigned to this asset.

**src** - The location of the recording file (a plaintext file).

**auto_play** - Whether or not to automatically play the recording on entry to the webspace.

**loop** - (default false) Whether or not to loop the recording after it has finished.

**sample_rate** - (default 44100) Sets the playback sample rate for any VOIP audio contained in the recording. (Note that older versions of Janus used a value of 22050, which needs to be specified for playback of older AssetRecordings to sound correct).
