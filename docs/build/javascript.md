# Javascript Intro

JanusVR's Javascript engine allows developers to add a layer of depth and creativity to their websites. Users have created experiences ranging from games and demonstrations to educational experiences and collaborative experiences. This guide will help you get up to date with Janus' current capabilities.

**Understanding the js_id Attribute**

Attaching this attribute to any object will allow it to be easily identified and retrieved within the room's Javascript. If you do not manually set this to something, it will default to a unique number. The js_id of an object cannot conflict with another object.

**Understanding the AssetScript Element**

Placing an AssetScript within the section of the JanusVR Markup Language will allow you to reference a javascript file.

**Understanding the onclick Attribute**

Specifies the name of a script or function to run when an object is clicked. If you reference a function, the function should not take any arguments.

**Understanding the oncollision Attribute**

Specifies the name of a script or function to run when an object is collided with. If you reference a function, the function should take two arguments, the first being the object containing the oncollision attribute, and the second being the object it is colliding with.

**The Javascript Debugger**

The Javascript Debugger can be brought up manually by inserting the "debugger;" command into your javascript. You can learn more about it on this [page](http://doc.qt.io/qt-5/qtscriptdebugger-manual.html).

**Before You Begin...**

Multiple scripts may be loaded into a room. JanusVR's Javascript language is essentially qtScript, which is equivalent to ECMAScript 3. Please see [this website](http://qt-project.org/doc/qt-5/ecmascript.html) for a reference of what is built in.

***

---

## The "room" Object

The room and all of its elements are easily accessible through a global object known as "room". The "room" Object allows developers to change or observe aspects of the webspace, ranging from contents to environmental factors like gravity. It also comes equipped with useful callbacks for developers to take advantage of.

Properties:

**room.url** - Read only. Contains the URL of the room.

**room.objects** - Contains the objects in the room. Basically a dictionary that maps the js_id attribute of each object to a script object that contains the object's attributes. Modifications to the attributes of this object will modify the attributes of the object in the room.

Example:

```javascript
 room.objects["js_idgoeshere"].scale.x = 5; //Set the x scale of an object to 5.
```

**room.cookies** - A dictionary that stores persistent states between sessions. To add a cookie, all you need to do is use the addCookie function.

Example:

```javascript
// Track number of times a user has been to a room.
if (typeof room.cookies['sessions'] == 'undefined')
{
 room.addCookie('sessions', 0);
}
//Add 1 to the sessions cookie.
room.cookies['sessions'] +=1;
```

**room.walk_speed** - Sets the user walk speed. The default value is 1.8 meters per second.

**room.run_speed** - Sets the user run speed. The default value is 5.4 meters per second.

**room.jump_velocity** - Sets the user's jump velocity. The default value is 5.0 meters per second.

**room.gravity** - Sets the room's gravity. The default value is -9.8 meters per second.

**room.players** - An object containing references to other players in the webspace, indexed by their userid.

**room.playerCount** - An integer referencing the number of other players in a room

Example:

```javascript
// Code using room.players and room.playerCount
room.onLoad = function() {
}
room.update = function(dt) {
 var new_text = "room.playerCount: " + room.playerCount;

 for (var key in room.players) {
  var obj = room.players[key];
  new_text += " " + key + "(" + obj.pos.x + "," + obj.pos.y + "," + obj.pos.z + ")";
 }

 room.objects["test_text"].text = new_text;
} 
```

#### Methods

**room.loadNewAsset(element, {attributes})** - Loads a new asset into memory that can be referenced in the room markup. "element" must be one of the elements that can be placed within a room, like Object, Sound, Video, Text, etc. "attributes" is a dictionary that specifies the initial attributes of the loaded object.

Example:

```javascript
room.loadNewAsset("Object",{id:"block",src:"test.dae",tex0:"test.png"})
```

**Generating Procedural Content (v59.5+)**

JanusVR allows one to programmatically generate triangular meshes using JavaScript by passing certain attributes into the room.loadNewAsset function.

Attributes

* mesh_verts - An array of floats in which every three values, (x,y,z), represent cartiesian coordinates for a vertex point.
* mesh_normals - An array of floats in which every three values, (x,y,z), represent cartiesian coordinates that define a normalized vector.
* mesh_uvs - An array of floats in which every two values, (x,y), represent cartiesian coordinates for a UV vertex point.
* mesh_faces - A zero-indexed array of integers in which every three indices, (x,y,z), make up one full face. Each x,y,z value represents one defined vertex from the mesh_verts array.
* mesh_face_normals - A zero-indexed array of integers in which every three indices, (x,y,z), make up one full normal direction. Each x,y,z value represents one defined normalized vector from the mesh_normals array.
* mesh_face_uvs - A zero-indexed array of integers in which every three indices, (x,y,z), make up one full UV face. Each x,y,z value represents one defined vertex from the mesh_uvs array.

Example:

```javascript
//Creates three vertices and connects them into a triangle.
var arrayOfVertices = [1, 0, 0, 0, 1, 0, 0, 0, 1];
var arrayOfFaces = [0, 1, 2];
room.loadNewAsset("Object", {id:"blah", mesh_verts:arrayOfVertices, mesh_faces:arrayOfFaces}); 
```

**room.createObject(element, {attributes})** -Creates/returns new object in the room. "element" must be one of the elements that can be placed within a room, like Object, Sound, Video, Text, etc. "attributes" is a dictionary that specifies the initial attributes of the spawned object.

Example:

```javascript
room.createObject("Object",{id:"block", pos: Vector(1, 0, 0)}) 
```

**room.removeObject(String js_id *or* node a,sync)** - Removes the specified js_id or node, and all of its children immediately. Second parameter is an optional boolean specifying whether or not to synchronize object deletion, defaulting to "true".

**room.addCookie(name,value)** - Adds a cookie with a name and set value. The value will be converted into a string.

**room.playSound(assetid)** - Plays a sound with the given asset id.

**room.pauseSound(assetid)** - Pauses a sound with the given asset id.

**room.seekSound(assetid, pos_in_seconds)** - Seeks to position for a sound with given asset id.

**room.stopSound(assetid)** - Stops a sound with the given asset id.

**room.playVideo(assetid)** - Plays a video with the given asset id.

**room.pauseVideo(assetid)** - Pauses a video with the given asset id.

**room.seekVideo(assetid, pos_in_seconds)** - Seeks to position for a video with given asset id.

**room.stopVideo(assetid)** - Stops a video with the given asset id.

**room.playRecording(assetid,loop)** - Plays a recording with the given asset id. The second parameter is a boolean which determines whether or not the played recording will loop.

**room.pauseRecording(assetid)** - Pauses a recording with the given asset id.

**room.seekRecording(assetid, pos_in_seconds)** - Seeks to position for a recording with given asset id.

**room.stopRecording(assetid)** - Stops a recording with the given asset id.

**room.getObjectById(js_id)** - Returns the object associated with the js_id passed in as an argument.

**room.closeLink(js_id)** - Closes a link with the specified js_id.

**room.openLink(js_id)** - Opens a link with the specified js_id.

**room.preventDefault()** - When placed within an input related callback, native input functions will be ignored. For instance, the following code will prevent the click event from occuring.

Example:

```javascript
room.onClick = function()
 {
 room.preventDefault();
 }
```

**Callbacks**

Using the callback functions, you can create behaviour that is triggered when certain events happen.

**room.onCollisionEnter(object1, object2)** - Invoked when object1 collides with object2.

**room.onCollisionExit(object1, object2)** - Invoked when object1 exits object2's collision boundaries.

**room.onLoad()** - Invoked before the first update of the room. Note that this is not when the room is loaded, but when the user first steps into the room.

**room.update([dt])** - Invoked on each frame before the world is drawn. dt, an optional parameter, is the amount of time in milliseconds that elapsed between this update and the previous update, useful for ensuring objects move at the same speed regardless of framerate.

**room.onCollision(object, other)** - Invoked twice when two objects in the room collide with each other: once with the first object as the first argument and the second object as the second agument, and once with the second object as the first argument and the first object as the second argument. Note that both elements need to have a collision radius in order to collide.

**room.onClick()/room.onMouseUp()** - Invoked when the user releases their mouse 1 button.

**room.onMouseDown()** - Invoked when the user press down the mouse 1 button.

**room.onMouseMove()** - Invoked when the mouse moves.

**room.onMouseDrag()** - Invoked when the mouse moves whilst LMB is held down.

**room.onKeyDown(event)** - Invoked when the user presses a key. "event" is an object with a property "keyCode" that indicates the key that was pressed (e.g. "W", "A"), and a function "preventDefault()" that when invoked prevents the default behavior for the key press from taking place. Certain buttons don't cause an event to occur (CTRL, SHIFT, TAB). Additionally using charCodeAt(0) can be useful for keys such as ENTER & BACKSPACE

Example:

```javascript
room.onKeyDown = function(event)
{
 print(event.keyCode.charCodeAt(0));

 if(event.keyCode.charCodeAt(0)== 4)
   {
   //do something
   }
}
```

**room.onKeyUp(event)** - The equivalent onKeyDown, but invoked when the user lets go of a key.

***

---

## Script Objects

Script Objects are essentially the contents of any given webspace. These objects contain attributes that define their styling and other various aspects of their existence. All script objects can be accessed via the room.objects dictionary. Any room content may be marked with a "js_id" attribute that will allow it to be referenced and altered in the Javascript. You can find more on this dictionary in the [Room Object](http://janusvr.com/docs/build/roomobject/index.html) portion of the documentation.

Example:

The below code demonstrates how you would change an object's, (whose js_id is testObject), position.

```javascript
room.objects["testObject"].pos.x = "15"; 
```

**String Attributes**

- id
- js_id
- text
- image_id
- onclick
- oncollision
- video_id
- thumb_id
- url
- title
- websurface_id
- collision_id
- blend0_id
- blend1_id
- blend2_id
- blend3_id
- [All regular javascript strings]

**Vector Attributes**

Each vector attribute contains an "x", "y" and "z" property.

- pos
- vel
- fwd
- xdir
- ydir
- zdir
- col
- scale

**Float Attributes**

- collision_radius
- blend0
- blend1
- blend2
- blend3
- gain
- outer_gain
- inner_angle
- outer_angle
- pitch
- interp_time
- anim_speed
- duration
- fade_in
- fade_out

**Integer Attributes**

- font_size
- uuid
- count
- rate
- current_time - (Read Only) Returns the current time of the object's associated AssetVideo.
- total_time - (Read Only) Returns the total length of the object's associated AssetVideo.

**Boolean Attributes**

- open
- visible
- lighting
- loop
- sync
- draw_text
- draw_glow
- auto_load

**Properties**

- .children - Returns an array listing all child elements of an object, indexed by an integer.
- .parent - Returns the parent of an element.
- .leftSibling - Returns the left sibling of an element.
- .rightSibling - Returns the right sibling of an element.

**Methods**

- .appendChild(string js_id) - Attaches a child object to the node calling this function. The first argument of this function is the string js_id associated with the object you want to attach.
- .removeChild(string js_id) - Removes a child object from the node calling this function. The first argument of this function is the string js_id associated with the object you want to remove.

***

---

## The "player" Object

The "player" object is another global object. Similar to objects within "room.objects", it contains the player's attribute for reference and modification. The "player" Object allows the developer to change or observe aspects of the player whilst they are in their webspace. It is important to note that this is not usable in the global scope, as it is not created before the onLoad callback.

#### Properties

- **player.pos** - Read & Write: Contains the vector of the player's current position.
- **player.vel** - Read & Write: A vector defining the current player's velocity.
- **player.eye_pos** - Contains the vector of the player's eye position, relative to the player position.
- **player.cursor_pos** - Contains the vector of the player's cursor position. Always readable regardless of player.cursor_active state.
- **player.cursor_xdir** - Contains the vector of the player's cursor's local x direction. Always readable regardless of player.cursor_active state.
- **player.cursor_ydir** - Contains the vector of the player's cursor's local y direction. Always readable regardless of player.cursor_active state.
- **player.cursor_zdir** - Contains the vector of the player's cursor's local z direction. Always readable regardless of player.cursor_active state.
- **player.head_pos** - Contains the vector of the player's head position, relative to the eye position
- **player.view_dir** - Contains the forward vector in which the player is currently looking. Useful if the player is using an HMD.
- **player.dir** - Read-only. Contains the forward vector in which the player's body is currently facing, as well as head tilt.
- **player.userid** - Read-only. Contains the userid of the player.
- **player.url** - Read-only. Contains the url of the room the player is in.
- **player.hmd_enabled** - Read-only. Boolean. True if user is using an HMD, otherwise false.
- **player.hmd_type** - Read-only. String. Returns a string that indicates which hardware the user is viewing the webspace with. Possible values are: "sbs/sbs_reverse/ou3d/cube/equi/rift/vive/osvr/2d"
- **player.cursor_active** - Read-only. Boolean. True if user left clicking the mouse, otherwise false.
- **player.cursor_object** - Read-only. Returns the js_id of the object being hovered over by the cursor. Always readable regardless of player.cursor_active state.

#### Motion Controller Specific Properties

Note that the following properties are in worldspace.

- player.handX_* - Replace X with either 0 or 1, as it is the controller index. 0 always represents the left hand and 1 always represents the right hand.

Example:

```javascript
if (player.hand0_active) {
  print("Hand 0 is Up!");
}
else if (player.hand1_active) {
  print("Hand 1 is Up!");
}
```

- **player.handX_active** - Whether or not the specified hand is being tracked. (boolean, left hand)
- **player.handX_xdir** - Read only hand 0 x orientation.
- **player.handX_ydir** - Read only hand 0 y orientation.
- **player.handX_zdir** - Read only hand 0 z orientation.
- **player.handX_pos** - Central palm position (Vector3, left hand).
- **player.handX_p0** - Thumb endpoint position (Vector3, left hand).
- **player.handX_p1** - Index endpoint position (Vector3, left hand).
- **player.handX_p2** - Middle endpoint position (Vector3, left hand).
- **player.handX_p3** - Fourth endpoint position (Vector3, left hand).
- **player.handX_p4** - Pinky endpoint position (Vector3, left hand).
- **player.handX_trackpad.x** - Returns a floating point number between -1 and 1 representing the x coordinate of the Vive Trackpad/Oculus Touch Stick. Reverts to 0 when not being used.
- **player.handX_trackpad.y** - Returns a floating point number between -1 and 1 representing the y coordinate of the Vive Trackpad/Oculus Touch Stick. Reverts to 0 when not being used.

---

## Vector Functions & Misc.

There are several built-in functions that allow you to operate on room elements' attributes.

#### Vector Functions

- **Vector(x, y, z)** - Can be used either as a regular function or as a constructor. If no arguments are supplied, will create zero vector. If a single number is supplied, will create a vector with all of its components initialized to that number. Supplying an object will create a vector from its x y and z properties, essentially cloning the existing vector.
- **translate(v1, v2)** - Returns a new vector that is the result of adding the v1 and v2 vectors together.
- **scalarMultiply(v1, n or v2)** - Returns a new vector that is the result of scalar multiplying v1 with the second argument. If the second argument is a number n, then the result is a vector with components (x1 * n, y1 * n, z1 * n). If the second argument is a vector with components (x2, y2, z2), then the result is a vector with components (x1 * x2, y1 * y2, z1 * z2).
- **cross(v1, v2)** - Returns the cross product of v1 and v2.
- **normalized(v)** - Returns a normalized version of the given vector.
- **distance(p1, p2)** - Returns the distance between the two given points(vectors).
- **equals(v1, v2)** - Returns whether v1 and v2 have the same x,y,z values (introduced in 34.11, note that the == operator will instead compare memory locations, rather than compare the x,y,z components)
- **copy( {v1,v2} or {v1,x} or {v1,x,y,z} )** - Copies the x y & z values of v2 (a vector) into v1 (also a vector). If a single number is provided as the second argument (x), this number will be assigned to all three x y & z values of v1. If three individual numbers are provided as the second, third and fourth arguments (x,y,z) they will be assigned to v1's x y & z values. Returns v1.
- **scale(v1, s)** - Scales the x, y, and z values of v1 by the number s. Returns v1.
- **add(v1, v2)** - Adds each of the x, y, and z values of v1 and v2. Returns v1.

#### XMLHttpRequest Functions

- **XMLHttpRequest.addEventListener(event, function)** - Attaches an event handler to the specified node. Currently only supported event is "load".
- **XMLHttpRequest.removeEventListener(event, function)** - Removes an event handler from the specified node.
- **XMLHttpRequest.open(method, url)** - Specifies the type of request for an XMLHttpRequest. Takes either "GET" or "POST" as the first argument.
- **XMLHttpRequest.send([data])** - Executes the request defined by the open function. The [data] parameter is optional and consists of a string of information that you would like to be sent along with the request.

#### XMLHttpRequest Properties

- **XMLHttpRequest.responseText** - A property that returns a string containing a response to an XMLHttpRequest. Returns null if the request was unsuccessful or has not yet been sent.

Example:

```javascript
//Demonstrates a simple XMLHttpRequest

function getLastViewed() {
 var xhr = new XMLHttpRequest();
 xhr.addEventListener('load', parseLastViewed);
 xhr.open('GET', 'https://vesta.janusvr.com/api/top_rooms?limit=5&orderBy=last_viewed');
 xhr.send();
}

function parseLastViewed(ev) {
 var xhr = ev.target;
 var response_text = xhr.responseText;
}
```

---

## Site Translators

Site translators are JS scripts users can write that tell Janus how to interpret an existing 2D website as a 3D space.

#### Installing a Site Translator

The title of your site translator script tells Janus which domain you're translating into 3D. For instance, a translator script titled "example.com.js" translates the 2D website "www.example.com" into 3D. The translator will apply to all pages within that domain, e.g. "www.example.com/page1", so it is up to you to check the URL of the current page in the translator script and decide how to render the page accordingly. The URL of the current 2D page is accessible through the variable `window.janus.url`.

Place the translator script in a folder titled "translators" inside your "assets" folder, and navigate to the domain you're translating in Janus to test it. The script can be reloaded with `F5` if you're already inside that room.

#### Understanding the createroom Function

The translator's job is to define the createroom function. The syntax for that is:

```javascript
window.janus.createroom = function() { // Room creation code goes here }
```

This function will be called as soon as the DOM is loaded. Typically, you will want to iterate over some DOM elements, and map each of them to something in the 3D environment. You should open up the page you're translating in any 2D browser (e.g. Chrome, Firefox), and inspect the source to find the DOM elements you're interested in translating. The `getElementsByClassName` function will especially come in handy. You can find more functions for accessing DOM elements here. The following snippet provides an example of finding all posts on a Tumblr blog and extracting the title and the body:

```javascript
var tumblr_posts = document.getElementsByClassName("post_content");

for (var i = 0; i < tumblr_posts.length; i++) {
 var post_title = tumblr_posts[i].getElementsByClassName("post_title")[0];
 var post_body = tumblr_posts[i].getElementsByClassName("post_body")[0];
 // Create objects to correspond to post title and body...
}
```

#### Creating Assets and Objects

You can create the same kinds of assets and objects you can create in JML pages, only using a different syntax. The syntax for creating assets is as follows:

```javascript
window.janus.createasset("object", {id:"Cube", src:translator_path+"Cube.fbx"});
```

This loads a 3D model from an FBX file. The `translator_path` variable points to the location of all asset files. You can then add the 3D model to the room using the following syntax:

```javascript
window.janus.createobject("object", {id:"Cube", js_id:"Cube0", lighting:"true", collision_id:"Cube", pos:"0 0 0", scale:"20 0.1 20", fwd:"1 0 0"});
```

#### Adding User Interaction

You could use the `onclick` and `oncollision` attributes to add user interaction to objects. For example:

```javascript
window.janus.createobject("object", {id:"Cube", js_id:"Cube0", onclick:"cubeClick()"})
```

This sets the `onclick` function to `cubeClick()`.

The next step is to actually define that function. To do that, you need to create an additional JS file, and add it as a script asset (using the below example.)

```javascript
window.janus.createasset("script", {src:"[path_to_script]"});
```

In that file, you can define the function as such:

```javascript
cubeClick = function() {}
```

You can also define other script asset functions in the same file as usual, such as `room.update`.


---

#### Miscellaneous Functions

- **removeKey(dictionary, key)** - Removes a key-value pair from the given dictionary by key.
- **print(value)** - Prints the value to the chat log and debugger output.
- **debug(value)** - Logs the given value in the debugger output and returns it. Useful for examinining results of expressions without having to abstract them into a variable and print them.
- **uniqueId()** - returns a unique number that you can use, say in specifying the js_id of a new object.

