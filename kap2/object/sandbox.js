"use strict";

var obj1 = {};

var obj2 = {
    name1: "Wert1",
    name2: "Wert2",
    "Beliebiger String": "Wert3"
};

console.log(obj2.name1);
// => "Wert1"
console.log(obj2["Beliebiger String"]);
// => "Wert3"

obj2.name1 = "Neuer Wert";
console.log(obj2.name1);
// => "Neuer Wert"
obj2.func = function() { return "Called"; };

var obj3 = {
    name1: "Wert1",
    name2: "Wert2",
    bool: true,
    zahl1: 10,
    ref1: obj2, // Referenz auf obj2
    ref2: { name: "Neues Objekt" }
};
obj3.zahl1 = "zahl1 ist nun ein String!";
delete obj3.bool;
console.log(obj3.bool);
// => undefined

