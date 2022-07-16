# Basic Curry function

### Instal
`npm i fup-curry`

### Example

```
import curry from 'fup';

const add  = (y, x) => y + x; // function (x);
const addC = curry(addStr);   // function (x);
const addA = addC("A");       // function (x);
const AB   = addA("B");       // "AB";
const AC   = addA("Name");    // "AC";

const ab   = addC("a", "b");  // "ab";
```
