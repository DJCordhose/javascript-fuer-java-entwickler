"use strict";

/**
 * Enumeration für das Geschlecht.
 *
 * @enum {string}
 */
var Geschlecht = {
    MALE: "M",
    FEMALE: "F"
};

/**
 * @type {Geschlecht}
 */
var g = Geschlecht.MALE;
console.log(g);
// => "M"
g = Geschlecht.FEMALE;
console.log(g);
// => "F"

// WebStorm mag das nicht, weil der Typ nicht passt
// ausführen kann man das dennoch
g = 6;
console.log(g);
// => 6
