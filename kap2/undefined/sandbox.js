"use strict";

// undefined

var a;
console.log(a);
// => undefined
console.log(typeof a);
// => "undefined"

if (typeof gibtEsNicht === "undefined") {
    console.log("Gibt es nicht!");
} else {
    console.log("Gibt es!");
}

var obj = {
    a: undefined
};
console.log(obj.a);
// => undefined
console.log(obj.b);
// => undefined

function n(a) {
    console.log(a);
    // => undefined
}
var c = n();
console.log(c);
// => undefined


console.log(gibtEsNicht);
// => Uncaught ReferenceError: gibtEsNicht is not defined