"use strict";

var array = ["a", "b", "c"];
console.log(array);
// => ["a", "b", "c"]

var el = array[2];
console.log(el);
// => "c"

array[1] = 20;
console.log(array);
// => ["a", 20, "c"]

console.log(typeof array);
// => "object";

// fügt die 4 am Ende hinzu
array.push(4);
console.log(array);
// => ["a", 20, "c", 4]

// Ab Position 1 werden 2 Elemente entfernt und zurück gegeben
array.splice(1, 2);
console.log(array);
// => ["a", 4]

// An Position 1 werden 0 Elemente entfernt und zurück gegeben
// Zudem wird an Position 1 "x" hinzugefügt
array.splice(1, 0, "x");
console.log(array);
// => ["a", "x", 4]