"use strict";

// Global

var person = "Olli";
console.log(this.person);
// => "Olli"
console.log(this === window);
// => true
console.log(this.person === window.person);
// => true

// new

var thisInnerhalbKonstruktor;
function Person(name) {
    this.name = name;
    thisInnerhalbKonstruktor = this;
    // return this; // implizit
}

var olli = new Person("Olli");
console.log(olli === thisInnerhalbKonstruktor);

// Direkter Methodenaufruf

function Person(name) {
    this.name = name;
}
var olli = new Person("Olli");
Person.prototype.getName = function () {
    return this.name;
};

var oma = {
    name: "Oma"
};

var unbekannt = {
};

console.log(olli.getName());
// => "Olli";

oma.getName = olli.getName;
console.log(oma.getName());
// => "Oma";

unbekannt.getName = olli.getName;
console.log(unbekannt.getName());
// => undefined;
