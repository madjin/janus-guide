var vidcurrenttime = 0;



room.onLoad = function() {

for (var i=0; i<1; ++i) {

	var textid = "new_text"+i;

	room.createObject("Text", {js_id:textid});

	room.objects[textid].pos = Vector(5+i,1+i,0);
        room.objects[textid].fwd = Vector(-1,0,0);
        room.objects[textid].text = "This is new text with js_id: " + room.objects[textid].js_id;
        room.objects[textid].scale = Vector(5,5,5);
        room.objects[textid].col = Vector(.5,1,.5);
        }

	player.pos.x = 0;
	player.pos.y = -1.6;
	player.pos.z = 0;
}

room.onClick = function()
{
	room.seekVideo("main4kvid", 3);
}

room.update = function(msec) 
{
	vidcurrenttime = room.objects["mainvideo"].current_time;
	room.objects["new_text0"].text = "video time = " + vidcurrenttime;
}












