"use strict";

function _extends(_sub, _super) {
    var IntermediateProto = function () {};
    IntermediateProto.prototype = _super.prototype;
    _sub.prototype = new IntermediateProto();
    _sub.prototype.constructor = _sub;
}

/**
 * Erzeugt eine Person
 *
 * @param {string} name der Name der Person
 * @param {string} gender das Geschlecht
 * @constructor
 */
function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}

/**
 * Gibt den Namen der Person zurück.
 *
 * @returns {string}
 */
Person.prototype.getName = function () {
    return this.name;
};

/**
 * Erzeugt eine männliche Person.
 *
 * @param name
 * @constructor
 * @extends Person
 */
function Male(name) {
    Person.call(this, name, "Male");
}
_extends(Male, Person);
/**
 * Gibt den Namen einer männlichen Person zurück.
 *
 * @returns {string} der Name der Person
 * @override
 */
Male.prototype.getName = function () {
    return "Mr " +
        Person.prototype.getName.call(this);
}

/**
 * @type {Male}
 */
var olli = new Male("Olli");
console.log(olli.getName());
// => "Mr Olli"
console.log(olli.gender);
// => "Male"
console.log(olli instanceof Male);
// => true
console.log(olli instanceof Person);
// => true
console.log(olli instanceof Object);
// => true