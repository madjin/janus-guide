var updateposcounter = 0;

room.update = function(delta_time) {
   
// increments updateposcounter every frame. 
updateposcounter++;

//moves sphere 2 on the x axis with sine of updateposcounter
room.objects["sphere"].pos.x = Math.sin(updateposcounter/100);
room.objects["sphere"].pos.z = Math.sin(updateposcounter/100);
}