"use strict";

function Person(name) {
    this.name = name;
}
var olli = new Person("Olli");
Person.prototype.getName = function () {
    return this.name;
};
console.log(olli.getName());
// => "Olli";


var oma = {
    name: "Oma"
};
console.log(olli.getName.apply(oma));
// => "Oma";
console.log(olli.getName.call(oma));
// => "Oma";

function fullName(title, lastName) {
    return title + " " + this.name + " " + lastName;
}

var fullName1 = fullName.call(oma, "Frau", "Torbogen");
console.log(fullName1);
// => Frau Oma Torbogen
var fullName2 = fullName.apply(oma, ["Frau", "Torbogen"]);
console.log(fullName2);
// => Frau Oma Torbogen
