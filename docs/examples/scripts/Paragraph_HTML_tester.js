room.onLoad = function()
{
	room.objects["P_jsModified_Test"].text = '<font size="5" color="grey" style="background-color: #000000">Is This Working?</font><br><br><font size="5" color="grey" style="background-color: #ff0000">Is linebreak working?</font>';
	
	var blah = "swag"
	var textid = "P_jsMade_test";
	room.createObject("Paragraph", {js_id:textid});
	room.objects[textid].pos = Vector(0, 2, 0);
	room.objects[textid].text = '<font size="5" color="grey" style="background-color: #000000">' + blah + '</font>';

}
	

