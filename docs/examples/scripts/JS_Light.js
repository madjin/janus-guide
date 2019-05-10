var global_update_val_I = 120;
var global_update_val_A = 0;
var global_update_val_E = 200;
var global_update_val_R = 40;





var global_time_passed = 0;


//debug text generator

room.onLoad = function() {


//set var i to 16 if useing extended debugging text
for (var i=0; i<4; ++i) {

	var textid = "new_text"+i;

	room.createObject("Text", {js_id:textid});

	room.objects[textid].pos = Vector(0,10+(i*3),10+(i*-2));
        room.objects[textid].fwd = Vector(0,0,-1);
        room.objects[textid].text = "This is new text with js_id: " + room.objects[textid].js_id;
        room.objects[textid].scale = Vector(30,30,30);
        room.objects[textid].col = Vector(1,0,0);
        }


}

//debug text generator end

var intensityswitch = 0;
var angleswitch = 0;
var exponentswitch = 0;
var rangeswitch = 0;

var intensityswitchneg = 0;
var angleswitchneg = 0;
var exponentswitchneg = 0;
var rangeswitchneg = 0;

room.onKeyUp = function(event) 
{
    // light intensity
    if (event.keyCode == 'U')
    {
		intensityswitch++;
    }
	
	// light angle
    if (event.keyCode == 'I')
    {
		angleswitch++;
    }
	
	// light exponent
    if (event.keyCode == 'O')
    {
		exponentswitch++;
    }
	
	// light range
    if (event.keyCode == 'P')
    {
		rangeswitch++;
    }
	
	//decrement
	
	    // light intensity
    if (event.keyCode == 'H')
    {
		intensityswitchneg++;
    }
	
	// light angle
    if (event.keyCode == 'J')
    {
		angleswitchneg++;
    }
	
	// light exponent
    if (event.keyCode == 'K')
    {
		exponentswitchneg++;
    }
	
	// light range
    if (event.keyCode == 'L')
    {
		rangeswitchneg++;
    }
	
	  if (event.keyCode == 'm')
    {
		global_update_val_R = 0;
    }
	
	
    
    
}






room.update = function(delta_time) {
	
	//attaches light to object
	room.objects["Light"].pos=room.objects["candle"].pos
	room.objects["Light"].xdir = room.objects["candle"].xdir;
	room.objects["Light"].ydir = room.objects["candle"].ydir;
	room.objects["Light"].zdir = room.objects["candle"].zdir;
	


//switch states control the light attributes

	if((intensityswitch % 2) == 1)
{
	global_update_val_I++;
	room.objects["Light"].light_intensity = (global_update_val_I / 3) ;
}



	if((angleswitch % 2) == 1)
{
	global_update_val_A++;
	room.objects["Light"].light_cone_angle = ( ((global_update_val_A / 10) % 100) * 0.01 );
}


	if((exponentswitch % 2) == 1)
{
	global_update_val_E++;
	room.objects["Light"].light_cone_exponent = ((global_update_val_E / 20) % 10);
}




	if((rangeswitch % 2) == 1)
{
	global_update_val_R++;
	room.objects["Light"].light_range = (global_update_val_R / 5);
}



//decrement

	if((intensityswitchneg % 2) == 1)
{
	global_update_val_I--;
	room.objects["Light"].light_intensity = (global_update_val_I / 3) ;
}



	if((angleswitchneg % 2) == 1)
{
	global_update_val_A--;
	room.objects["Light"].light_cone_angle = ( ((global_update_val_A / 10) % 100) * 0.01 );
}


	if((exponentswitchneg % 2) == 1)
{
	global_update_val_E--;
	room.objects["Light"].light_cone_exponent = ((global_update_val_E / 20) % 10) ;
}



	if((rangeswitchneg % 2) == 1)
{
	global_update_val_R--;
	room.objects["Light"].light_range = (global_update_val_R / 5);
}


//For debuging and general info about he lights and switchs

	var intensity = room.objects["Light"].light_intensity;
	var cone_angle = room.objects["Light"].light_cone_angle;
	var cone_exponent = room.objects["Light"].light_cone_exponent;
	var range = room.objects["Light"].light_range;
	
room.objects["new_text0"].text = "range = " + Math.round(range);
room.objects["new_text1"].text = "cone_exponent = " + Math.round(cone_exponent);
room.objects["new_text2"].text = "cone_angle = " + cone_angle;
room.objects["new_text3"].text = "intensity = " + Math.round(intensity);

/*
room.objects["new_text4"].text = "rangeswitch = " + rangeswitch % 2;
room.objects["new_text5"].text = "exponentswitch = " + exponentswitch % 2;
room.objects["new_text6"].text = "angleswitch  = " + angleswitch % 2;
room.objects["new_text7"].text = "intensityswitch = " + intensityswitch % 2;


room.objects["new_text8"].text = "rangeswitchneg = " + rangeswitchneg % 2;
room.objects["new_text9"].text = "exponentswitchneg = " + exponentswitchneg % 2;
room.objects["new_text10"].text = "angleswitchneg  = " + angleswitchneg % 2;
room.objects["new_text11"].text = "intensityswitchneg = " + intensityswitchneg % 2;

room.objects["new_text12"].text = "global_update_val_I = " + global_update_val_I;
room.objects["new_text13"].text = "global_update_val_A = " + global_update_val_A;
room.objects["new_text14"].text = "global_update_val_E = " + global_update_val_E;
room.objects["new_text15"].text = "global_update_val_R = " + global_update_val_R;
*/


	
//time stuff
	
        global_time_passed += delta_time;
	var secs_passed = global_time_passed * 0.001;





//END OF IMPORTANT PART


}