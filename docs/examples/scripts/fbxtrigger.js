var updateposcounter = 0;


room.onLoad = function() 
{    
room.objects["fbxanimation"].anim_id="zombie_idle";
room.objects["fbxanimation"].loop = true;
}


room.update = function(delta_time) 
{
	
//counterstuff for the if statments
updateposcounter++;
var fbxtrigger = Math.abs((updateposcounter/300)%2);

room.objects["text1"].text = " " + Math.round(fbxtrigger*10) / 10;

if (fbxtrigger < 1)
{
//the actual statment that changes animations
//zombie_death is the id of an FBX animation, as shown in the html that came with this
room.objects["fbxanimation"].anim_id="zombie_death";
room.objects["fbxanimation"].loop = true;

}

if (fbxtrigger > 1)
{
room.objects["fbxanimation"].anim_id="zombie_idle";
room.objects["fbxanimation"].loop = true;

}


}