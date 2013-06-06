"use strict";

// null

var a = null;
console.log(a);
// => null
console.log(typeof a);
// => "object"

var obj = {a: null};
console.log(obj.a);
// => null

function n(a) {
    console.log(a);
    // => null
}
n(null);