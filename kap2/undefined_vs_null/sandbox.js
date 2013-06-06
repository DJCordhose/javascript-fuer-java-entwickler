"use strict";

var obj = {
    a: null,
    b: undefined,
    d: "d",
    e: "e"
};

console.log(typeof obj.a);
// => "object"
console.log(typeof obj.b);
// => "undefined"
console.log(typeof obj.c);
// => "undefined"

obj.d = null;
console.log(typeof obj.d);
// => "object"

obj.e = undefined;
console.log(typeof obj.e);
// => "undefined"

console.log(undefined == undefined);
console.log(null == null);
console.log(null == undefined);

console.log(undefined === undefined);
console.log(null === null);
console.log(null !== undefined);
console.log(typeof(gibtEsNicht) === "undefined");
console.log(typeof(undefined) === "undefined");
console.log(typeof(null) === "object");
