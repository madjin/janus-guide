To check out your own copy of JanusWeb, perform the following steps:

```sh
git clone https://github.com/jbaicoianu/janusweb.git
cd janusweb
npm install
```

Once this finishes, you'll have everything needed to build your own JanusWeb client release.  If desired, check the settings in scripts/config.js, then run: 

```sh
npm run build
``` 

This will generate a release in the ```build/``` directory.  Copy this directory recursively to its final location (eg, http://www.myserver.com/janusweb/), and you should be ready to go.

