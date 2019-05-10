
//shotgununiforms
var slide_distance = 0;
var global_update_val = 0;
var global_time_passed = 0;

var forparticlecount = 0;
var forparticlecountreset = 0;

var pumptrigger1 = 0;
var pumptrigger2 = 0;
//shotgununiforms end



room.onClick = function()
{
	
	if(!(player.hand1_active))
	{
		pumptrigger1 = 1;
		pumptrigger2 = 1;
	}
	
	//shotgun onclick stuff
	
	if(pumptrigger1 != 0 && pumptrigger2 != 0)
	{
    room.objects["Bullet"].accel.x = 0.0;
    room.objects["Bullet"].accel.y = -1.8;
    room.objects["Bullet"].accel.z = 0.0;

	var hand_distance = distance(room.objects["ViveRightHand"].pos, room.objects["ViveLeftHand"].pos);
	var hand_direction_zdir = normalized(Vector((room.objects["ViveLeftHand"].pos.x - room.objects["ViveRightHand"].pos.x),(room.objects["ViveLeftHand"].pos.y - room.objects["ViveRightHand"].pos.y),(room.objects["ViveLeftHand"].pos.z - room.objects["ViveRightHand"].pos.z))) ;
	var hand_direction_xdir = normalized(cross(hand_direction_zdir, Vector(0,1,0)));
	var hand_direction_ydir = normalized(cross(hand_direction_zdir, hand_direction_xdir));

	var velocity = 30.0;
    room.objects["Bullet"].vel.x = (hand_direction_zdir.x * velocity);
    room.objects["Bullet"].vel.y = (hand_direction_zdir.y * velocity);
    room.objects["Bullet"].vel.z = (hand_direction_zdir.z * velocity);

	room.objects["Bullet"].pos.x = (room.objects["Shotgun"].zdir.x*-1 * (0.7)) + room.objects["Shotgun"].pos.x;
	room.objects["Bullet"].pos.y = (room.objects["Shotgun"].zdir.y*-1 * (0.7)) + room.objects["Shotgun"].pos.y;
	room.objects["Bullet"].pos.z = (room.objects["Shotgun"].zdir.z*-1 * (0.7)) + room.objects["Shotgun"].pos.z;
	
	forparticlecount = 100;
	forparticlecountreset = 1;	
	room.objects["OmniLightfireball"].light_intensity = 300;

	room.objects["shotgunblastjs"].pos.x = (room.objects["Shotgun"].zdir.x*-1 * (0.7)) + room.objects["Shotgun"].pos.x;
	room.objects["shotgunblastjs"].pos.y = (room.objects["Shotgun"].zdir.y*-1 * (0.7)) + room.objects["Shotgun"].pos.y;
	room.objects["shotgunblastjs"].pos.z = (room.objects["Shotgun"].zdir.z*-1 * (0.7)) + room.objects["Shotgun"].pos.z;
	room.playSound("shotgunblastjs");
	pumptrigger1 = 0;
	pumptrigger2 = 0;
	}
	//end shotgunonclick
	
}




function update_frame(object)
{
	var zdir = normalized(object.vel);
	var xdir = normalized(cross(zdir, Vector(0,1,0)));
	var ydir = normalized(cross(zdir, xdir));

	object.xdir = scalarMultiply(xdir, -1);
	object.ydir = scalarMultiply(ydir, -1);
	object.zdir = scalarMultiply(zdir, -1);
}



room.update = function(msec) 
{
	
	if(player.hand1_active)
	{
	room.objects["ViveRightHand"].pos = player.hand1_pos;
	room.objects["ViveLeftHand"].pos = player.hand0_pos;
	}
	else
	{
		room.objects["ViveRightHand"].pos = translate(translate(scalarMultiply(player.view_dir, 0.2),player.head_pos),Vector(0, -0.15, 0));
		room.objects["ViveLeftHand"].pos =   translate(scalarMultiply(player.view_dir, 2),player.head_pos);
	}
	
	global_time_passed += msec;
	var dt = msec/1000.0; //input parameter is in milliseconds and not seconds unfortunately, so we create "dt"
	

	//handstuff
	var hand_direction_zdir = normalized(Vector((room.objects["ViveRightHand"].pos.x - room.objects["ViveLeftHand"].pos.x),(room.objects["ViveRightHand"].pos.y - room.objects["ViveLeftHand"].pos.y),(room.objects["ViveRightHand"].pos.z - room.objects["ViveLeftHand"].pos.z))) ;
	var hand_direction_xdir = normalized(cross(hand_direction_zdir, Vector(0,-1,0)));	
	var hand_direction_ydir = normalized(cross(hand_direction_zdir, hand_direction_xdir));
	var hand_distance = distance(room.objects["ViveRightHand"].pos, room.objects["ViveLeftHand"].pos);
	

		
		
		
		
		if(global_update_val < 25 && forparticlecountreset == 1)
		{
			global_update_val++;
		}	
		else 
		{	
			global_update_val = 0;
			forparticlecount = 0;
			forparticlecountreset = 0;
			room.objects["OmniLightfireball"].light_intensity = 0;
		
			room.objects["Bullet"].vel.x = 0;
			room.objects["Bullet"].vel.y = 0;
			room.objects["Bullet"].vel.z = 0;
			room.objects["Bullet"].pos.x = 0;
			room.objects["Bullet"].pos.y = -1000;
			room.objects["Bullet"].pos.z = 0;
			
			room.objects["Bullet"].accel.y = 0;
		}
		
		//moving shit around
		room.objects["OmniLightfireball"].pos = room.objects["Bullet"].pos;
		room.objects["Shotgun"].pos = room.objects["ViveRightHand"].pos;	
		
		room.objects["shotgunpumpjs"].pos = room.objects["ViveLeftHand"].pos;
		
		room.objects["Shotgun"].xdir = scalarMultiply(hand_direction_xdir, 1);
		room.objects["Shotgun"].ydir = scalarMultiply(hand_direction_ydir, 1);
		room.objects["Shotgun"].zdir = scalarMultiply(hand_direction_zdir, 1);
		
		room.objects["ShotgunSlide"].xdir = room.objects["Shotgun"].xdir;
		room.objects["ShotgunSlide"].ydir = room.objects["Shotgun"].ydir;
		room.objects["ShotgunSlide"].zdir = room.objects["Shotgun"].zdir;
		
		room.objects["flameonfireball"].pos.x = (room.objects["Shotgun"].zdir.x*-1 * (0.7)) + room.objects["Shotgun"].pos.x;
		room.objects["flameonfireball"].pos.y = (room.objects["Shotgun"].zdir.y*-1 * (0.7)) + room.objects["Shotgun"].pos.y +0.05;
		room.objects["flameonfireball"].pos.z = (room.objects["Shotgun"].zdir.z*-1 * (0.7)) + room.objects["Shotgun"].pos.z;
		room.objects["flameonfireball"].count = forparticlecount;
		
		var bulletdist = 1.0 + distance(room.objects["Bullet"].pos, room.objects["ViveLeftHand"].pos);
		room.objects["Bullet"].scale.x = bulletdist * 0.1;
		room.objects["Bullet"].scale.y = bulletdist * 0.1;
		room.objects["Bullet"].scale.z = bulletdist * 0.5;
		
		room.objects["flameonfireball"].vel.x = (room.objects["Shotgun"].zdir.x +0.115)*-30;
		room.objects["flameonfireball"].vel.y = (room.objects["Shotgun"].zdir.y +0.115)*-30;
		room.objects["flameonfireball"].vel.z = (room.objects["Shotgun"].zdir.z +0.115)*-30;
		
			
		//pumpshotty trigger and limiter
		if(hand_distance > 0.4)
		{
			room.objects["ShotgunSlide"].pos.x = (room.objects["Shotgun"].zdir.x*-1 * (0)) + room.objects["Shotgun"].pos.x;
			room.objects["ShotgunSlide"].pos.y = (room.objects["Shotgun"].zdir.y*-1 * (0)) + room.objects["Shotgun"].pos.y;
			room.objects["ShotgunSlide"].pos.z = (room.objects["Shotgun"].zdir.z*-1 * (0)) + room.objects["Shotgun"].pos.z;
			if(pumptrigger2 != 1)
			{
			pumptrigger2 = 1;
			room.playSound("shotgunpumpjs");
			}
		}
		
		else if(hand_distance < 0.34)
		{
			room.objects["ShotgunSlide"].pos.x = (room.objects["Shotgun"].zdir.x*-1 * (-0.06)) + room.objects["Shotgun"].pos.x;
			room.objects["ShotgunSlide"].pos.y = (room.objects["Shotgun"].zdir.y*-1 * (-0.06)) + room.objects["Shotgun"].pos.y;
			room.objects["ShotgunSlide"].pos.z = (room.objects["Shotgun"].zdir.z*-1 * (-0.06)) + room.objects["Shotgun"].pos.z;
			
			if(pumptrigger1 != 1)
			{
			pumptrigger1 = 1;
			room.playSound("shotgunpumpjs");
			}
		}
		else
		{
			room.objects["ShotgunSlide"].pos.x = (room.objects["Shotgun"].zdir.x*-1 * ((hand_distance-0.4))) + room.objects["Shotgun"].pos.x;
			room.objects["ShotgunSlide"].pos.y = (room.objects["Shotgun"].zdir.y*-1 * ((hand_distance-0.4))) + room.objects["Shotgun"].pos.y;
			room.objects["ShotgunSlide"].pos.z = (room.objects["Shotgun"].zdir.z*-1 * ((hand_distance-0.4))) + room.objects["Shotgun"].pos.z;
		}
	
		//if arrow drops below ground level		
		var bulletposy = room.objects["Bullet"].pos.y;
		if (bulletposy < 0)
		{
			room.objects["Bullet"].vel.x = 0;
			room.objects["Bullet"].vel.y = 0;
			room.objects["Bullet"].vel.z = 0;
			room.objects["Bullet"].accel.y = 0;
			
		}
	
		//update velocity ("integrate acceleration for velocity")
		room.objects["Bullet"].vel.x += room.objects["Bullet"].accel.x * dt;
		room.objects["Bullet"].vel.y += room.objects["Bullet"].accel.y * dt;
		room.objects["Bullet"].vel.z += room.objects["Bullet"].accel.z * dt;
			
	
		//update position ("integrate velocity for position")
		room.objects["Bullet"].pos.x += room.objects["Bullet"].vel.x * dt;
		room.objects["Bullet"].pos.y += room.objects["Bullet"].vel.y * dt;
		room.objects["Bullet"].pos.z += room.objects["Bullet"].vel.z * dt;
	
		update_frame(room.objects["Bullet"]); //this updates the coordinate frame for it (so it looks like it's travelling the right way)
	
	//end shotgun update loop

}