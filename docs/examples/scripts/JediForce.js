room.onLoad = function() {
	for (var i = 0; i<40; ++i) 
	{
		var thingid = "sphere"+i;
		
		//create spheres
		room.createObject("Object",{id: "sphere", js_id: thingid, collision_id: "sphere", pos:Vector(Math.random()*30, Math.random()*30, Math.random()*30), col:Vector(Math.random(), Math.random(), Math.random()), vel: Vector(0, 3, 0), scale: Vector(3, 3, 3), collision_static: false, collision_trigger: false });
	}	
}

room.onClick = function()
{
	

//reset ball positions on click
		for (var i = 0; i<40; ++i) 
	{
		var thingid = "sphere"+i;
room.objects[thingid].vel = Vector(0, 0, 0);
room.objects[thingid].pos=Vector(Math.random()*30, Math.random()*30, Math.random()*30);
room.objects[thingid].sync = true;

	}



}



var global_time_passed = 0;
var global_update_val = 0;
var lasttime = new Date().getTime();


var manualvel1_x =0;
var manualvel1_y =0;
var manualvel1_z =0;
                 
var manualvel2_x =0;
var manualvel2_y =0;
var manualvel2_z =0;

var manualvel_x = 0;
var manualvel_y = 0;
var manualvel_z = 0;

var elapsedtime_sec = 0;

room.update = function(msec) 
{
	//attachs cubes to hands
	room.objects["ViveRightHand"].pos = player.hand0_pos;
	room.objects["ViveLeftHand"].pos = player.hand1_pos;

	//timer stuff
	global_time_passed += msec;
	var dt = msec/1000.0; //input parameter is in milliseconds and not seconds unfortunately, so we create "dt"
	var now = new Date().getTime();
    var elapsedtime_ms = now - lasttime;
    elapsedtime_sec = elapsedtime_ms / 1000;
	
	
	//manual velocity calculation
	if(global_update_val < 1)
	{
		lasttime = now;
		
		manualvel1_x = room.objects["ViveRightHand"].pos.x;
		manualvel1_y = room.objects["ViveRightHand"].pos.y;
		manualvel1_z = room.objects["ViveRightHand"].pos.z;
		
		manualvel_x = manualvel1_x - manualvel2_x;
		manualvel_y = manualvel1_y - manualvel2_y;
		manualvel_z = manualvel1_z - manualvel2_z;
		
		
	}
	else{
		global_update_val=0;
	}
	manualvel2_x = room.objects["ViveRightHand"].pos.x;
	manualvel2_y = room.objects["ViveRightHand"].pos.y;
	manualvel2_z = room.objects["ViveRightHand"].pos.z;
	
	
	//if velocity of hands is over 2 meters per second, integrate the velocity into the spheres
	if(Math.abs(manualvel_x / elapsedtime_sec) > 2 || Math.abs(manualvel_y / elapsedtime_sec) > 2  || Math.abs(manualvel_z / elapsedtime_sec) > 2)
	{
		for (var i = 0; i<40; ++i) 
	{
		var thingid = "sphere"+i;
		room.objects[thingid].vel.x += manualvel_x * 140 * Math.min(Math.random(),0.5);
		room.objects[thingid].vel.y += manualvel_y * 140 * Math.min(Math.random(),0.5);
		room.objects[thingid].vel.z += manualvel_z * 140 * Math.min(Math.random(),0.5);
	}
	}
	
}
