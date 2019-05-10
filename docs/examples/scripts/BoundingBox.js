 room.update = function(msec) 
{	
	//I would not use JS based bounding boxed for anything more complcated then circle or square designs
	//Mostly useful for banning players from an area until some event happens

	//circleBounds
	var CircleOrigin = Vector(0,0,0);
	var CircleRadius = 10.0;
	
	var playerdistCircle = distance(player.pos, CircleOrigin);
	if(playerdistCircle > CircleRadius) //set distance of sphere bounds
	{
		player.pos.x -= player.pos.x/100;
		player.pos.y -= player.pos.y/100;
		player.pos.z -= player.pos.z/100;
	}
	
	
	//Square Bounds
	var MaxBound_X= 10;
	var MaxBound_Y= 1.7; //verticle
	var MaxBound_Z= 4;
	//X
	if(player.pos.x > MaxBound_X)
	{
		player.pos.x -= 0.1;
	}
	if(player.pos.x < -MaxBound_X)
	{
		player.pos.x += 0.1;
	}
	//Y
	if(player.pos.y > MaxBound_Y)
	{
		player.pos.y -= 0.1;
	}
	if(player.pos.y < -MaxBound_Y)
	{
		player.pos.y += 0.1;
	}
	//Z
	if(player.pos.z > MaxBound_Z)
	{
		player.pos.z -= 0.1;
	}
	if(player.pos.z < -MaxBound_Z)
	{
		player.pos.z += 0.1;
	}

}