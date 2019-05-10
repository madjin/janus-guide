var basehitcounter = 0;
var updateposcounter = 0;

//On collide enter function
//decrements basehitcounter by 1 on colliding with cube
room.onCollisionEnter = function(val1, val2) {
	
	
		if ((val1.js_id == "sphere" || val1.js_id == "sphere2") && val2.js_id =="cube" ) 
    {
        room.objects["text1"].text = "ENTER: val1" + val1.js_id + "val2" + val2.js_id;
        basehitcounter++;
    }
    
    
		else if (val1.js_id == "cube") 
    {
        room.objects["text2"].text = "ENTER: val1" + val1.js_id + "val2" + val2.js_id;
    }
    
    
}


room.onCollisionExit = function(val1, val2) {
        if (val1.js_id == "sphere") 
    {
        room.objects["text1"].text = "EXIT: val1" + val1.js_id + "val2" + val2.js_id;
    }
		else if (val1.js_id == "cube") 
    {
        room.objects["text2"].text = "EXIT: val1" + val1.js_id + "val2" + val2.js_id;
        
    }
}



room.update = function(delta_time) {
    
    var totalhitcounter = basehitcounter;
updateposcounter++;

//moves sphere 2 on the x axis with sin of updateposcounter
room.objects["sphere2"].pos.x = Math.sin(updateposcounter/100)

//writes out how many times the oncollide function has been invoked
room.objects["text0"].text = "TotalHits " + basehitcounter;

    
    

}

