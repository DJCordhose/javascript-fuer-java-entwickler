"use strict";

// Global

// Direkter Methodenaufruf

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
oma.getName = olli.getName;
console.log(oma.getName());
// => "Oma";

var unbekannt = {
};


unbekannt.getName = olli.getName;
console.log(unbekannt.getName());
// => undefined;
