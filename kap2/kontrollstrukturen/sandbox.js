"use strict";

var obj = 1;

switch (obj) {
    case "1":
        console.log("Kämen wir hier an, dann würde auch unexekter Match wie bei == gehen (ist aber nicht so)");
        break;
    default:
        console.log("Nur exakter Match wie bei ===");
        break;
}

console.log(obj ? "Ja" : "Nein");

for (var i = 0; i < 10; i++) {
    console.log(i);
}