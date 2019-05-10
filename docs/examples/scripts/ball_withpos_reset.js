room.onLoad = function() {
room.createObject("Object",{id: "sphere", js_id: "ball", collision_id: "sphere", pos:Vector(0, 3, 8), vel: Vector(0, 3, 0), collision_static: false, collision_trigger: false });
}

room.onClick = function()
{
	
//should cuase ball to fly up at 30m/sec but doesnt, when only this is specified
room.objects["ball"].vel.y = 30;

//for whatever reason balls pos must be reset in order for vel to do its thing
room.objects["ball"].pos = Vector(0, 0, 8);

}
