- [Assets](https://github.com/madjin/janus-guide/blob/master/docs/build/assets.md)
- [Javascript](https://github.com/madjin/janus-guide/blob/master/docs/build/javascript.md)
- [Rooms](https://github.com/madjin/janus-guide/blob/master/docs/build/room.md)
- [**Server**](https://github.com/madjin/janus-guide/blob/master/docs/build/server.md)

***

# Server APIs

Below are the various JanusVR server APIs available for developers to take advantage of.

## Popular Rooms API

The Popular Rooms API allows developers to find commonly visited webspaces. It can be found here

#### getPopularRooms URL Parameters

- **desc** = true/false- Whether or not the output is sorted in ascending or descending order. Defaults to false.
- **orderBy = lastSeen/weight** - When set to weight, output will be sorted by popularity (their weight). When set to lastSeen, entries most recently visited by a user will be shown first. Defaults to weight.
- **offset = #** - Which starting entry to begin outputting from. Defaults to 0.
- **limit = #** - How many entries above the starting offset to output. Defaults to 20.
- **urlContains = {domainname}** - Only displays entries that contain a certain url. For instance, ?urlContains=vesta.janusvr.com.

#### JSON returned from this API

- **roomName** - The title of the specified room.
- **thumbnail** - The thumbnail associated with this room.
- **roomURL** - The url of the specified room.
- **weight** - How popular the room is. This value raises as more people visit the room, and drops exponentially over time.
- **count** - The number of visits the specified room has received.
- **lastEntered** - When someone last visited this room, output in time since epoch. 

***

## PartyMode API

The PartyMode API allows developers to find users broadcasting their location in real time. It can be found here

#### partymodeAPI URL Parameters

There are currently no parameters for this API. Check back in the future.

#### JSON returned from this API

- **userId** - The broadcaster's userId.
- **roomId** - A hashed version of the broadcaster's current url.
- **url** - The broadcaster's current url.
- **name** - The broadcaster's current location's title. 

