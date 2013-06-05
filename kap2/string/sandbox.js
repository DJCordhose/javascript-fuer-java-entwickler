"use strict";

var string1 = "Zeichenkette!";
console.log(typeof string1);
// => string
var string2 = 'Geht auch!';


var s1 = "Hallo, ";
var s2 = "Olli";

var s3 = s1 + s2;
console.log(s3);
// => "Hallo, Olli";

var c1 = s3[1];
console.log(c1);
// => "a"
console.log(typeof c1);
// => "string"
console.log(s3.charAt(1) === c1);
// => true

// kann viel schneller sein als +
var builder = ["a", "b", "c"];
var s4 = builder.join("");
console.log(s4);
// => "abc";


