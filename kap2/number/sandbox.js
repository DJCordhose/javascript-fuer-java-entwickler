"use strict";

var int = 1;
console.log(typeof int);
// => "number";

var float = 1.0;
console.log(typeof float);
// => "number";

var int2 = parseInt("1000.1");
console.log(int2);
// => 1000

var float2 = parseFloat("1000.1");
console.log(float2);
// => 1000.1

console.log(float2.toFixed());
// => "1000"

console.log(float2.toPrecision());
// => "1000.1"

console.log(float2.toFixed(2));
// => "1000.10"

console.log(1 / 0);
// => Infinity
console.log(typeof (1 / 0));
// => "number";

console.log(0 / 0);
// => NaN
console.log(typeof (0 / 0));
// => "number";

console.log(0 / "a");
// => NaN
