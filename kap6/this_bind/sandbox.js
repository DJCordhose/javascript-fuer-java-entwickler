"use strict";

var oma = {
    name: "Oma"
};
function fullName(title, lastName) {
    return title + " " + this.name + " " + lastName;
}

var bound1 = fullName.bind(oma);
var fullName1 = bound1("Frau", "Torbogen");
console.log(fullName1);
// => Frau Oma Torbogen

var bound2 = fullName.bind(oma, "Frau", "Torbogen");
var fullName2 = bound2();
console.log(fullName2);
// => Frau Oma Torbogen

var opa = {
    name: "Opa"
};
// this kann nicht neu gebunden werden
var fullName3 = bound2.call(opa);
console.log(fullName3);
// => Frau Oma Torbogen
