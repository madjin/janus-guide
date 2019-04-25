# Collision Meshes

Originally posted here: <https://github.com/jbaicoianu/janusweb/wiki/Collision-Meshes>

JanusWeb supports several underlying means of collision detection.  Full per-triangle mesh collision detection will be supported in the next release, but even when it is supported, it's not always the most ideal for performance, and it is sometimes desirable to define the collisions for your world in terms of simple primitives.  One way to do this is by defining a collision mesh in Blender, and assigning materials with special names to denote the various primitive types.

 * _collider-sphere
 * _collider-box
 * _collider-cylinder

Let's walk through the process of building a collision mesh for a simple room.  Keep in mind, we're looking to roughly block things out here and define an area which constrains the player within the world we've built.  It doesn't have to be an exact match with the visual world - you can decide for yourself how detailed you want certain parts to be.

## Summary
This article will cover the process of building this mesh for an existing world.  It assumes some basic familiarity with Blender, specifically knowing how to translate, scale, and rotate objects, and how to edit basic material properties.  For our example scene, it should take us about 15 minutes to add colliders to the scene.

If you need a refresher, the following articles could be useful:
 * [Basic Transformations](https://docs.blender.org/manual/en/dev/editors/3dview/object/editing/transform/basics.html)
 * [Axis Locking](https://docs.blender.org/manual/en/dev/editors/3dview/object/editing/transform/control/precision/axis_locking.html)
 * [Assigning a Material](https://docs.blender.org/manual/en/dev/render/blender_render/materials/assigning_a_material.html)
 * [Layers](https://docs.blender.org/manual/en/dev/editors/3dview/object/properties/relations/layers.html?highlight=layers#viewing-layers)

The steps we will perform are:

 * Add collider meshes to the scene
 * Assign collider materials
 * Block out our scene with these collider meshes
 * Export collider mesh
 * Reference this collider mesh in our Janus room markup

## Example
Here's the world we're working with.  Nice and simple.  We want to keep the player on the island, within the bounds of the fence.
![](https://i.imgur.com/gb56zaO.png)

For this world, let's start with a cylinder for the ground.  Add a cylinder mesh to your scene.  (NOTE - It helps to do this on a different layer from your main scene, this makes it easier to separate out your visual and collision scenes later.  We'll work with both layers visible so we can line the two layers up with each other, by pressing  ```alt+1 shift+1```)
![](https://i.imgur.com/Ye6HCos.png)

Let's set up the material first.  Make sure we're using Blender Render, and not Cycles Render.  Add a new material slot in the Material Properties panel, and name it "_collider-cylinder".  Set its diffuse color to some value you like - I picked yellow.  Give it an opacity too - 0.5 looks good to me.
![](https://i.imgur.com/RTKWp4E.png)

Now go into the Object Properties panel, and check the "Transparency" checkbox.  This will make it easier to line our colliders up with the visual world.
![](https://i.imgur.com/VErZnHI.png)

Now scale the cylinder to roughly fit the island.  Give it some thickness - again, it doesn't need to be exact!
![](https://i.imgur.com/sOdnrMT.png)

Let's block out some of the other objects now.  We'll start with the stage.  Add a cube to the scene
![](https://i.imgur.com/99tcw5c.png)

Same material setup as we did for cylinder.  This time we'll call it "_collider-box", and we'll give it a slightly different color, just so we can tell them apart.
![](https://i.imgur.com/P3ksROc.png)

Again we scale, translate, and rotate until it fits roughly around the object.  Object-relative axis-constrained manipulations are very useful here, double-tap the axis key (x, y, z) after choosing your manipulation tool (g, s, r)
![](https://i.imgur.com/oe0NBG4.png)

Now we can start to block out the rest of the world.  Duplicate this object, and repeat the process to fit it to the rest of the scenery.
![](https://i.imgur.com/jlUX67o.png)

For these boulders and trees, let's use spheres.  Add a sphere to the scene - doesn't really matter if you choose IcoSphere or UV Sphere.
![](https://i.imgur.com/tnFCf1J.png)

Same material setup as before, this time named "_collider-sphere".  We choose orange here.
![](https://i.imgur.com/f6fMiFQ.png)

Clone and scale some more
![](https://i.imgur.com/K8kTGgJ.png)

We'll add in a few more cylinders for the trees.  At this point we also changed cylinder colliders to be a tan color, just to set them apart.
![](https://i.imgur.com/bGVADS7.png)

Same thing on the other side.
![](https://i.imgur.com/d5A1BS3.png)

And we're done!  When you get the hang of it, this whole process takes about 15 minutes.
![](https://i.imgur.com/fVEzcsH.png)

A quick render of the collision mesh without the visible scene lets us double check things.  There are a few spots where maybe the player could squeeze through, but I think this looks good enough.
![](https://i.imgur.com/a1gTo3l.jpg)

The final step is to export the mesh.  OBJ works fine here.  Select all the objects on your collision layer, and go to File -> Export -> Wavefront (.obj)
![](https://i.imgur.com/D0GaP2N.png)

Give it a name, and make sure "Selection Only" is checked.
![](https://i.imgur.com/LP4FLnp.png)

You're done!  Now you can add this to your room as an ```<AssetObject id="..." src="..." />```, and refer to it using ```<Object collision_id="..." />```

