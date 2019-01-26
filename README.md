# colornamify
## Gives names to colors
Do we still do that thing with -ify?

## Short Description
There are only two real `problems` in computer science: Naming things, cache invalidation, and off-by-one errors. colornamify aims to partially solve `problems[0]` by giving names to to RGB colors.

## Usage
colornamify expects an object containing `r`, `g` and `b` attributes, ranging from 0 to 255. It will return a string with an all lowercase color name.

```javascript
const colornamify = require('colornamify')
let color = {
  r: 65,
  g: 45,
  b:  0,
}
let name = colornamify(color)
// name now contains 'zanzibar'
```

## Notes
- We are currently at **6691 unique color names**, yay!
- Invalid input will result `null` and not throw an error.
- Lookups will be cached for performance.
- Library uses a naive searching algorithm.
- Self-contained, needs no dependencies.
- Conversion between or accepting different color formats is not in the scope - [various solutions](https://www.npmjs.com/search?q=color%20conversion) already exist for this.
- Color names are taken from many sources, check the comments in colors.js
- With the exception of the default CSS named colors, the value of a color is not guaranteed to match the source from which the name is taken. This means do not use this library to *precisely identify* colors.

## Todo
- Check if we can use a more performant algorithm for lookup.

## Shoutout
Big "Thank You!" goes out to [Chirag Mehta](http://chir.ag/) whose work gave me some great ideas on my search for color naming solutions.

## License
MIT
