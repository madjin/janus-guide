var UpdateingValueupdate = 0;
var UpdateingValue = 0;
 
var boolswitchupdate = 0;
var boolswitch = 0;




//[Callbacks]

//included for documentation
//room.onLoad()
//room.update([dt])


room.onClick = function()
{room.objects["new_text37"].text = "onClick worked";}
room.onMouseUp = function()
{room.objects["new_text38"].text = "onMouseUp worked";}
room.onMouseDown = function()
{room.objects["new_text39"].text = "onMouseDown worked";}
room.onMouseMove = function()
{room.objects["new_text40"].text = "onMouseMove worked";}
room.onMouseDrag = function()
{room.objects["new_text41"].text = "onMouseDrag worked";}

room.onKeyUp = function(event) 
{
    if (event.keyCode == 'P')
    {
		room.objects["new_text42"].text = "onKeyUp worked";
    }
}
room.onKeyDown = function(event) 
{
    if (event.keyCode == 'P')
    {
		room.objects["new_text43"].text = "onKeyDown worked";
    }
}

//collision stuff
room.onCollision = function(object, other) //not sure how this works?
{
	if (object1.js_id == "collisionA")
    {
	room.objects["new_text44"].text = "onCollision worked";
	}
}
room.onCollisionEnter = function(object1, object2)
{
	if (object1.js_id == "collisionA")
    {
	room.objects["new_text45"].text = "onCollisionEnter worked";
	}
}
room.onCollisionExit = function(object1, object2)
{
	if (object1.js_id == "collisionA")
    {
	room.objects["new_text46"].text = "onCollisionExit worked";
	}
}


room.onLoad = function() {

	for (var i = 0; i<60; ++i) 
	{
		var textid = "new_text"+i;
		room.createObject("Text", {js_id:textid});
		room.objects[textid].pos = Vector(5+i,5+i,0);
		room.objects[textid].fwd = Vector(-1,0,0);
		room.objects[textid].text = "This is new text with js_id: " + room.objects[textid].js_id;
		room.objects[textid].scale = Vector(5,5,5);
		room.objects[textid].col = Vector(.5,1,.5);
    }
	

//creating and deleteing assets and objects
room.loadNewAsset("Object",{id:"testassetloaded",src:"Main.dae",tex0:"TestImage.png"});
room.createObject("Object",{id:"cube", pos: Vector(2, 2, 0)});
room.removeObject("deleteME");

room.walk_speed = 1;
room.run_speed = 11;
room.jump_velocity = 100;
room.gravity = -1;
	
}








room.update = function(msec) 
{

//for collision testing
room.objects["collisionA"].pos.x = UpdateingValue;

//moving text objects
	for (var i = 0; i<60; ++i) 
	{
		var textid = "new_text"+i;
		room.objects[textid].pos.x = player.pos.x + (i*0.4) + 4;
		room.objects[textid].pos.y = player.pos.y+i + 1;
		room.objects[textid].pos.z = player.pos.z;
	}

	
	
	// Returns the object associated with the js_id passed in as an argument.
var TestgetObjectById = room.getObjectById("Link_open_close_test");

//----------------------------------------------------------
//checking special functions

 room.objects["new_text0"].text = "player.pos = " + player.pos;
 room.objects["new_text1"].text = "player.eye_pos = " + player.eye_pos;
 room.objects["new_text2"].text = "player.cursor_pos = " + player.cursor_pos;
 room.objects["new_text3"].text = "player.cursor_xdir = " + player.cursor_xdir;
 room.objects["new_text4"].text = "player.cursor_ydir = " + player.cursor_ydir;
 room.objects["new_text5"].text = "player.cursor_zdir = " + player.cursor_zdir;
 room.objects["new_text6"].text = "player.head_pos = " + player.head_pos;
 room.objects["new_text7"].text = "player.view_dir = " + player.view_dir;
 room.objects["new_text8"].text = "player.dir = " + player.dir;
 room.objects["new_text9"].text = "player.userid = " + player.userid;
room.objects["new_text10"].text = "player.url = " + player.url;
room.objects["new_text11"].text = "player.hmd_enabled = " + player.hmd_enabled;
room.objects["new_text12"].text = "player.cursor_active = " + player.cursor_active;
room.objects["new_text13"].text = "player.cursor_object = " + player.cursor_object;
room.objects["new_text14"].text = "player.lookat_object = " + player.lookat_object;
room.objects["new_text15"].text = "player.lookat_pos = " + player.lookat_pos;
room.objects["new_text16"].text = "player.lookat_xdir = " + player.lookat_xdir;
room.objects["new_text17"].text = "player.lookat_ydir = " + player.lookat_ydir;
room.objects["new_text18"].text = "player.lookat_zdir = " + player.lookat_zdir;

room.objects["new_text19"].text = "player.hand0_active = " + player.hand0_active;
room.objects["new_text20"].text = "player.hand1_active = " + player.hand1_active;
room.objects["new_text21"].text = "player.hand0_xdir = " + player.hand0_xdir;
room.objects["new_text22"].text = "player.hand0_ydir = " + player.hand0_ydir;
room.objects["new_text23"].text = "player.hand0_zdir = " + player.hand0_zdir;
room.objects["new_text24"].text = "player.hand0_pos = " + player.hand0_pos;
room.objects["new_text25"].text = "player.hand0_p0 = " + player.hand0_p0;
room.objects["new_text26"].text = "player.hand0_p1 = " + player.hand0_p1;
room.objects["new_text27"].text = "player.hand0_p2 = " + player.hand0_p2;
room.objects["new_text28"].text = "player.hand0_p3 = " + player.hand0_p3;
room.objects["new_text29"].text = "player.hand0_p4 = " + player.hand0_p4;




room.objects["new_text30"].text = "player.hand0_trackpad = " + player.hand0_trackpad;
room.objects["new_text31"].text = "player.hand1_trackpad = " + player.hand1_trackpad;


room.objects["new_text32"].text = "room.walk_speed = " + room.walk_speed;
room.objects["new_text33"].text = "room.run_speed = " + room.run_speed;
room.objects["new_text34"].text = "room.jump_velocity = " + room.jump_velocity;
room.objects["new_text35"].text = "room.gravity = " + room.gravity;
room.objects["new_text36"].text = "room.url = " + room.url;


//reserved for callback stuff
//room.objects["new_text37"].text = " = " + ;
//room.objects["new_text38"].text = " = " + ;
//room.objects["new_text39"].text = " = " + ;
//room.objects["new_text40"].text = " = " + ;
//room.objects["new_text41"].text = " = " + ;
//room.objects["new_text42"].text = " = " + ;
//room.objects["new_text43"].text = " = " + ;
//room.objects["new_text44"].text = " = " + ;
//room.objects["new_text45"].text = " = " + ;
//room.objects["new_text46"].text = " = " + ;

room.objects["new_text47"].text = "getObjectById = " + TestgetObjectById;


room.objects["new_text48"].text = "player.hand1_xdir = " + player.hand1_xdir;
room.objects["new_text49"].text = "player.hand1_ydir = " + player.hand1_ydir;
room.objects["new_text50"].text = "player.hand1_zdir = " + player.hand1_zdir;
room.objects["new_text51"].text = "player.hand1_pos = " + player.hand1_pos;
room.objects["new_text52"].text = "player.hand1_p0 = " + player.hand1_p0;
room.objects["new_text53"].text = "player.hand1_p1 = " + player.hand1_p1;
room.objects["new_text54"].text = "player.hand1_p2 = " + player.hand1_p2;
room.objects["new_text55"].text = "player.hand1_p3 = " + player.hand1_p3;
room.objects["new_text56"].text = "player.hand1_p4 = " + player.hand1_p4;

room.objects["new_text57"].text = "vector distance = " + distance(room.objects["collisionA"].pos, room.objects["collisionB"].pos);
room.objects["new_text58"].text = "vector equal = " + equals(room.objects["collisionA"].pos, room.objects["collisionB"].pos);
room.objects["new_text59"].text = "vector test = " + normalized(cross(translate(room.objects["collisionA"].pos, room.objects["collisionB"].pos), room.objects["collisionB"].pos));
	
	
	
//vector function tests
	
//distance(room.objects["collisionA"].pos, room.objects["collisionB"].pos)
//equals(room.objects["collisionA"].pos, room.objects["collisionB"].pos)
//normalized(cross(translate(room.objects["collisionA"].pos, room.objects["collisionB"].pos), room.objects["collisionB"].pos))
//
//translate(v1, v2)
//cross(v1, v2)
//normalized(v)
//distance(p1, p2)
//equals(v1, v2)
//Vector(x, y, z)
//scalarMultiply(v1, n or v2)







//playerstuff

//var player_pos = player.pos;
//var player_eyepos = player.eye_pos;
//var player_cursorpos = player.cursor_pos;
//var player_cursor_xdir = player.cursor_xdir;
//var player_cursor_ydir = player.cursor_ydir;
//var player_cursor_zdir = player.cursor_zdir;
//var player_head_pos = player.head_pos;
//var player_view_dir = player.view_dir;
//var player_dir = player.dir;
//var player_userid = player.userid;
//var player_url = player.url;
//var player_hmd_enabled = player.hmd_enabled;
//var player_cursor_active = player.cursor_active;
//var player_cursor_object = player.cursor_object;
//var player_lookat_object = player.lookat_object;
//var player_lookat_pos = player.lookat_pos;
//var player_lookat_xdir = player.lookat_xdir;
//var player_lookat_ydir = player.lookat_ydir;
//var player_lookat_zdir = player.lookat_zdir;
//var player_hand0_active = player.hand0_active;	
//var player_hand1_active = player.hand1_active;
//var player_handX_xdir = player.handX_xdir;
//var player_handX_ydir = player.handX_ydir;
//var player_handX_zdir = player.handX_zdir;
//var player_handX_pos = player.handX_pos;
//var player_handX_p0 = player.handX_p0;
//var player_handX_p1 = player.handX_p1;
//var player_handX_p2 = player.handX_p2;
//var player_handX_p3 = player.handX_p3;
//var player_handX_p4 = player.handX_p4;
//var player_hand0_trackpad = player.hand0_trackpad;
//var player_hand1_trackpad = player.hand1_trackpad;
//player.pos
//player.eye_pos
//player.cursor_pos
//player.cursor_xdir
//player.cursor_ydir
//player.cursor_zdir
//player.head_pos
//player.view_dir
//player.dir
//player.userid
//player.url
//player.hmd_enabled
//player.cursor_active
//player.cursor_object
//player.lookat_object
//player.lookat_pos
//player.lookat_xdir
//player.lookat_ydir
//player.lookat_zdir
//player.hand0_active
//player.hand1_active
//player.handX_xdir
//player.handX_ydir
//player.handX_zdir
//player.handX_pos
//player.handX_p0
//player.handX_p1
//player.handX_p2
//player.handX_p3
//player.handX_p4
//player.hand0_trackpad
//player.hand1_trackpad

//room.walk_speed
//room.run_speed
//room.jump_velocity
//room.gravity 
//room.url
//room.playSound("sound_funcs");
//room.pauseSound("sound_funcs");
//room.stopSound("sound_funcs");
//room.seekSound("sound_funcs", pos_in_seconds);
//room.closeLink("Link_open_close_test");
//room.openLink("Link_open_close_test");




//figure this out, from weaponloading?
//room.addCookie(name,value) - Adds a cookie with a name and set value. The value will be converted into a string.
//room.cookies - A dictionary that stores persistent states between sessions. To add a cookie, all you need to do is use the addCookie function.
//// Track number of times a user has been to a room.
//  if (typeof room.cookies['sessions'] == 'undefined')
//  {
//    room.addCookie('sessions', 0);
//  }
////Add 1 to the sessions cookie.
//  room.cookies['sessions'] +=1;






//sound
if(boolswitch%4 == 0)
{
room.playSound("sound_funcs");
}
if(boolswitch%4 == 1)
{
room.pauseSound("sound_funcs");
}
if(boolswitch%4 == 2)
{
room.seekSound("sound_funcs", 0.01);
}
if(boolswitch%4 == 3)
{
room.stopSound("sound_funcs");
}


//links
if(boolswitch%2 == 0)
{
room.openLink("Link_open_close_test");
}
if(boolswitch%2 == 1)
{
room.closeLink("Link_open_close_test");
}



//-------------------------------------------------
//object attributes

//boolswitch setup
if(boolswitchupdate < 100)
{boolswitchupdate++;}
else
{
boolswitch++;
boolswitchupdate = 0;
}

//updateingvalue

UpdateingValueupdate++;
UpdateingValue = Math.abs(Math.sin(UpdateingValueupdate / 314)) * 10;




//"Text1"
//"Paragraph1"
//"Link1"
//"Image1"
//"Image3D1"
//"Sound1"
//"Video1"
//"Object1"
//"Ghost1"
//"Particle1"
//"Light1"



//Text
//-----------------------------------------------------------------------
room.objects["Text1"].pos = Vector(UpdateingValue, UpdateingValue + 2, UpdateingValue + 0);
room.objects["Text1"].fwd = scalarMultiply(player.view_dir, -1);
room.objects["Text1"].col = Vector(UpdateingValue, UpdateingValue, UpdateingValue);
room.objects["Text1"].scale = scalarMultiply(Vector(UpdateingValue, UpdateingValue, UpdateingValue),0.1);

//add changing text
room.objects["Text1"].text = "example = " + UpdateingValue;

if(boolswitch%2 == 0)
{
room.objects["Text1"].locked = true;
room.objects["Text1"].lighting = true;
}
else
{
room.objects["Text1"].locked = false;
room.objects["Text1"].lighting = false;
}



//Paragraph
//-----------------------------------------------------------------------
room.objects["Paragraph1"].pos = Vector(UpdateingValue, UpdateingValue + 2, UpdateingValue + 2);
room.objects["Paragraph1"].fwd = scalarMultiply(player.view_dir, -1);
room.objects["Paragraph1"].col = Vector(UpdateingValue, UpdateingValue, UpdateingValue);
room.objects["Paragraph1"].scale = scalarMultiply(Vector(UpdateingValue, UpdateingValue, UpdateingValue),0.1);
room.objects["Paragraph1"].text_col = Vector(UpdateingValue, UpdateingValue, UpdateingValue);
room.objects["Paragraph1"].back_col = Vector(UpdateingValue, UpdateingValue, UpdateingValue);

room.objects["Paragraph1"].font_size = UpdateingValue;
room.objects["Paragraph1"].back_alpha = UpdateingValue;

if(boolswitch%2 == 0)
{
room.objects["Paragraph1"].locked = true;
room.objects["Paragraph1"].lighting = true;
}
else
{
room.objects["Paragraph1"].locked = false;
room.objects["Paragraph1"].lighting = false;
}



//Link
//-----------------------------------------------------------------------

room.objects["Link1"].thumb_id = "testimage";
room.objects["Link1"].url = "test.html";
room.objects["Link1"].title = "testtitle";

room.objects["Link1"].pos = Vector(UpdateingValue, UpdateingValue + 2, UpdateingValue + 4);
room.objects["Link1"].fwd = scalarMultiply(player.view_dir, -1);
room.objects["Link1"].col = Vector(UpdateingValue, UpdateingValue, UpdateingValue);
room.objects["Link1"].scale = scalarMultiply(Vector(UpdateingValue, UpdateingValue, UpdateingValue),0.1);



if(boolswitch%3 == 0)
{
room.objects["Link1"].draw_glow = true;
room.objects["Link1"].draw_text = true;
//room.objects["Link1"].auto_load = true;
//room.objects["Link1"].swallow = true;
room.objects["Link1"].mirror = false;
room.objects["Link1"].open = true;
}
if(boolswitch%3 == 1)
{
room.objects["Link1"].mirror = true;	
}

if(boolswitch%3 == 2)
{
room.objects["Link1"].draw_glow = false;
room.objects["Link1"].draw_text = false;
//room.objects["Link1"].auto_load = false;
//room.objects["Link1"].swallow = false;
room.objects["Link1"].mirror = false;
room.objects["Link1"].open = false;
}



//Image
//-----------------------------------------------------------------------
room.objects["Image1"].id = "testimage";
             
room.objects["Image1"].pos = Vector(UpdateingValue, UpdateingValue + 2, UpdateingValue + 6);
room.objects["Image1"].fwd = scalarMultiply(player.view_dir, -1);
room.objects["Image1"].col = Vector(UpdateingValue, UpdateingValue, UpdateingValue);
room.objects["Image1"].scale = scalarMultiply(Vector(UpdateingValue, UpdateingValue, UpdateingValue),0.1);

if(boolswitch%2 == 0)
{
room.objects["Image1"].locked = true;
room.objects["Image1"].lighting = true;
}
else
{
room.objects["Image1"].locked = false;
room.objects["Image1"].lighting = false;
}





//Image3D
//-----------------------------------------------------------------------
room.objects["Image3D1"].left_id = "testimageleft";
room.objects["Image3D1"].right_id = "testimage";

room.objects["Image3D1"].pos = Vector(UpdateingValue, UpdateingValue + 2, UpdateingValue + 8);
room.objects["Image3D1"].fwd = scalarMultiply(player.view_dir, -1);
room.objects["Image3D1"].col = Vector(UpdateingValue, UpdateingValue, UpdateingValue);
room.objects["Image3D1"].scale = scalarMultiply(Vector(UpdateingValue, UpdateingValue, UpdateingValue),0.1);

if(boolswitch%2 == 0)
{
room.objects["Image3D1"].locked = true;
room.objects["Image3D1"].lighting = true;
}
else
{
room.objects["Image3D1"].locked = false;
room.objects["Image3D1"].lighting = false;
}

//room.objects[].stereo_split = horiz_left_right, horiz_right_left, vert_top_bottom, vert_bottom_top

if(boolswitch%4 == 0)
{
room.objects["Image3D1"].stereo_split = "horiz_left_right";
}
if(boolswitch%4 == 1)
{
room.objects["Image3D1"].stereo_split = "horiz_right_left";
}
if(boolswitch%4 == 2)
{
room.objects["Image3D1"].stereo_split = "vert_top_bottom";
}
if(boolswitch%4 == 3)
{
room.objects["Image3D1"].stereo_split = "vert_bottom_top";
}



//Sound
//-----------------------------------------------------------------------
room.objects["Sound1"].id = "3d_sound";


if(boolswitch%2 == 0)
{
room.objects["Sound1"].loop = true;
room.objects["Sound1"].play_once = true;
}
else
{
room.objects["Sound1"].loop = false;
room.objects["Sound1"].play_once = false;
}





//room.objects["Sound1"].rect (default "0 0 0 0")
room.objects["Sound1"].pos = Vector(UpdateingValue, UpdateingValue + 2, UpdateingValue + 10);

room.objects["Sound1"].dist = UpdateingValue;
room.objects["Sound1"].gain = UpdateingValue;
room.objects["Sound1"].pitch = UpdateingValue;



//Video
//-----------------------------------------------------------------------
room.objects["Video1"].id = "vid_id";
room.objects["Video1"].thumb_id = "testimage";

if(boolswitch%2 == 0)
{
room.objects["Video1"].locked = true;
room.objects["Video1"].lighting = true;
}
else
{
room.objects["Video1"].locked = false;
room.objects["Video1"].lighting = false;
}

room.objects["Video1"].pos = Vector(UpdateingValue, UpdateingValue + 2, UpdateingValue + 12);
room.objects["Video1"].fwd = scalarMultiply(player.view_dir, -1);
room.objects["Video1"].col = Vector(UpdateingValue, UpdateingValue, UpdateingValue);
room.objects["Video1"].scale = scalarMultiply(Vector(UpdateingValue, UpdateingValue, UpdateingValue),0.1);




//Object
//-----------------------------------------------------------------------
room.objects["Object1"].id = "Main";
room.objects["Object1"].collision_id = "Main";
            
//swap these
//room.objects["Object1"].video_id
//room.objects["Object1"].image_id
//room.objects["Object1"].shader_id
//room.objects["Object1"].websurface_id
//room.objects["Object1"].thumb_id
//room.objects["Object1"].anim_id
//room.objects["Object1"].teleport_id
//room.objects["Object1"].cubemap_radiance_id
//room.objects["Object1"].cubemap_irradiance_id





if(boolswitch%9 == 0)
{
room.objects["Object1"].video_id = "vid_id";
room.objects["Object1"].image_id = null;
room.objects["Object1"].shader_id = null;
room.objects["Object1"].websurface_id = null;
room.objects["Object1"].thumb_id = null;
room.objects["Object1"].anim_id = null;
room.objects["Object1"].teleport_id = null;

room.objects["Object1"].cubemap_radiance_id = null;
room.objects["Object1"].cubemap_irradiance_id = null;
}

if(boolswitch%9 == 1)
{
room.objects["Object1"].video_id = null;
room.objects["Object1"].image_id = "testimage";
room.objects["Object1"].shader_id = null;
room.objects["Object1"].websurface_id = null;
room.objects["Object1"].thumb_id = null;
room.objects["Object1"].anim_id = null;
room.objects["Object1"].teleport_id = null;

room.objects["Object1"].cubemap_radiance_id = null;
room.objects["Object1"].cubemap_irradiance_id = null;
}

if(boolswitch%9 == 2)
{
room.objects["Object1"].video_id = null;
room.objects["Object1"].image_id = null;
room.objects["Object1"].shader_id = "room_shader";
room.objects["Object1"].websurface_id = null;
room.objects["Object1"].thumb_id = null;
room.objects["Object1"].anim_id = null;
room.objects["Object1"].teleport_id = null;

room.objects["Object1"].cubemap_radiance_id = null;
room.objects["Object1"].cubemap_irradiance_id = null;
}

if(boolswitch%9 == 3)
{
room.objects["Object1"].video_id = null;
room.objects["Object1"].image_id = null;
room.objects["Object1"].shader_id = null;
room.objects["Object1"].websurface_id = "web1";
room.objects["Object1"].thumb_id = null;
room.objects["Object1"].anim_id = null;
room.objects["Object1"].teleport_id = null;

room.objects["Object1"].cubemap_radiance_id = null;
room.objects["Object1"].cubemap_irradiance_id = null;
}

if(boolswitch%9 == 4)
{
room.objects["Object1"].video_id = null;
room.objects["Object1"].image_id = null;
room.objects["Object1"].shader_id = null;
room.objects["Object1"].websurface_id = null;
room.objects["Object1"].thumb_id = "testimage";
room.objects["Object1"].anim_id = null;
room.objects["Object1"].teleport_id = null;

room.objects["Object1"].cubemap_radiance_id = null;
room.objects["Object1"].cubemap_irradiance_id = null;
}

if(boolswitch%9 == 5)
{
room.objects["Object1"].video_id = null;
room.objects["Object1"].image_id = null;
room.objects["Object1"].shader_id = null;
room.objects["Object1"].websurface_id = null;
room.objects["Object1"].thumb_id = null;
room.objects["Object1"].anim_id = null; //add FBX to test this with
room.objects["Object1"].teleport_id = null;

room.objects["Object1"].cubemap_radiance_id = null;
room.objects["Object1"].cubemap_irradiance_id = null;
}

if(boolswitch%9 == 6)
{
room.objects["Object1"].video_id = null;
room.objects["Object1"].image_id = null;
room.objects["Object1"].shader_id = null;
room.objects["Object1"].websurface_id = null;
room.objects["Object1"].thumb_id = null;
room.objects["Object1"].anim_id = null;
room.objects["Object1"].teleport_id = "customplane"; //add large plane to swap too

room.objects["Object1"].cubemap_radiance_id = null;
room.objects["Object1"].cubemap_irradiance_id = null;
}

if(boolswitch%9 == 7)
{
room.objects["Object1"].video_id = null;
room.objects["Object1"].image_id = null;
room.objects["Object1"].shader_id = null;
room.objects["Object1"].websurface_id = null;
room.objects["Object1"].thumb_id = null;
room.objects["Object1"].anim_id = null;
room.objects["Object1"].teleport_id = null;

room.objects["Object1"].cubemap_radiance_id = "Annotated_skybox_radiance2";
room.objects["Object1"].cubemap_irradiance_id = "Annotated_skybox_Irradiance2";
}

if(boolswitch%9 == 8)
{
room.objects["Object1"].video_id = null;
room.objects["Object1"].image_id = null;
room.objects["Object1"].shader_id = null;
room.objects["Object1"].websurface_id = null;
room.objects["Object1"].thumb_id = null;
room.objects["Object1"].anim_id = null;
room.objects["Object1"].teleport_id = null;

room.objects["Object1"].cubemap_radiance_id = null;
room.objects["Object1"].cubemap_irradiance_id = null;
}



   
             
room.objects["Object1"].pos = Vector(UpdateingValue, UpdateingValue + 2, UpdateingValue + 14);
room.objects["Object1"].fwd = scalarMultiply(player.view_dir, -1);
room.objects["Object1"].col = Vector(UpdateingValue, UpdateingValue, UpdateingValue);
room.objects["Object1"].scale = scalarMultiply(Vector(UpdateingValue, UpdateingValue, UpdateingValue),0.1);
room.objects["Object1"].rotate_axis = Vector(UpdateingValue, UpdateingValue, UpdateingValue);
             
room.objects["Object1"].collision_radius = UpdateingValue;
room.objects["Object1"].rotate_deg_per_sec = UpdateingValue;
room.objects["Object1"].anim_speed = UpdateingValue;

if(boolswitch%3 == 0)
{
room.objects["Object1"].cull_face = "none";
}
if(boolswitch%3 == 1)
{
room.objects["Object1"].cull_face = "front";
}
if(boolswitch%3 == 2)
{
room.objects["Object1"].cull_face = "back";
}


if(boolswitch%3 == 0)
{
room.objects["Object1"].lighting = true;
room.objects["Object1"].loop = true;

room.objects["Object1"].collision_static = true;
room.objects["Object1"].collision_trigger = true;
room.objects["Object1"].locked = true;
}
if(boolswitch%3 == 1)
{
	room.objects["Object1"].visible = false;
}

if(boolswitch%3 == 2)
{
room.objects["Object1"].lighting = false;
room.objects["Object1"].loop = false;
room.objects["Object1"].visible = true;
room.objects["Object1"].collision_static = false;
room.objects["Object1"].collision_trigger = false;
room.objects["Object1"].locked = false;
}








//Ghost
//-----------------------------------------------------------------------
//room.objects["Ghost1"].id
room.objects["Ghost1"].head_id = "rikku_head"; //broken
room.objects["Ghost1"].body_id = "rikku_body"; //broken
//room.objects["Ghost1"].shader_id
             
room.objects["Ghost1"].col = Vector(UpdateingValue, UpdateingValue, UpdateingValue); //does nothing
room.objects["Ghost1"].scale = scalarMultiply(Vector(UpdateingValue, UpdateingValue, UpdateingValue),0.1);
room.objects["Ghost1"].head_pos = Vector(UpdateingValue, UpdateingValue, UpdateingValue); //does nothing
room.objects["Ghost1"].userid_pos = Vector(UpdateingValue, UpdateingValue, UpdateingValue); //does nothing


 //does nothing
if(boolswitch%3 == 0)
{
room.objects["Ghost1"].cull_face = "none";
}
if(boolswitch%3 == 1)
{
room.objects["Ghost1"].cull_face = "front";
}
if(boolswitch%3 == 2)
{
room.objects["Ghost1"].cull_face = "back";
}




if(boolswitch%2 == 0)
{
room.objects["Ghost1"].loop = true;
room.objects["Ghost1"].auto_play = true;
room.objects["Ghost1"].lighting = true;
room.objects["Ghost1"].locked = true;
}
else
{
room.objects["Ghost1"].loop = false;
room.objects["Ghost1"].auto_play = false;
room.objects["Ghost1"].lighting = false;
room.objects["Ghost1"].locked = false;
}





//Particle
//-----------------------------------------------------------------------
//swap these?
room.objects["Particle1"].image_id = "testimage";
//room.objects["Particle1"].id = "Main";
            
room.objects["Particle1"].rate = UpdateingValue * 5;
room.objects["Particle1"].count = UpdateingValue * 10;
room.objects["Particle1"].duration = UpdateingValue;
room.objects["Particle1"].fade_in = UpdateingValue * 0.1;
room.objects["Particle1"].fade_out = UpdateingValue * 0.1;
             
room.objects["Particle1"].pos = Vector(UpdateingValue, UpdateingValue + 2, UpdateingValue + 16);
room.objects["Particle1"].vel = Vector(UpdateingValue, UpdateingValue, UpdateingValue);
room.objects["Particle1"].accel = Vector(UpdateingValue, UpdateingValue, UpdateingValue);
room.objects["Particle1"].col = Vector(UpdateingValue, UpdateingValue, UpdateingValue);
room.objects["Particle1"].scale = scalarMultiply(Vector(UpdateingValue, UpdateingValue, UpdateingValue),0.2);
room.objects["Particle1"].rand_pos = Vector(UpdateingValue, UpdateingValue + 4, UpdateingValue + 18);
room.objects["Particle1"].rand_vel = Vector(UpdateingValue, UpdateingValue, UpdateingValue);
room.objects["Particle1"].rand_accel = Vector(UpdateingValue, UpdateingValue, UpdateingValue);
room.objects["Particle1"].rand_col = Vector(UpdateingValue, UpdateingValue, UpdateingValue);
room.objects["Particle1"].rand_scale = scalarMultiply(Vector(UpdateingValue, UpdateingValue, UpdateingValue),0.1);

if(boolswitch%2 == 0)
{
room.objects["Particle1"].locked = true;
room.objects["Particle1"].lighting = true;
}
else
{
room.objects["Particle1"].locked = false;
room.objects["Particle1"].lighting = false;
}



//Light
//-----------------------------------------------------------------------
room.objects["Light1"].pos = Vector(UpdateingValue, UpdateingValue + 4, UpdateingValue + 8);
room.objects["Light1"].light_intensity = UpdateingValue * 10;
room.objects["Light1"].light_cone_angle = UpdateingValue;
room.objects["Light1"].light_cone_exponent = UpdateingValue;
room.objects["Light1"].light_range = UpdateingValue * 10;

}
