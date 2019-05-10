var timer = 1.0;

room.update = function(dt)
{
	timer = timer - dt * 0.001;
	if (timer <= 0)
	{
		timer = 1.0;
		var prec = room.objects['js_snow'];
		if (prec)
		{
			prec.pos = Vector(player.pos.x - prec.rand_pos.x*0.5, player.pos.y + 6, player.pos.z - prec.rand_pos.z*0.5);
		}
		prec = room.objects['js_rain'];
		if (prec)
		{
			prec.pos = Vector(player.pos.x - prec.rand_pos.x*0.5, player.pos.y + 20*1.5, player.pos.z - prec.rand_pos.z*0.5);
		}
	}
}