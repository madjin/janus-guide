room.onLoad = function() {
	//var verts = [0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0];
	//var faces = [0, 1, 2, 1, 3, 2];
	
	var verts = [];
	var normals = [];
	var faces = [];

	var angle0 = 0.0;
	var angle1 = 0.1;

	var num_quads = 400;
	for (var i=0; i<num_quads; ++i) {
		verts.push(Math.sin(angle0)*5);
		verts.push(angle0);
		verts.push(Math.cos(angle0)*5);

		verts.push(Math.sin(angle0)*5);
		verts.push(angle0+1);
		verts.push(Math.cos(angle0)*5);

		verts.push(Math.sin(angle1)*5);
		verts.push(angle1+1);
		verts.push(Math.cos(angle1)*5);

		verts.push(Math.sin(angle1)*5);
		verts.push(angle1);
		verts.push(Math.cos(angle1)*5);

		normals.push(Math.sin(angle0));
		normals.push(0);
		normals.push(Math.cos(angle0));

		normals.push(Math.sin(angle0));
		normals.push(0);
		normals.push(Math.cos(angle0));

		normals.push(Math.sin(angle1));
		normals.push(0);
		normals.push(Math.cos(angle1));

		normals.push(Math.sin(angle1));
		normals.push(0);
		normals.push(Math.cos(angle1));

		faces.push(i*4);
		faces.push(i*4+1);
		faces.push(i*4+2);

		faces.push(i*4+2);
		faces.push(i*4+3);
		faces.push(i*4);	

		angle0 += 0.1;
		angle1 += 0.1;
	}

	room.loadNewAsset("Object", {id:"blah", mesh_verts:verts, mesh_faces:faces, mesh_normals:normals, mesh_face_normals:faces});
	room.createObject("Object", {id:"blah", pos:Vector(0, 0, 4), cull_face:"none"});
}

