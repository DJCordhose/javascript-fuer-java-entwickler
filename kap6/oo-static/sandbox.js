"use strict";

function Person(name) {
    this.name = name;
}

/**
 * Der Lieblingsname aller Personen
 *
 * @type {string}
 * @static
 */
Person.lieblingsName = "Olli";

/**
 * Liefert den Lieblingsnamen aller Personen.
 *
 * @returns {string}
 * @static
 */
Person.getLieblingsName = function () {
    return Person.lieblingsName;
};

console.log(Person.lieblingsName);
// => "Olli";
console.log(Person.getLieblingsName());
// => "Olli";
