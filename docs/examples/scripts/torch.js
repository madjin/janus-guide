      

room.update = function(p_dt)
{
        room.objects["handlight"].xdir = scalarMultiply(player.hand0_xdir, -1);
        room.objects["handlight"].ydir = scalarMultiply(player.hand0_ydir, -1);
        room.objects["handlight"].zdir = scalarMultiply(player.hand0_zdir, -1);
		room.objects["handlight"].pos = player.hand0_pos;
		
		
		room.objects["headlight"].pos.x = player.pos.x;
		room.objects["headlight"].pos.y = player.pos.y + 1.6;
		room.objects["headlight"].pos.z = player.pos.z;
		room.objects["headlight"].fwd = player.view_dir;	
}