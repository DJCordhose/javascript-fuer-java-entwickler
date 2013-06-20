"use strict";

var thisInnerhalbKonstruktor;
function Person(name) {
    this.name = name;
    thisInnerhalbKonstruktor = this;
    // return this; // implizit
}

var olli = new Person("Olli");
console.log(olli === thisInnerhalbKonstruktor);
