// see this website for details on player and hand  JS objects
//http://www.janusvr.com/guide/playerobject/index.html



room.onLoad = function() {

for (var i=0; i<6; ++i) {

	var textid = "new_text"+i;

	room.createObject("Text", {js_id:textid});

	room.objects[textid].pos = Vector(5+i*0.5,1+i*0.5,0);
        room.objects[textid].fwd = Vector(-1,0,0);
        room.objects[textid].text = "This is new text with js_id: " + room.objects[textid].js_id;
        room.objects[textid].scale = Vector(5,5,5);
        room.objects[textid].col = Vector(.5,1,.5);
        }


}

// everything above is to build the text objects for debuging purposes


//IMPORTANT PART
room.update = function(delta_time) {


	//Left and Right Hand rotation and postion tracking
	//only visible when useing positionally tracked VR controllers
	if(player.hand0_active)
	{
		room.objects["Rhand"].xdir = player.hand0_xdir;
		room.objects["Rhand"].ydir = player.hand0_ydir;
		room.objects["Rhand"].zdir = player.hand0_zdir;
		
		room.objects["Lhand"].xdir = player.hand1_xdir;
		room.objects["Lhand"].ydir = player.hand1_ydir;
		room.objects["Lhand"].zdir = player.hand1_zdir;
		
		room.objects["Rhand"].pos = player.hand0_pos;
		room.objects["Lhand"].pos = player.hand1_pos;
	}
	
	
	//tracks players pos and rotation
	room.objects["rot1"].fwd = player.view_dir;
	room.objects["rot1"].pos = player.pos;
	
	//Object tracks head rotation
	room.objects["rot2"].fwd = player.view_dir;
	
	//This translates the object based on the rotation vectors and offsets to account for player position
	room.objects["rot2"].pos.x = (room.objects["rot2"].zdir.x * 6) + player.pos.x;
	room.objects["rot2"].pos.y = (room.objects["rot2"].zdir.y * 6) + (player.pos.y + 1.6);
	room.objects["rot2"].pos.z = (room.objects["rot2"].zdir.z * 6) + player.pos.z;
	
	//END OF IMPORTANT PART
	
	//Debugging output to text
	room.objects["new_text0"].text = "fixed Obj xdir = " + room.objects["rot2"].zdir.x;
	room.objects["new_text1"].text = "fixed Obj ydir = " + room.objects["rot2"].zdir.y;
	room.objects["new_text2"].text = "fixed Obj zdir = " + room.objects["rot2"].zdir.z;
	
	room.objects["new_text3"].text = "tracked Obj pos.x = " + room.objects["rot2"].pos.x;
	room.objects["new_text4"].text = "tracked Obj pos.y = " + room.objects["rot2"].pos.x;
	room.objects["new_text5"].text = "tracked Obj pos.z = " + room.objects["rot2"].pos.x;
}