/*
This is:
 
*Transformation
*API
 for
*Chamber
*Of
*Secrets

or TACOS for short. It allows a generic "click to open door" mechanic where the object in the room itself defines it's own opening waypoints. 
This allows the room to define door movements instead of editing the JS for every door.
It also allows a "click to write text to chat" mechanic.

As far as licensing, here's how this is going to go:
*If you use this JS file and don't edit it at all, keep the file name intact; TACOS_Vnazrin.1.0 -> TACOS_Vnazrin.1.0
*If you use this JS file and and edit it to suit your purposes, change the name after the V to your janus name and print what the last file name was in the space pervided; TACOS_Vnazrin.2.7 -> TACOS_Valusion.1.0
here ---->

<----
This will allow us some order to figuring out the telephone game that will be the versioning of this file.
*If you only use bits and peices of this file in some other JS file, you need to add a comment "glory be the banana" somewhere near the top of your file.
*If you meet Nazrin some day, and you think this stuff was worth it, you can buy him a JanusVR hoodie in return.

*/
var names=[];
var delaying=[];
var durations=[];
var countdown=[];

var rotstart=[];
var rotdelta=[];

var transstart=[];
var transdelta=[];

var lockednames=[];
var toreverse=[];

room.onLoad = function(){}

room.update = function(delta)
{
  var arrayLength = names.length; 
  for (var i = 0; i < arrayLength; i++)
  {
    if (delaying[i]>0)
    {
      delaying[i] -= delta;
      if(delaying[i]<=0){
        transstart[i] = Vector(room.objects[names[i]].pos.x,room.objects[names[i]].pos.y,room.objects[names[i]].pos.z);
        rotstart[i]   = Math.atan2(room.objects[names[i]].fwd.x, room.objects[names[i]].fwd.z);
      }
    }else{
      countdown[i] -= delta;
      
      //so we don't overshoot
      if (countdown[i]<0){countdown[i]=0;}
      //what percent are we to completeing the transformation
      var percent = 1 - (countdown[i]/durations[i]);
      var currrot = rotstart[i] + (percent * rotdelta[i]);
      rotateXYZ(currrot,0,0,names[i]);
      room.objects[names[i]].pos.x = transstart[i].x + (percent * transdelta[i].x);
      room.objects[names[i]].pos.y = transstart[i].y + (percent * transdelta[i].y);
      room.objects[names[i]].pos.z = transstart[i].z + (percent * transdelta[i].z);
      
      if (countdown[i]<=0)
      {
        clean(i);
        arrayLength--;
        i--;
      }
    }
  }
}


//rotating door: allows an object to rotate a certain amount within a certain duration after a certain delay.
//usage: onclick="rDoor('frontdoor',90,1,0,'once')"
//result: the object with js_id="frontdoor" will swing 90 degrees clockwise within 1 second after waiting 0 seconds. Will only work once.
//valid flags are 'once','repeat', and 'reverse'. default is 'repeat'
//there is currently a bug with reverse and repeat where if you spam click the object, it will end up in stange positions.
function rDoor(name,rotDeg,duration,delay,type)
{
  
  if(lockednames.indexOf(name)==-1){
    if(type=='once'){
      lockednames.push(name);
    } 
    names.push(name);
    delaying.push(delay*1000);
    durations.push(duration*1000);
    countdown.push(duration*1000);
    rotstart.push(Math.atan2(room.objects[name].fwd.x, room.objects[name].fwd.z));
    //yes, I know about the reverse bug. I'll fix it later
    if(type=='reverse'){
      if(toreverse.indexOf(name)==-1){
        toreverse.push(name);
        rotdelta.push(-Math.PI*2*rotDeg/360);
      }else{
        toreverse.splice(toreverse.indexOf(name),1);
        rotdelta.push(Math.PI*2*rotDeg/360);
      }
    }else{
      rotdelta.push(-Math.PI*2*rotDeg/360);
    }
    transstart.push(Vector(room.objects[name].pos.x,room.objects[name].pos.y,room.objects[name].pos.z));
    transdelta.push(Vector(0,0,0));
  }
}

//sliding door: allows an object to slide a certain amount within a certain duration after a certain delay.
//usage: onclick="sDoor('frontdoor',1,-15,2,1,0,'once')"
//result: the object with js_id="frontdoor" will move 1 meter in the x direction, 15 meters down and 2 meters in z. All within 1 second after waiting 0 seconds. Will only work once.
//valid flags are 'once','repeat', and 'reverse'. default is 'repeat'
//there is currently a bug with reverse and repeat where if you spam click the object, it will end up in stange positions.
function sDoor(name,deltax,deltay,deltaz,duration,delay,type)
{
  
  if(lockednames.indexOf(name)==-1){
    if(type=='once'){
      lockednames.push(name);
    } 
    names.push(name);
    delaying.push(delay*1000);
    durations.push(duration*1000);
    countdown.push(duration*1000);
    rotstart.push(Math.atan2(room.objects[name].fwd.x, room.objects[name].fwd.z));
    //yes, I know about the reverse bug. I'll fix it later
    if(type=='reverse'){
      if(toreverse.indexOf(name)==-1){
        toreverse.push(name);
        transdelta.push(Vector(deltax,deltay,deltaz));
      }else{
        toreverse.splice(toreverse.indexOf(name),1);
        transdelta.push(Vector(-deltax,-deltay,-deltaz));
      }
    }else{
      transdelta.push(Vector(deltax,deltay,deltaz));
    }
    transstart.push(Vector(room.objects[name].pos.x,room.objects[name].pos.y,room.objects[name].pos.z));
    rotdelta.push(0);
  }
}


//text: allows for an object to put a text string in chat. The first argument is what the player name looks like.
//usage: onclick="Text('That weird guy','I don\'t see anything wrong here.')"
//output: That weird guy: I don't see anything wrong here.
function Text(name,Text)
{
  name = name.replace(/ /g, " "); //black magic. Mecca Lecca Hi, Mecca Hiney Ho.
	print(name + ' ' + Text);
}


//multi choice text: allows for an object to put more than one text string in chat. randomises the array. The first argument is what the player name looks like.
//usage: onclick="mText('The count says',['one','two','three ha ha ha'])"
//output:
/*
The count says: three ha ha ha
The count says: one
The count says: two
*/
function mText(name,TextArray)
{
  name = name.replace(/ /g, " "); //black magic. Hocus Pocus.
	print(name + ' ' + TextArray[Math.floor(Math.random() * Object.keys(TextArray).length)]);
}


/*
Utilities. Do not use in your JML code
*/
function clean(index)
{
  names.splice(index, 1);
  delaying.splice(index, 1);
  durations.splice(index, 1);
  countdown.splice(index, 1);
  
  rotstart.splice(index, 1);
  rotdelta.splice(index, 1);

  transstart.splice(index, 1);
  transdelta.splice(index, 1);
}

//euler angles to rotation matrix
function rotateXYZ(xrot, yrot, zrot, rot){
    var A       = Math.cos(xrot);
    var B       = Math.sin(xrot);
    var C       = Math.cos(yrot);
    var D       = Math.sin(yrot);
    var E       = Math.cos(zrot);
    var F       = Math.sin(zrot);

    room.objects[rot].xdir = Vector(A*E , A*F , -B);
    room.objects[rot].ydir = Vector(D*B*E - C*F , D*B*F + C*E , A*D);
    room.objects[rot].zdir = Vector(C*B*E + D*F , C*B*F - D*E , A*C);
}
