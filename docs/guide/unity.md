# Exporting Unity to JanusVR

### What you'll need:

- [Unity 5.6](https://unity3d.com/get-unity/download)
- [JanusVR](http://janusvr.com/download.php)
- [Exporter](https://github.com/JamesMcCrae/janusvr_utils/releases/tag/unity-latest)

#### **Watch this first!!**

<a href="http://www.youtube.com/watch?feature=player_embedded&v=1cxy5OXap0A
" target="_blank"><img src="http://img.youtube.com/vi/1cxy5OXap0A/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="846" height="468" /></a>


***

### Setup

1. With Unity open, create a new project and then search for Tanks Tutorial in the Asset Store (ctrl+9) then search, download, and import the entire package.

![Import Tanks Tutorial](https://i.imgur.com/AVbKVhD.jpg)

2. Double click Complete-Game.unity at the [bottom](https://i.imgur.com/j4WEZ0Y.jpg) then view with the scene tab. Next, click Assets at the top and Import Package -> Custom Package and import all from the latest JanusVRExporter.

![Import custom package](https://i.imgur.com/lKV5KmO.jpg)

3. Open Window -> JanusVR Exporter and drag the tab over to the right side of Unity where Inspector is. Here’s what it should look like now.

![JanusVR Exporter Panel](https://i.imgur.com/2B9WcgT.jpg)

***

### Project Management

![Stay organized](https://i.imgur.com/lynnS8D.jpg)

1. Go to Edit -> Project Settings -> Player (1) then rename Product Name (2) to something, like TanksJanus

2. Now go to back to the Janus tab and click Reset Parameters at the bottom and your export path should update. You can choose a different export path if you wish but saving to a workspaces folder allows for a faster iterative workflow with Janus.

3. To quickly see a preview, do a Full Export now and open JanusVR to see the HTML now in your bookmarks tab at the top right (scroll all the way to the bottom).

![Bookmarks](https://i.imgur.com/3hV1zy5.jpg)

Window -> Code Editor or Ctrl+U will open the code editor if you wish to inspect the markup. By default we have pretty good results but we should add proper lighting.

***

### Lights and Shadows

1. On the left side of the screen below Hierarchy search for light and click Directional light. In the inspector underneath Light change the Mode from Realtime -> Mixed.

![Add directional light](https://i.imgur.com/gLOBeP8.jpg)

2. Now we need to change all the meshes to static. Back underneath Hierarchy search for meshrenderer (1) and ctrl+a to select all and view the Inspector to make sure the static checkboxes (2) are filled.

![Check the boxes](https://i.imgur.com/U0CY6tv.jpg)

3. To make sure we can Generate Lightmaps for all the objects you first open the Project tab on the bottom and open Assets -> Models. Next, drag and highlight or Ctrl-A to select all the models (1). Now underneath Inspector you click Game Objects then check the box for Generate Lightmap and apply. If the box is already checked then you're good to go.

![Generate lightmap](https://i.imgur.com/55wGX7N.jpg)

4. In Lighting tab, Disable Realtime Global Illumination and enable Baked Global Illumination with Lighting Mode as Subtractive(1).

![Final settings](https://i.imgur.com/cPiLMAC.jpg)

A. Change Indirect Resolution to 1
B. Change Lightmap Resolution to 5
C. Compress Lightmaps
D. Change to Non-Directional Mode 

Now press Generate Lighting!

***

### Final Export

There's a few important settings in the JanusExporter tab to know about before you press the button. The first is called Exported Textures Format located underneath Textures which you can set to png for higher quality. You can also choose to Export Skybox which can make it easier to change later.

When everything looks good, hit the Full Export button and preview your site with the lightmaps in now in Janus. Grats, hope you found this tutorial useful!

![View in JanusVR](https://i.imgur.com/8e66zUm.jpg)

