"use strict";

var obj = {};
console.log(obj.toString());
// => [object Object]

console.log(obj instanceof Object);
// => true

console.log(typeof Object);
// => "function"

console.log(typeof Object.prototype);
// => "object"
console.log(typeof Object.prototype.toString);
// => "function"


console.log(Object.getPrototypeOf(obj) === Object);
// => false

console.log(Object.getPrototypeOf(obj) === Object.prototype);
// => true


