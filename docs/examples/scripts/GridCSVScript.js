var radselectX = 0;
var radselectY = 0;
var radtimer = 0;
var radmenunumberX = 0;
var radmenunumberY = 0;

var testupdate = 0;


room.onLoad = function() {

	for (var i = 0; i<3; ++i) 
	{
		var textid = "new_text"+i;
		room.createObject("Text", {js_id:textid});
		room.objects[textid].pos = Vector(5+i,5+i,0);
		room.objects[textid].fwd = Vector(0,0,1);
		room.objects[textid].text = "This is new text with js_id: " + room.objects[textid].js_id;
		room.objects[textid].scale = Vector(5,5,5);
		room.objects[textid].col = Vector(.5,1,.5);
    }
}




room.update = function(msec) 
{
	
	
//vivetrackpad into value	
radmenunumberX = (player.hand1_trackpad.x+1) / 0.1428571428;
radmenunumberY = 14 - ((player.hand1_trackpad.y+1) / 0.1428571428);

//debugtext
room.objects["new_text0"].text = "radmenunumberX = " + radmenunumberX;
room.objects["new_text1"].text = "radmenunumberY = " + radmenunumberY;


	if(player.hand1_trackpad.x != 0)
	{
		radtimer++;
		if(radtimer > 75)
		{
			radselectX = radmenunumberX;
			radselectY = radmenunumberY;
			radtimer = 0;
    
		}		
	}
	else
	{
		radselectX = 0;
		radselectY = 0;
	}
	
	//Test Loop for testing without vive 
	//comment out lines 32 - 55 AND uncomment 60 - 80 to use this test loop
	//
	//if(testupdate < 5)
	//{
	//	testupdate++;
	//}
	//else
	//{
	//	radtimer++;
	//	testupdate = 0;
	//}
	//
	//
	//
	//if(radtimer < 130)
	//{
	//radmenunumberX = Math.round(radtimer%14);
	//radmenunumberY = Math.round(radtimer/10);
	//}
	//else
	//{
	//	radtimer=0;
	//}
	
	//sets the visibility of the grid based on radmenunumberX/Y
	for(var j = 0; j<14; j++)
	{
		for(var i = 0; i<14; i++)
		{
			var Gridjsid = "Grid_" + j + "_" + i;
			
			//if(j == radmenunumberX && i == radmenunumberY)
			if(j == (Math.round(radmenunumberX)) && i == (Math.round(radmenunumberY)))
			{room.objects[Gridjsid].visible = false;}
			else
			{room.objects[Gridjsid].visible = true;}
		}
	}
}