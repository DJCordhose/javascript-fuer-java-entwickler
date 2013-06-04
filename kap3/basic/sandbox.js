"use strict";

function meineErsteFunktion() {
    console.log("Toll!");
}
meineErsteFunktion();

var meineZweiteFunktion = function() {
    console.log("Auch toll!");
};
meineZweiteFunktion();


console.log(typeof meineErsteFunktion);
// => function
console.log(meineErsteFunktion instanceof Object);
// => true
console.log(meineErsteFunktion instanceof Function);
// => true


/**
 * Erhöht die Eingabe um 1.
 *
 * @param {number} num die zu erhöhende Eingabe
 * @returns {number} die um 1 erhöhte Eingabe
 */
function incr(num) {
    return num + 1;
}

console.log(incr(1));

/**
 * Liefert die nächste Zahl.
 *
 * @param {number} [num=0] die vorherige Zahl (optional)
 * @returns {number} die nächste Zahl
 */
function next(num) {
    return (num || 0) + 1;
}

console.log("Next ohne Paramter: " + next());
console.log("Next von 1: " + next(1));

/**
 * Summiert alle Parameter auf.
 *
 * @param {...number} summanden
 * @returns {number} die Summe
 */
function sum(summanden) {
    var sum = 0;
    console.log("Länge von arguments: " + arguments.length);
    for (var index in arguments) {
        sum += arguments[index];
    }
    return sum;
}
console.log("Summe: " + sum(1, 2, 3, 4, 5));


