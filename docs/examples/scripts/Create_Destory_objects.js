var intergratenum = 0;


room.onLoad = function() 
{
room.removeObject("testobj");

room.loadNewAsset("Image", {id:"assetmadeimage", src:"http://janusvr.com/images/logo.png"})
room.createObject("Image", {id:"assetmadeimage", js_id:"imageinjs", pos:Vector(0, 4, 0), scale:Vector(4, 4, 4)});
}

room.onClick = function()
{
	//clicking anywhere should make and remove a cube at the orgin point of the room, depending on wha tthe click count is
	intergratenum++;
	if(intergratenum%2 == 0)
	{
		room.createObject("Object", {id:"cube", js_id:"testobj", collision_id: "cube"});
	}
	
	if(intergratenum%2 == 1)
	{
		room.removeObject("testobj");
	}

}

