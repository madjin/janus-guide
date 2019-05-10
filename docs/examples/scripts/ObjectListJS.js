var objectlist = [];




room.onLoad = function() {

	for (var i = 0; i<1; ++i) 
	{
		var textid = "new_text"+i;
		room.createObject("Text", {js_id:textid});
		room.objects[textid].pos = Vector(5+i,5+i,0);
		room.objects[textid].fwd = Vector(-1,0,0);
		room.objects[textid].text = "This is new text with js_id: " + room.objects[textid].js_id;
		room.objects[textid].scale = Vector(5,5,5);
		room.objects[textid].col = Vector(.5,1,.5);
    }
	
	
	
 
for (var k in room.objects) 
{
	objectlist.push(k); 
}
	
	
	
}

room.update = function(p_dt)
{

	
room.objects["new_text0"].text = "Object List = " + objectlist;


}

