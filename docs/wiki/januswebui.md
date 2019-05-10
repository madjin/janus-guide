# JanusWeb UI

**NOTE** - this article is a WORK IN PROGRESS, and currently serves only as a dump of information on how the system is developed

## Concepts
The UI is defined in JSON files which specify a number of sections which control dependency loading:
 * includes - pull in other UI configs before processing our own.  Useful for including "apps"
 * templates - HTML templates which can be use by this component
 * css - styling info for this component
 * scripts - javascript for this component, usually defines one or more custom HTML elements which implement the app's behavior

## Default UI
default.json:
```json
{
  "includes": [
    "./apps/splash/splash.json",
    "./apps/popular/popular.json",
    "./apps/partymode/partymode.json",
    "./apps/bookmarks/bookmarks.json",
    "./apps/navigation/navigation.json",
    "./apps/buttons/buttons.json",
    "./apps/chat/chat.json",
    "./apps/inventory/inventory.json",
    "./apps/avatar/avatar.json",
    "./apps/notifications/notifications.json",
    "./apps/settings/settings.json"
  ],
  "templates": {
    "janusweb.ui": "./default.html"
  },
  "css": [
    "./themes/default.css"
  ],
  "scripts": [
  ]
}
```

default.html
```html
    <ui-panel top="1" left="1">
      <janus-ui-navigation></janus-ui-navigation>
    </ui-panel>
    <ui-window title="Inventory" top="1" right="1">
      <janus-ui-inventory></janus-ui-inventory>
    </ui-window>
    <ui-window title="Chat" bottom="1" left="1">
      <janus-ui-chat></janus-ui-chat>
    </ui-window>
    <ui-panel bottom="1" right="1">
      <ui-buttonbar>
        <ui-button>Share</ui-button>
        <ui-button>Expand</ui-button>
        <ui-button>WebVR</ui-button>
        <ui-button>Config</ui-button>
      </ui-buttonbar>
    </ui-panel>

    <janus-ui-splash></janus-ui-splash>
```

apps/splash/splash.json:
```json
{
  "templates": {
    "janus.ui.splash": "./splash.html"
  },
  "css": [
    "./splash.css"
  ],
  "scripts": [
    "./splash.js"
  ]
}
```
apps/splash/splash.js
```javascript
elation.elements.define('janus.ui.splash', class extends elation.elements.base {
  create() {
    this.innerHTML = elation.template.get('janus.ui.splash');

    this.popular = this.getElementsByTagName('janus-ui-popular')[0];
    this.partymode = this.getElementsByTagName('janus-ui-partymode')[0];
    this.bookmarks = this.getElementsByTagName('janus-ui-bookmarks')[0];

    elation.events.add([this.popular, this.partymode, this.bookmarks], 'select', (ev) => this.handleSelect(ev));

    this.show();

  }
  handleSelect(ev) {
    this.hide();
  }
});
```

apps/splash/splash.html:
```html
<header>
  <img class="logo" src="https://janusvr.com/images/logos/logoonly.png"/>
  <h1>JanusWeb</h1>
  <p>This is the splash screen.  It's got some information about stuff, and helps to orient the player about what is going on.</p>
</header>

<ui-tabs>
  <ui-tab title="Popular Rooms">
    <janus-ui-popular></janus-ui-popular>
  </ui-tab>
  <ui-tab title="Party Mode">
    <janus-ui-partymode></janus-ui-partymode>
  </ui-tab>
  <ui-tab title="Bookmarks">
    <janus-ui-bookmarks></janus-ui-bookmarks>
  </ui-tab>
</ui-tabs>
```
## Extending the UI
If you wish to extend the UI, you can define your own collection of apps, templates, css, and scripts.  Your UI can be a full standalone replacement for the default UI, or you can include and extend the default.  The user can specify a URL to a custom UI config file via the settings UI.

For instance, let's say you have a customized UI that you host on your own server, blah.com.  Your custom UI inherits from the default UI, and adds its own custom UI component, while also overriding some CSS.  You configure your client to load its UI config from https://blah.com/customui.json:

customui.json:
```json
{
  "includes": [
    "https://web.janusvr.com/media/assets/webui/default.json",
    "./mystuff/customapp.json"
  ],
  "templates": {
    "janusweb.ui": "./customui.html"
  },
  "css": [
    "./tweaks.css"
  ],
  "scripts": [
  ]
}
```
This instructs the server to load our default UI, and then load https://blah.com/mystuff/customapp.json as well.  We also override the ```janusweb.ui``` template, which lets us control what gets displayed by default.

# Proposed WebUI Apps
## janus-ui-inventory
An extensible UI for showing "asset palettes", allowing drag-and-drop object creation from multiple sources

![Inventory Mockup](https://i.imgur.com/UYBBd1r.png)

## janus-ui-splash
A splash screen to orient the user and give them some ideas about where to go.

![Splash Screen Mockup](https://i.imgur.com/U680BCJ.png)

## janus-ui-avatar
UI for changing and viewing your avatar

## janus-ui-bookmarks
Grid of bookmarked rooms

## janus-ui-navigation
Main navigation element.  Contains a loading indicator, a URL bar, and notifications into one element.

![Navigation Panel](https://i.imgur.com/xwOdhEo.png)

## janus-ui-notifications
A component for showing messages to the user, triggered by events in the client

## janus-ui-partymode
A list of users whose locations are discoverable

## janus-ui-popular
A grid of currently-popular rooms

![Popular Rooms Mockup](https://i.imgur.com/8UQYT5c.png)

## janus-ui-settings
Dialog for changing client settings

## janus-ui-virtualgamepad
An on-screen virtual gamepad for touchscreen devicees

## janus-ui-chat
Text-based chat UI.  Could possibly integrate a user list and VOIP controls.

## janus-ui-sounds
An interface for changing sound parameters (mute/unmute, set volume, VOIP, etc).  Proposed behavior is that client starts muted by default, and if a room attempts to play a sound while muted, this UI shows a small non-obtrusive notification.
