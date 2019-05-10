room.update = function(msec) {

	var objectlookedat = player.cursor_object;
	
	if(objectlookedat == "gazeteleportlocaton1")
	{
		room.objects[objectlookedat].col.x -= 0.01;
		
		if(room.objects[objectlookedat].col.x < 0.5)
		{
			player.pos = room.objects["gazeteleportlocaton1"].pos;
			room.objects[objectlookedat].col.x = 1;
		}
	}
	
	if(objectlookedat == "gazeteleportlocaton2")
	{
		room.objects[objectlookedat].col.x -= 0.01;
		
		if(room.objects[objectlookedat].col.x < 0.5)
		{
			player.pos = room.objects["gazeteleportlocaton2"].pos;
			room.objects[objectlookedat].col.x = 1;
		}
	}
	
	if(objectlookedat == "gazeteleportlocaton3")
	{
		room.objects[objectlookedat].col.x -= 0.01;
		
		if(room.objects[objectlookedat].col.x < 0.5)
		{
			player.pos = room.objects["gazeteleportlocaton3"].pos;
			room.objects[objectlookedat].col.x = 1;
		}
	}
		
}

