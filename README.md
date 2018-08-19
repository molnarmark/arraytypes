# Array Types

> Get a beautiful string representation of types inside of an Array.
### Inspiration
To be completely fair, none. I needed a tiny, zero dependency package for a project that would do this, so I decided to create one.

### Usage
```javascript
const ArrayTypes = require('get-array-types')

console.log(ArrayTypes([1, 2, 3, 'Hello', 'World']).toString())
//=> Array<number|string>

console.log(ArrayTypes([1, 'Hello', 2, 'World']).elementTypes())
//=> ['number', 'string']
```

### License
- MIT

Happy Javascripting! 〰️