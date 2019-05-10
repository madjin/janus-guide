var activatedcounter = 0;

room.update = function(msec) 
{
	
	var objectlookedat = player.cursor_object;
	
	//Simple gaze setup involves checking what object your are seeing, the activating whatever you want if the object matches the JS_id
	//In this case, im jsut changing the cube color over time, and changing useing the color as a trigger if you stare long enough.
	if(objectlookedat == "ThingToLookAT")
	{
		room.objects[objectlookedat].col.x -= 0.01;
		room.objects[objectlookedat].col.z -= 0.01;
		
		room.objects["Textoutput"].text="Primeing " + Math.round(room.objects["ThingToLookAT"].col.x*100) + "%" ;
		
		if(room.objects[objectlookedat].col.x < 0.01)
		{
			room.objects["Textoutput"].text="Activated";
			room.objects[objectlookedat].col.x = 1;
			room.objects[objectlookedat].col.z = 1;
			
			activatedcounter++;
		}
	}
	else
	{
		room.objects["ThingToLookAT"].col.x = 1;
		room.objects["ThingToLookAT"].col.z = 1;
		room.objects["Textoutput"].text="Stare are cube to Activate";
	}
	
	room.objects["activatedcount"].text = "Number of activations = " + activatedcounter;
}
