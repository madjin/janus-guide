room.onLoad = function() {

	for (var i=0; i<20; ++i) 
	{
		var textid = "new_text"+i;
		room.createObject("Text", {js_id:textid});
		room.objects[textid].pos = Vector(0,10+(i*3),10+(i*-2));
        room.objects[textid].fwd = Vector(0,0,-1);
        room.objects[textid].text = "This is new text with js_id: " + room.objects[textid].js_id;
        room.objects[textid].scale = Vector(30,30,30);
        room.objects[textid].col = Vector(1,0,0);
    }
}


//vive Left

//L_trigger = Left_Trigger0(bool)
//L_trigger_range = Left_Trigger1(float)
//L_grip = B_Button
//L_menu_button = X_Button
//L_trackpad_press = Left_Stick_Button

//L_trackpad_x = Left_Stick_X
//L_trackpad_y = Left_Stick_Y

//L_home_button = Home_Button(Always reserved for vive home)



//vive right

//R_trigger = Right_Trigger0(bool)
//R_trigger_range = Right_Trigger1(float)
//R_grip = A_Button
//R_menu_button = Y_Button
//R_trackpad_press = Right_Stick_Button

//R_trackpad_x = Right_Stick_X
//R_trackpad_y = Right_Stick_Y

//R_home_button = Home_Button(Always reserved for vive home)

//There is the issue of preexisiting attributes for the trackpad = player.handX_trackpad.xy and LMB = trigger situation. 
//I think we should support existing(remove the documentation), and make a new attribute going forward.



//Do we want to simulate a Dpad as well with the track pad, for the bool key events? 
//The idea would be, If you finger is within a certian range and you press the trackpad, it would simualte a direction on the Dpad for the key events. 
//Personally, I feel like we can just code in a fake Dpad via JS, and jsut not hardcode the key events.


var switchR_trigger = 0;
var switchR_trigger_range = 0;
var switchR_grip = 0;
var switchR_menu_button = 0;
var switchR_trackpad_press = 0;

var switchL_trigger = 0;
var switchL_trigger_range = 0;
var switchL_grip = 0;
var switchL_menu_button = 0;
var switchL_trackpad_press = 0;





room.onKeyUp = function(event) 
{
    if (event.keyCode == 'Right_Trigger0')
    {
		switchR_trigger++;
    }
	if (event.keyCode == 'A_Button')
    {
		switchR_grip++;
    }
	if (event.keyCode == 'Y_Button')
    {
		switchR_menu_button++;
    }
	if (event.keyCode == 'Right_Stick_Button')
    {
		switchR_trackpad_press++;
    }
	
	
	if (event.keyCode == 'Left_Trigger0')
    {
		switchL_trigger++;
    }
	if (event.keyCode == 'B_Button')
    {
		switchL_grip++;
    }
	if (event.keyCode == 'X_Button')
    {
		switchL_menu_button++;
    }
	if (event.keyCode == 'Left_Stick_Button')
    {
		switchL_trackpad_press++;
    }
	
}

//Trigger Range floats
room.objects["new_text0"].text = "Right Trigger Range = " + Right_Trigger1;
room.objects["new_text1"].text = "Left Trigger Range = " + Right_Trigger1;
room.objects["new_text2"].text = "Right grip = " + Right_Trigger1;
room.objects["new_text3"].text = "Left grip = " + Right_Trigger1;
room.objects["new_text4"].text = "Right menu = " + Right_Trigger1;
room.objects["new_text5"].text = "Left menu = " + Right_Trigger1;
room.objects["new_text6"].text = "Right trackpad press = " + Right_Stick_Button;
room.objects["new_text7"].text = "Left trackpad press = " + Left_Stick_Button;
room.objects["new_text8"].text = "Left trackpad x" + player.hand0_trackpad.x; //Left_Stick_X
room.objects["new_text9"].text = "Left trackpad y" + player.hand0_trackpad.y; //Left_Stick_Y
room.objects["new_text10"].text = "Right trackpad x" + player.hand1_trackpad.x; //Right_Stick_X
room.objects["new_text11"].text = "Right trackpad y" + player.hand1_trackpad.y; //Right_Stick_Y



room.update = function(msec) 
{
	//RIGHT VIVE
	//R_trigger
	if((switchR_trigger%2) == 1)
	{
		room.objects["new_text12"].text = "R_trigger true";
	}
	else
	{
		room.objects["new_text12"].text = "R_trigger false";
	}
	//R_grip
	if((switchR_grip%2) == 1)
	{
		room.objects["new_text13"].text = "R_grip true";
	}
	else
	{
		room.objects["new_text13"].text = "R_grip false";
	}
	//R_menu
	if((switchR_menu_button%2) == 1)
	{
		room.objects["new_text14"].text = "R_menu_button true";
	}
	else
	{
		room.objects["new_text14"].text = "R_menu_button false";
	}
	//R_trackpad_press
	if((switchR_trackpad_press%2) == 1)
	{
		room.objects["new_text15"].text = "R_trackpad_press true";
	}
	else
	{
		room.objects["new_text15"].text = "R_trackpad_press false";
	}
	
	
	//Left VIVE
	//L_trigger
	if((switchL_trigger%2) == 1)
	{
		room.objects["new_text16"].text = "L_trigger true";
	}
	else
	{
		room.objects["new_text16"].text = "L_trigger false";
	}
	//L_grip
	if((switchL_grip%2) == 1)
	{
		room.objects["new_text17"].text = "L_grip true";
	}
	else
	{
		room.objects["new_text17"].text = "L_grip false";
	}
	//L_menu
	if((switchL_menu_button%2) == 1)
	{
		room.objects["new_text18"].text = "L_menu_button true";
	}
	else
	{
		room.objects["new_text18"].text = "L_menu_button false";
	}
	//L_trackpad_press
	if((switchL_trackpad_press%2) == 1)
	{
		room.objects["new_text19"].text = "L_trackpad_press true";
	}
	else
	{
		room.objects["new_text19"].text = "L_trackpad_press false";
	}
	
	
}