# Vesta Tutorial: Basics

Vesta is a social platform for WebVR content with free hosting and building tools for people that want to build immersive web content. One can kinda see it as like a combination of [Glitch](https://glitch.com), [Newgrounds](https://newgrounds.com), and [Neocities](https://neocities.org) with an enthusiastic community around the immersive internet. In this tutorial you will learn how to think and prototype your ideas using Vesta and JanusVR.

IMPORTANT! It is recommended to read the entire tutorial before you start!

You will need:

- Janus native, [download here for windows/linux](http://janusvr.com/download.php)
- Vesta account, [sign up here](https://vesta.janusvr.com/plans)
- Some 3D models such as (.dae, .obj, .gltf, .fbx)

#### Step 1: Organize your ingrediants

Organization is key when creating a world, so make sure to have all your various assets you want to use sorted out first! This includes but isn't limited to 3D models, sounds, images, and videos.

Here are some online assets to get you started:

- An imgur album: https://imgur.com/a/Ak1QFjm
- Simple asset kit: http://vendorkit.glitch.me/
- Some plants: https://gardenkit.glitch.me/
- Modular Buildings: https://modularbuildings.glitch.me/ 


#### Step 2: Clone the template site

First, make sure you are logged into [Vesta](https://vesta.janusvr.com/) and then click this link <https://vesta.janusvr.com/guide/sandbox> to open the template site and hit **clone**. You'll be in the builder page for Vesta but the site will not work until you hit save. Feel free to edit the name and description to your liking then hit save.

![Fork a Vesta site with the clone button](https://i.imgur.com/UT0FAG9.jpg)

#### Step 3: Upload into your Inventory

You can choose to work completely offline using models that are stored on your local hard drive but if you want to share your creations or collaborate online with a friend then you have to host your files and html somewhere. Uploading to your inventory is a very straightforward process, simply drag your files or folders into the vesta inventory to upload. Vesta offers new users 1gb of free storage.

Good folder management will go a long way to expanding your collection of ready to use assets.


#### Step 4: Launch site with Janus

The janus native browser is currently the best editor for building the webvr site so we're going to open it and go over basic commands. Quick tip: if you have janusvr installed from steam, a quick way to launch the site in native from Vesta is to click the small icon on the top left of the Vesta widget underneath popout. 

![Click the janus icon on the top left](https://i.imgur.com/jp1kwwn.jpg)

The other way is to open the site is to simply open janusvr, and drag the url into the window or copy paste it into the address bar.

Then make sure you've enabled edit-mode in settings: <http://janusvr.com/docs/learn/application/index.html#settings>



#### Step 4: Basic Movement

The keys for movement are also used for editing when you select objects. I recommend first getting used to moving around with WASD, then try holding shift while walking to run and tap F to go into flight mode. While you are in flight mode, shift will lower you while space will fly you upwards.

<http://janusvr.com/docs/learn/keyboardcontrols/index.html>


#### Step 5: Drag n Drop Editing

You can drag and drop a file from any external window into Janus, try dragging this url <> into the janus window.

![Drag and drop links into the Janus scene](https://i.imgur.com/aWYzrFP.gif)

Now lets go over some basic keycommands for editing [rmb/lmb + wasdqe + tab + 1234]: <http://janusvr.com/docs/build/interactiveediting/index.html>

![Keyboard map for interactive editing](https://i.imgur.com/ktHmFnL.jpg)

To manipulate an object, right click to select (sometimes it's easier to hold down right click and let go when its over the object you want to select) then try pressing the keys QWEASD to move it around. The mouse can also be used to move things around but is usually less accurate.


In order to rotate something, first select the object with RMB then hit TAB to switch to rotation. Pressing the same keys QWEASD will start to manipulate the rotation of the object. If you want to switch back to position, press SHIFT + TAB to go backwards. Feel free to TAB through all the various attributes you can manipulate in edit mode.


#### Step 6: Save and Export

Changes you make to the scene with the visual editor are recorded in the markup when you open the code editor (Ctrl+U) and hit Load. You can also make changes directly into the code editor and hit Save to update the 3D scene. If you are working in a local HTML copy, hitting Save will overwrite the contents of the file. If you want to save the current version of the scene to a file, click the hamburger icon on the top right next to the star and go to File > Save-As to name and save a copy to your hard drive as either markup or json.



