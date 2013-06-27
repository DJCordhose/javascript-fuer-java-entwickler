"use strict";

var array = [1, 2, 3, 4, 5];
console.log("forEach");
array.forEach(function (e) {
    console.log(e);
});
// => 1
// => 2
// => 3
// => 4
// => 5

console.log("filter: nur die ungerade Zahlen");
array.filter(function (e) {
    return e % 2 !== 0;
}).forEach(function (e) {
        console.log(e);
});
// => 1
// => 3
// => 5

console.log("map/reduce: Summer aller Qudarate");

var summe = array.map(function (e) {
    return e * e;
}).reduce(function (reduziert, aktuellesElement) {
    console.log("reduziert: " + reduziert + ", element: " + aktuellesElement);
    return reduziert + aktuellesElement;
});
console.log(summe);
// => 55