# Vesta Tutorial: Decentraland

[Decentraland](https://decentraland.org) is a VR platform powered by Ethereum blockchain and in this guide you will learn an alternative way to build content for it that takes advantage of the powerful collaboration and real-time editing features of JanusVR. This tutorial follows after the [Vesta Basics](https://github.com/madjin/janus-guide/blob/master/guide/tutorials/vestabasics.md) guide which is recommended reading before starting this.

It is recommended to read the entire tutorial before you start!

You will need:

- Janus native, [download here for windows/linux](http://janusvr.com/download.php)
- Vesta account, [sign up here](https://vesta.janusvr.com/plans)
- Some 3D models such as (.dae, .obj, .gltf, .fbx)

#### Step 1: Clone the Template

Login to [Vesta](https://vesta.janusvr.com) and clone the single parcel template here: <https://vesta.janusvr.com/guide/dcl-template> 

Then launch that site with JanusVR and start building on it by drag n' dropping links into janusvr (can be anything: Obj, Collada, GLTF, mp3, images) into your scene either collaboratively with others or solo. **Make sure edit mode is enabled in your settings first!** You can view the [Vesta Basics guide](https://github.com/madjin/janus-guide/blob/master/guide/tutorials/vestabasics.md) for more help with this part.

![Scene constructed in Janus within the red line boundaries](https://i.imgur.com/tWE8Pox.jpg)

#### Step 2: Optimize in Blender

This step is potentially optional but a good step to learn nontheless. If you go over triangle limit or are using non-GLTF files, use [FireVR](https://github.com/spyduck/firevr) to import a scene from the URL into Blender to optimize and convert the models to GLTF.

![FireVR import of the sample, you can also upload to IPFS or locally](https://i.imgur.com/J6kzPPI.jpg)

Once your scene is compatible with the [scene limitations](https://docs.decentraland.org/development-guide/scene-limitations/) of DCL, export the files to gltf with the option **Format: glTF Embedded.** Upload this model somewhere (such as [Vesta inventory](https://vesta.janusvr.com/my_files)), clone [this url](https://vesta.janusvr.com/bepis/dcl-parcel-viewer), and put the link to the gltf in the custom settings on the right.

#### Step 3: Convert to DCL

If you have a paid membership on Vesta you are given early access to the DCL converter. To use it, first go to the Vesta site for the scene you wish to convert and press the hamburger icon on top left 

![Preview of the new convert to DCL which downloads typescript](https://i.imgur.com/JABuSUn.jpg)

#### Step 4: Preview in DCL

![Decentraland preview](https://i.imgur.com/pwcBPk7.jpg)
