# lorem-picsum

### A simple wrapper for [picsum.photos](https://picsum.photos/).

## Installation:

Just install via npm:

```bash
npm install --save lorem-picsum
```

## Usage:

You can use `require`

```javascript
const loremPicsum = require("lorem-picsum");
```

or `import`

```javascript
import loremPicsum from "lorem-picsum";
```

depending on the version of JavaScript you are using.

The `lorem-picsum` package exports a single function which takes an options object. The only required option is `width`, all others are optional:

Possible options are:

- `width` (number)
- _`height`_ (number)
- _`image`_ (number)
- _`grayscale`_ (boolean)
- _`random`_ (boolean)
- _`blur`_ (boolean)
- _`gravity`_ (string, one of "east", "north", "south", "west" or "center")

Note: `random` is ignored if `image` is supplied.

## Examples:

These are the examples given from the [Lorem Picsum](https://picsum.photos/) website.

### Basic Image

![basic image](https://picsum.photos/200/300)

```javascript
// gets an image with a specific width and height:
// returns "https://picsum.photos/200/300"
loremPicsum({
  width: 200,
  height: 300
});
```

### Square Image

![crop gravity image](https://picsum.photos/200)

```javascript
// get an square image:
// (returns "https://picsum.photos/200")
loremPicsum({
  width: 200
});
```

### Random Image

![crop gravity image](https://picsum.photos/200/300/?random)

```javascript
// get a random image:
// (returns "https://picsum.photos/200/300/?random")
loremPicsum({
  width: 200,
  height: 300,
  random: true
});
```

### Grayscale Image

![crop gravity image](https://picsum.photos/g/200/300)

```javascript
// get a grayscale image:
// (returns "https://picsum.photos/g/200/300")
loremPicsum({
  width: 200,
  height: 300,
  grayscale: true
});
```

### Specific Image

![crop gravity image](https://picsum.photos/200/300/?image=0)

```javascript
// get a specific image:
// (returns "https://picsum.photos/200/300/?image=0")
loremPicsum({
  width: 200,
  height: 300,
  image: 0
});
```

### Blurred Image

![crop gravity image](https://picsum.photos/200/300/?blur)

```javascript
// get a blurred image:
// (returns "https://picsum.photos/200/300/?blur")
loremPicsum({
  width: 200,
  height: 300,
  blur: true
});
```

### Crop Gravity

![crop gravity image](https://picsum.photos/200/300/?gravity=east)

```javascript
// get an image with the crop gravity set
// (returns "https://picsum.photos/200/300/?gravity=east")
loremPicsum({
  width: 200,
  height: 300,
  gravity: "east"
});
```
