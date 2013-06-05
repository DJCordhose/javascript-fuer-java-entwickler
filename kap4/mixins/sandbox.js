"use strict";

function _extends(_sub, _super) {
    var IntermediateProto = function () {};
    IntermediateProto.prototype = _super.prototype;
    _sub.prototype = new IntermediateProto();
    _sub.prototype.constructor = _sub;
}

function _mixin(_sub, _super) {
    for (var p in _super.prototype) {
        if (_super.prototype.hasOwnProperty(p)) {
            _sub.prototype[p] = _super.prototype[p];
        }
    }
}

/**
 * Erzeugt eine Person.
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
 * Erzeugt eine Person, die nur eine Tätigkeit zur Zeit ausführen kann.
 *
 * @param {string} gender das Geschlecht per Person
 * @constructor
 */
function SingleTasker(gender) {
    this.standardAction = gender === 'Male' ? 'sleep' : 'shop';
}
/**
 * Führt eine Tätigkeit aus.
 *
 * @param {string=} action die auszuführende Tätigkeit (optional)
 */
SingleTasker.prototype.doExclusively = function(action) {
    console.log("Doing exclusively: " + (action || this.standardAction));
};

/**
 * Erzeugt eine männliche Person.
 *
 * @param {string} name der Name der Person
 * @constructor
 * @extends Person
 * @extends SingleTasker
 */
function Male(name) {
    Person.call(this, name, "Male");
    SingleTasker.call(this, "Male");
}
_extends(Male, Person);
_mixin(Male, SingleTasker);

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

// Wir sind nun aber auch ein SingleTasker!
olli.doExclusively('eat');
olli.doExclusively();
