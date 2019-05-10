var updateingvalue = 0;
room.update = function(p_dt)
{

//if stament is trigger when the player hovers over an object
	if(player.cursor_object == "examplecube")
	{
		
		//postions the popupbox to the object and scaling modifer that scales the box based on distance
		room.objects["popup"].pos.x = room.objects["examplecube"].pos.x;
		room.objects["popup"].pos.y = room.objects["examplecube"].pos.y;
		room.objects["popup"].pos.z = room.objects["examplecube"].pos.z;
		var playertopopup = distance(room.objects["popup"].pos, player.pos) / 2;

		//part of the scaleing function so the box can scale up over time
		if(updateingvalue < 50)
		{
			++updateingvalue;
		}
	}
	
	else
	{
		//descales the object when not looking at object
		updateingvalue = 0;
		playertopopup = 0;
	}
	
	//the actual scaling functions that use the scaling modifiers above
	//also autofaces the popup box
		room.objects["popup"].scale.x = updateingvalue/50 * playertopopup;
		room.objects["popup"].scale.y = updateingvalue/50 * playertopopup;
		room.objects["popup"].scale.z = updateingvalue/50 * playertopopup;
		room.objects["popup"].fwd = player.dir;
}

//