"use strict";

var a = 10, b;
console.log(a);
console.log(b);
b = 100;
console.log(b);

var obj = {a: 10};
console.log(obj);

var array = [10];
console.log(array);

console.log(typeof a);
console.log(typeof b);
console.log(typeof obj);
console.log(typeof array);

// Typen können sich ändern
console.log("Änderung des Variablentyps:")

var c;
c = 10;
console.log(typeof c);
c = true;
console.log(typeof c);
c = {wert: 10}
console.log(typeof c);


