var cycle_time_passed = 0;
var vidcurrenttime = 0.0;
var loop_count = 0; // how many times the video has looped, max
var loop_end_time = 0.25; // how long before reaching end of video we loop (this could be 0 if video has loop="false")
var cycle_time = 3.0; //how many seconds to wait before checking sync status
var sync_window_time = 2.0; //time needed for our client to be ahead (or behind the master) in order to (send / act on a sync)
var vidtotaltime = 0;

room.onLoad = function() 
{
	if (room.objects["TextSync_myglobaltime"])
	{
		room.objects["TextSync_myglobaltime"].pos = Vector(0,0,0);
		room.objects["TextSync_myglobaltime"].visible = false;
	}
}
room.update = function(msec)
{
	cycle_time_passed += msec/1000;
	vidcurrenttime = parseFloat(room.objects["mainvideo"].current_time);

	if (vidtotaltime == 0)
	{
		vidtotaltime = room.objects["mainvideo"].total_time;
	}
	//change room color based on time to fade lights
	if (room.objects["cinemaroom"])
	{
		if(vidcurrenttime < 17 && loop_count == 0)
		{
			room.objects["cinemaroom"].col.x = 1 - (vidcurrenttime/20);
		}
		else
		{
			room.objects["cinemaroom"].col.x = 0.15;
		}
	}
	
	var public_time = room.objects["TextSync_myglobaltime"].pos.x;
	var public_loop_count = room.objects["TextSync_myglobaltime"].pos.y;
	// if we're first to loop deal with it here
	var test_time = vidcurrenttime + loop_end_time;
	if (test_time >= vidtotaltime && vidtotaltime > 0.0)
	{
		console.log(test_time+' >= '+vidtotaltime);
		console.log('will sync loop_count, loop count is '+loop_count);
		loop_count += 1;
		vidcurrenttime = 0.0;
		public_time = 0.0;
		cycle_time_passed = cycle_time + 1;
		room.seekVideo("main4kvid", 0.0);
	}
	
	//check sync status every X seconds
	if(cycle_time_passed > cycle_time && vidtotaltime > 0.0) 
	{
		cycle_time_passed = 0.0;

		
		if(vidcurrenttime > public_time + sync_window_time || loop_count > public_loop_count) //are we far ahead?
		{
			//console.log('syncing to '+new_time);
			room.objects["TextSync_myglobaltime"].pos = Vector(Math.min(vidtotaltime-loop_end_time, vidcurrenttime),Math.max(loop_count,public_loop_count),0);
			room.objects["TextSync_myglobaltime"].sync = true;
			console.log('sending sync to '+vidcurrenttime+' -- loops: '+Math.max(loop_count,public_loop_count));
		}
		else if (vidcurrenttime < public_time - sync_window_time || public_loop_count > loop_count) //are we far behind?
		{
			var new_time = Math.max(public_time, vidcurrenttime);
			console.log('seeking from '+vidcurrenttime+' -- at loops:'+loop_count);
			loop_count = public_loop_count;
			console.log('seeking to '+public_time+' -- loops: '+loop_count);
			room.seekVideo("main4kvid", public_time);
		}
	}
	//console.log(cycle_time_passed);
}