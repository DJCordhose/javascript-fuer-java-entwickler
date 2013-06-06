"use strict";


// Das gibt eine Überraschung!
var numbers = [1, 2, 3, 4, 5]
var sum = 0;
for (var number in numbers) {
    sum += number;
}
console.log("Summe: " + sum);

// So meinten wir es eigentlich
var numbers = [1, 2, 3, 4, 5]
var sum = 0;
for (var index in numbers) {
    sum += numbers[index];
}
console.log("Summe: " + sum);
