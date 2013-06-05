"use strict";

/**
 * Erzeugt einen neue Person.
 *
 * @param {string} name der Name der Person
 * @constructor
 */
function Person(name) {
    this.name = name;
}
var olli = new Person("Olli");
console.log(olli.name);
// => "Olli"
console.log(olli.toString());
// => [object Object]

/**
 * Gibt den Namen der Person.
 *
 * @returns {string}
 */
Person.prototype.getName = function () {
    return this.name;
};

var olli = new Person('Olli');
/**
 * @type {string}
 */
var name = olli.getName();
console.log(name);
// => "Olli"

console.log(olli.prototype);
// => undefined
console.log(Object.getPrototypeOf(olli) === Person.prototype);
// => true

console.log(olli.constructor === Person);
// => true
console.log(olli instanceof Person);
// => true
console.log(olli instanceof Object);
// => true
