"use strict";

console.log("dog" == "dog");
console.log(1 == true);
console.log(2 != false);
console.log(2 != true);
console.log(0 == false);
console.log(-1 != false);
console.log(-1 != true);
console.log(1 == "1");
console.log(1 == "1.0");
console.log(undefined == undefined);
console.log(null == null);
console.log(null == undefined);

console.log("dog" === "dog");
console.log(1 !== true);
console.log(1 !== false);
console.log(1 === 1);
console.log(1 !== "1");
console.log(-0 === +0);
console.log(1 !== "1");
console.log(undefined === undefined);
console.log(null === null);
console.log(null !== undefined);

console.log("Gleichheit von Objekten")
var obj1 = {};
var obj2 = {};
var obj3 = obj1;
console.log(obj1 === obj1);
console.log(obj1 !== obj2);
console.log(obj1 === obj3);

console.log("Gleichheit von Arrays")
var arr1 = [];
var arr2 = [];
var arr3 = arr1;
console.log(arr1 === arr1);
console.log(arr1 !== arr2);
console.log(arr1 === arr3);
