//Most of this script is for syncing the blend shape trigging 
//it writes the date to a text object, which is synced.
//this text object then relays the state of the blend shape to everyone.
//it uses the oncick function int he html to act as a clickable object, this doesnt have to be the blend shape.

var date = 0;

var ff = {
percent:0
,isSphere:true
,isActive:false
};

ff.plane2sphere = function()
{
	room.objects["trigger"].text = date.valueOf();
}

//onSync variables
var onSync = {
lastTime:[0,0]
,jsID:"trigger"
};

//onSync update syncs events
onSync.update = function()
{
	if(room.objects[this.jsID].text != "false" && room.objects[this.jsID].text != this.lastTime[0] && room.objects[this.jsID].text != this.lastTime[1])
	{
		this.lastTime[0] = this.lastTime[1];
		this.lastTime[1] = room.objects[this.jsID].text;
		room.objects[this.jsID].sync = true;
		return true;
	}
	return false;
}

room.update = function(delta_time)
{
	date = new Date();

	if(onSync.update() && ff.isActive == false)
	{
		ff.isActive = true;
	}
	
	if(ff.isActive && ff.isSphere)
	{
		if(ff.percent > 100)
		{
			ff.percent = 100;
			ff.isActive = false;
			ff.isSphere = false;
		}
		else
		{
			ff.percent += delta_time/10;
		}
	}
	else if(ff.isActive && ff.isSphere == false)
	{
		if(ff.percent < 0)
		{
			ff.percent = 0;
			ff.isActive = false;
			ff.isSphere = true;
		}
		else
		{
			ff.percent -= delta_time/10;
		}
	}
	
	//essentially, a value between 1 and 0 is the percentage of innterpolation of a blend shape.
	room.objects["plane"].blend0 = (ff.percent/100);
	room.objects["sphertoplane"].blend0 = (ff.percent/100);
}
