# Extend the UI

As part of our efforts to improve the JanusWeb UI, now would be a good time to explain how the underlying UI system works.  JanusWeb is built on top of the Elation library, which provides a powerful component-based UI library which can be extended to build interactive elements.  

## Components
Everything in Elation is a "component".  Each of these components perform some specific function.  Components can be controlled programatically via their API, and fires events to notify other parts of the script when their status changes.  Components range from simple elements like ```ui.button``` and ```ui.input```, up to more complex application-specific components like ```janusweb.urlbar```, or ```engine.client```.  Components can inherit from other components, and they can also be composed of other components - for instance, ```janusweb.navigation``` might extend ```ui.panel```, and contain two ```ui.buttons``` and a ```janusweb.urlbar``` (which extends ```ui.input```, and can be used to add more advanced functionality like autocomplete, bookmarking, etc).

Here's a list of build-in components that Elation's UI library offers:

 |                        |                        |                             |                          |                         |
 |------------------------|------------------------|-----------------------------|--------------------------|-------------------------|
 | ```<ui-accordion>```   | ```<ui-combobox>```    | ```<ui-input>```            | ```<ui-panel>```         | ```<ui-tabs>```         |
 | ```<ui-base>```        | ```<ui-content>```     | ```<ui-keyvaluelist>```     | ```<ui-progressbar>```   | ```<ui-textarea>```     |
 | ```<ui-breadcrumbs>``` | ```<ui-contextmenu>``` | ```<ui-label>```            | ```<ui-radial>```        | ```<ui-togglebutton>``` |
 | ```<ui-buttonbar>```   | ```<ui-grid>```        | ```<ui-list>```             | ```<ui-scrollable>```    | ```<ui-toggle>```       |
 | ```<ui-button>```      | ```<ui-iframe>```      | ```<ui-listtest>```         | ```<ui-select>```        | ```<ui-togglepanel>```  |
 | ```<ui-checkbox>```    | ```<ui-image>```       | ```<ui-loader>```           | ```<ui-slider>```        | ```<ui-toolbox>```      |
 | ```<ui-checklist>```   | ```<ui-indicator>```   | ```<ui-loadingindicator>``` | ```<ui-spinner>```       | ```<ui-treeview>```     |
 | ```<ui-colorpicker>``` | ```<ui-infinilist>```  | ```<ui-pagination>```       | ```<ui-tabbedcontent>``` | ```<ui-window>```       |

And here's a list of components JanusWeb provides by default:

 |                                 |                                   |                                   |                                  |
 |---------------------------------|-----------------------------------|-----------------------------------|----------------------------------|
 | ```<janus-ui-navigation>```     | ```<janus-ui-urlbar>```           | ```<janus-ui-notifications>```    | ```<janus-ui-inventory>```          |
 | ```<janus-ui-virtualgamepad>``` | ```<janus-dialog-settings>```     | ```<janus-dialog-share>```        | ```<janus-dialog-avatar>```      |
 | ```<janus-dialog-chat>```       | ```<janus-dialog-bugreport>```    | ```<janus-dialog-source>```       | ```<janus-button-displaymode>``` |
 | ```<janus-button-fullscreen>``` | ```<janus-button-share>```        | ```<janus-button-settings>```     | ```<janus-button-sound>```       |
 | ```<janus-buttons-bugreport>``` |                     



We can use any of these components in our designs, and we can also extend them to add custom functionality if the included components don't fill all of our needs.

## Getting Started: Design
The first step when adding or changing UI elements is to look at the whole design and decide what elements are going to be needed to build it.  We start off with some simple sketches - we divide the screen up into areas where related functionality can be grouped together.  In this case, we want to have some navigation and notification functionality in the top left corner, some buttons for toggling simple actions (fullscreen, WebVR, sound, etc) down at the bottom, and then on the right we want to have a set of pull-out panels for more advanced tools - things like configuration, chat, edit mode tools, or other extensible functionalities.  For the purposes of this article, we'll focus on the navigation and notification section.

Let's take a closer look at this section.  We've got three main components here:
 * A nav bar which shows the title of the current page.  When focused, this should show the URL, and allow the user to change or input new URLs
 * A logo which also serves as a page load indicator.  This logo will be animated in various different ways to indicate the status of the page as it loads.  For instance, when the connection to the server is being established, maybe the logo pulses slowly.  Once we start receiving data, we stop pulsing, and the background starts to fill up with another color to indicate load progress.  Once the page load completes, the logo stops animating, and the background is green.  If any errors occur, the background turns yellow or red.
 * A notification section which displays recent notifications to the user.  Notifications should pop in at the end of the list, show for some number of seconds, and then disappear.  It should be possible to scroll back through previous notifications.

Pretty straightforward, but each of these is going to require its own custom component.  Perfect!  Let's start with the page load indicator.  Given a reference to the active room, we can attach event listeners to get info about the status as the room loads.  The room object is itself a component, which will emit the following events while loading:

 * room_load_queued
 * room_load_start
 * room_load_processing
 * room_load_processed
 * room_load_complete
 * room_load_progress
 * room_add_asset

We'll use these events to set our indicator's HTML class, then we can handle most of the styling for our various states in CSS.
```javascript
elation.elements.define('janus.ui.statusindicator', class extends elation.elements.ui.indicator {
  // The create function is called whenever an instance of this element is added to the page
  create() {
    // Inside of this function, we can create other HTML elements which make up this element.
    // Any basic HTML elements can be used here, as well as other custom elements
    // For example, this particular component has an inner div, which holds a canvas.  It then
    // updates the canvas whenever the state of the room changes, and reflects the loading status
    // graphically.
    this.inner = elation.elements.create('div', {
      class: 'inner',
      append: this
    });
    this.canvas = document.createElement('canvas');
    this.inner.appendChild(this.canvas);

    // Get client references
    this.client = this.getClient();
    this.janusweb = this.client.janusweb;

    // FIXME - the janusweb object should expose addEventListener()
    elation.events.add(this.janusweb, 'room_load_start', (ev) => this.updateCurrentRoom(ev.data));
  }
  // We'll call this function any time the JanusWeb client starts loading a new room
  updateCurrentRoom(room) {
    if (this.room !== room) {
      this.room = room;
      // Set up some event listeners for the new room, so we can respond as it loads
      room.addEventListener('room_load_queued', (ev) => this.updateStatus('queued', ev));
      room.addEventListener('room_load_start', (ev) => this.updateStatus('downloading', ev));
      room.addEventListener('room_load_processing', (ev) => this.updateStatus('processing', ev));
      room.addEventListener('room_load_complete', (ev) => this.updateStatus('complete', ev));
      room.addEventListener('room_load_error', (ev) => this.updateStatus('error', ev));

      // Update our list of assets as they're added
      room.addEventListener('room_load_processed', (ev) => this.updateRoomAssets(ev));
      room.addEventListener('room_load_progress', (ev) => this.updateProgress(ev));
      room.addEventListener('room_add_asset', (ev) => this.roomAddAsset(ev));
    }
  }
  updateStatus(status, ev) {
    if (this.room.parseerror) {
      // Force error status to remain if an error is thrown
      status = 'error';
    }

    // Set our current status as a class name on this element.  Clear our previous status, if set
    if (this.currentstatus && this.currentstatus != status) {
      this.removeclass(this.currentstatus);
    }
    this.addclass(status);
    this.currentstatus = status;

    if (status == 'complete') {
      this.percent = 1;
      this.refresh();
    }
  }

  // This function is called any time we call this.refresh(), which we do any time our data changes
  // The render function runs as part of the browser's render loop, so it is automatically rate limited to 60fps
  render() {
    var canvas = this.canvas;
    var ctx = canvas.getContext('2d');

    // Fit the canvas to the inner container
    canvas.width = this.inner.offsetWidth;
    canvas.height = this.inner.offsetHeight;

    // Draw a circular arc representing the loading progress of the page
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, canvas.height / 2);
    ctx.arc(canvas.width / 2, canvas.height / 2, canvas.width / 2, -Math.PI/2, (2 * Math.PI * this.percent - Math.PI/2));
    ctx.closePath();
    ctx.fillStyle = (this.currentstatus == 'complete' ? 'green' : 'darkgreen');
    ctx.fill();
  }

});
```
