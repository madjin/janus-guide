var rotX_rate = 1;
var rotY_rate = 1;
var rotZ_rate = 1;
var thrust = 0;

var angle_x = 0;
var angle_y = 0;
var angle_z = 0;

function rotateXYZ(xrot, yrot, zrot, rot){
var A = Math.cos(xrot * (Math.PI / 180));
var B = Math.sin(xrot * (Math.PI / 180));
var C = Math.cos(yrot * (Math.PI / 180));
var D = Math.sin(yrot * (Math.PI / 180));
var E = Math.cos(zrot * (Math.PI / 180));
var F = Math.sin(zrot * (Math.PI / 180));

var AD = A * D;
var BD = B * D;

var mat = [
(C*E),
(-C*F),
(-D),
(0),
(-BD*E+A*F),
(BD * F + A * E),
(-B * C),
(0),
(AD * E + B * F),
(-AD * F + B * E),
( A * C),
(0),
(0),
(0),
(0),
(1)
];

room.objects[rot].xdir = Vector(mat[0], mat[4], mat[8]);
room.objects[rot].ydir = Vector(mat[1], mat[5], mat[9]);
room.objects[rot].zdir = Vector(mat[2], mat[6], mat[10]);	
}










room.update = function(delta_time) {
	
	var landdistance = distance(player.pos, room.objects["zeropos"].pos);
	



//angle_x += rotX_rate * player.hand1_trackpad.x;
//angle_y += rotY_rate * player.hand0_trackpad.x;
//angle_z += rotZ_rate * player.hand1_trackpad.y;
thrust += 0.001 * player.hand0_trackpad.y;

//angle_x++;
//angle_y++;
//angle_z++;
//thrust += 0.01;

angle_x	= 30;
angle_y = 0;
angle_z = 0;


rotateXYZ( (angle_x)%360, (angle_y)%360, (angle_z)%360, "rot2");

room.objects["rot2"].pos.x = (((room.objects["rot2"].zdir.x + (room.objects["rot2"].ydir.x * (Math.abs(Math.sin(thrust)) * 100)))) - room.objects["zeropos"].pos.x) * -1;
room.objects["rot2"].pos.y = (((room.objects["rot2"].zdir.y + (room.objects["rot2"].ydir.y * (Math.abs(Math.sin(thrust)) * 100)))) - room.objects["zeropos"].pos.y) * -1;
room.objects["rot2"].pos.z = (((room.objects["rot2"].zdir.z + (room.objects["rot2"].ydir.z * (Math.abs(Math.sin(thrust)) * 100)))) - room.objects["zeropos"].pos.z) * -1;

}

//use trackpad to attentuate the rotation rate.

