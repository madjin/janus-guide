# Create a UI app

UI Apps are packages which users can add to their client to extend its functionality.  These allow you to add more advanced capabilities to the client, in a way which allows the user to bring these tools with them to other worlds.  Apps can be used to provide improved editing functionality, bring in data from external sources, display information about the world or the player, or layer additional functionality such as VOIP, screen capture, streaming, etc.

JanusWeb comes with a default set of apps, which provide the basic functionality of the client.  These include apps like navigation, which provides a smart URL bar with a loading progress indicator and built-in autosuggest; chat, which provides text chat functionality; or inventory, which lets users access 3D models from Google Poly, or other data sources.

In addition to the included apps, users can install apps from third parties.  This opens up the platform to allow other users to improve the functionality of the client without having to modify the engine, and they can share their apps with other users and try out new ways of interacting.

Creating a custom app is simple if you already know some basic HTML and Javascript - you can build your apps out of standard HTML elements.  In addition, we take advantage of HTML5 Web Components features, which allow us to define new HTML elements which extend the browser's built-in functionality.  

For example, HTML doesn't have a tag which represents a tabbed content control.  If you want tabs in HTML, you have to build them out of other elements, style them, and attach some JS to them.  Web Components let us define a new custom HTML element, ```<ui-tabs>```, and then we can define any number of ```<ui-tab label="My Tab">...</ui-tab>``` elements within it.  This makes it super easy to reuse these controls as many times as you want on a page - they can be nested and arranged to create more complex UIs out of the basic building blocks.

## Defining your App
#### myapp.json
We start with a JSON file which tells us what files and dependencies are involved in making this app.  We'll start with the most basic possible app, which consists of one JS and one CSS file.  Within this app, we'll be defining one component, an HTML element named ```<myapp-confabulator>```.
```json
{
  "apps": {
  },
  "templates": {
  },
  "scripts": [
    "./myapp.js"
  ],
  "css": [
    "./myapp.css"
  ],
  "components": [
    "myapp-confabulator"
  ]
}
```

#### myapp.js
Within the JS file, we're going to define how our ```<myapp-confabulator>``` element looks and works.  We'll start off just making it display some simple text, which will change when we click anywhere on the element.
```js
elation.elements.define('myapp-confabulator', class extends elation.elements.base {
  // The init function gets called to define the object, and is used to define any attributes the element has
  // Don't forget to call super.init() to set up any attributes which we've inherited!
  init() {
    super.init();
    this.defineAttributes({
      'done': { type: 'boolean', default: false }
    });
  }
  // The create function gets called for each instance of this element as it's added to the page
  create() {
    this.innerHTML = 'Hello world!';

    // Set up an event listener for the 'click' handler.  All standard DOM events can be handled this way,
    // as well as any custom events that this component might fire in response to some change
    this.addEventListener('click', (ev) => this.handleClick(ev));
  }
  handleClick(ev) {
    console.log('I was clicked!');
    this.innerHTML = 'Goodbye everybody';
    this.done = true;
  }
});
```
#### myapp.css

Last but not least, we'll want to style our component.  If we're composing something more complex using the built-in UI components (more on that later) this step may not be necessary for every element you define - but the option is there to tweak to your heart's content!

```css
/* 
 * We've defined a new HTML element, <myapp-confabulator>, so our selector is an element selector
 * No classes or id necessary, but of course, always supported!
*/
myapp-confabulator {
  display: block;
  border: 1px solid black;
  background: #900;
  padding: .5em;
}
/* Attribute-based selectors are very useful for styling the various states of our custom element */
myapp-confabulator[done] {
  background: #090;
}
```

## Installing Your App
Ok, we've got our app defined.  Great!  Now we have to install it so we can use it.  To do this, first we need to make the files accessible on the web somewhere.  Just put them all in a directory somewhere, and get the for your app's JSON file.  For our example, we'll say it's hosted at ```https://mysite.com/myapp/myapp.json```.

Open up a JanusWeb client, and go into the settings menu.  Under the UI tab, find the button that says "Add App", and click it.  In the dialog that shows up, enter the URL to your app's json file.  This should download and install the app in your client, and you should now see your ```<myapp-confabulator>``` component in the list of available components.  Click on your new component and drag it out, then drop it into one of the predefined panel areas on the page (top left, top, top right, left, right, bottom left, bottom, bottom right).  Your new component should appear, and you should be able to click it to activate its behavior.

## Next Steps
Ok great - we've got our hello world app working, and installed in our UI.  Next, we'll work on a real example, to show how we can use this sort of app to extend JanusWeb's built in functionality, and to demonstrate how to use the included UI library to build more advanced components out of existing components.  (TODO - link to this article when it's done)
