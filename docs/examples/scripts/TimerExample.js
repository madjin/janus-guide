room.onLoad = function() {


//Creating Text outputs
for (var i=0; i<4; ++i) {

	var textid = "new_text"+i;

	room.createObject("Text", {js_id:textid});

	room.objects[textid].pos = Vector(5+i,1+i,0);
        room.objects[textid].fwd = Vector(-1,0,0);
        room.objects[textid].text = "This is new text with js_id: " + room.objects[textid].js_id;
        room.objects[textid].scale = Vector(5,5,5);
        room.objects[textid].col = Vector(0,0,0);
        }

	player.pos.x = 0;
	player.pos.y = -1.6;
	player.pos.z = 0;
}




var global_time_passed = 0;
var msec_passed = 0;
var updateticks = 0;


room.update = function(msec) {

	global_time_passed += msec/1000; 
	msec_passed += msec;
	
	//Do something every N milliseconds
	if(msec_passed > 1000)
	{
		updateticks++; //the var that updates
		msec_passed = 0; //resets the millsecond updater, resetting the timer.
	}
	
	//33ms = 30fps
	//22ms = 45fps
	//11ms = 90fps
	
	
	room.objects["new_text0"].text = "Seconds passed = " + Math.round(global_time_passed);
	room.objects["new_text1"].text = "milliseconds (aka frametime) = " + msec;
	room.objects["new_text2"].text = "milliseconds_passed = " + msec_passed;
	room.objects["new_text3"].text = "updateticks = " + updateticks;

}