	var updateingvalue = 0;

room.onLoad = function() {

	for (var i = 0; i<4; ++i) 
	{
		var textid = "new_text"+i;
		room.createObject("Text", {js_id:textid});
		room.objects[textid].pos = Vector(5+i,5+i,0);
		room.objects[textid].fwd = Vector(-1,0,0);
		room.objects[textid].text = "This is new text with js_id: " + room.objects[textid].js_id;
		room.objects[textid].scale = Vector(5,5,5);
		room.objects[textid].col = Vector(.5,1,.5);
    }
}

room.update = function(p_dt)
{

	for (var i = 0; i<4; ++i) 
	{
		var textid = "new_text"+i;
		room.objects[textid].pos.x = player.pos.x + (i*0.4) + 2;
		room.objects[textid].pos.y = player.pos.y+i*0.5 + 1;
		room.objects[textid].pos.z = player.pos.z;
	}

	var examplevalue = 1234568;

	++updateingvalue;
	
room.objects["new_text0"].text = "this is text # 0";
room.objects["new_text1"].text = "var as text --> "	+ examplevalue;
room.objects["new_text2"].text = "updateing var as text --> "	+ updateingvalue;
room.objects["new_text3"].text = "cursor pointer as text --> "	+ player.cursor_object;
 

}

