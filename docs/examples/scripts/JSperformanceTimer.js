var timer = new PerformanceTimer();
var lastprint = 0;
var textlength = 0;
var testupdate = 0;


room.onLoad = function() {
  timer.start('load');
  // do load stuff
  timer.stop('load');
  
  
  
  	for (var i = 0; i<4; ++i) 
	{
		var textid = "new_text"+i;
		room.createObject("Text", {js_id:textid});
		room.objects[textid].pos = Vector(1+i/3,i/3,0);
		room.objects[textid].fwd = Vector(-1,0,0);
		room.objects[textid].text = "";
		room.objects[textid].scale = Vector(5,5,5);
		room.objects[textid].col = Vector(.5,1,.5);
    }
  
  
  
  
  
}
room.update = function(dt) {
	
  doSomeStuff();
  
	timer.start('Big_Task');
	for (var i = 0; i < 200; i++) {
		testupdate++;
	}
	timer.stop('Big_Task');

  // Display the summary in the chat log once every 5 seconds
  var now = timer.now();
  if (now - lastprint > 5000) {
    lastprint = now;
	  //room.objects["new_text0"].text = timer.summarize();
	  textlength=0;
    print(timer.summarize());
  }
  
	for (var i = 0; i<4; ++i) 
	{
		var textid = "new_text"+i;
		room.objects[textid].pos.x = player.pos.x + (i*0.2) + 1;
		room.objects[textid].pos.y = player.pos.y + (i*0.2) + 1;
		room.objects[textid].pos.z = player.pos.z;
	}
  
}

function doSomeStuff() {
	timer.start('Small_Task');

	timer.stop('Small_Task');
}


/* Performance timing class */
function PerformanceTimer() {
  this.history = {};
  this.timers = {};
}
PerformanceTimer.prototype.now = function() {
  if (typeof performance != 'undefined') {
    return performance.now();
  }
  return new Date().getTime();
}
PerformanceTimer.prototype.start = function(name) {
  if (!this.timers[name]) {
    this.timers[name] = this.now();
  }
}
PerformanceTimer.prototype.stop = function(name) {
  if (this.timers[name]) {
    var now = this.now(),
        diff = now - this.timers[name];
    if (!this.history[name]) this.history[name] = [];
    this.history[name].push(diff);
    delete this.timers[name];
  }
}
PerformanceTimer.prototype.summarize = function() {
  var summary = '';
  var blah = 0;
  var avg = 0;
  var timings = 0;
  for (var k in this.history) {
    timings = this.history[k],
        num = timings.length,
        total = 0;
     for (var i = 0; i < num; i++) {
       total += timings[i];
     }
     avg = total / num;
     //summary += k + ': ' + num + ' calls, ' + avg.toFixed(2) + 'ms per call, ' + total.toFixed(2) + 'ms total\n'
	 
	 //creates text objects per timer
	 textlength++;
	 blah = "new_text" + textlength;
	 summary = k + ': ' + num + ' calls, ' + avg.toFixed(2) + 'ms per call, ' + total.toFixed(2) + 'ms total\n';
	 room.objects[blah].text = summary;
	 
  }
  return summary;
  
}