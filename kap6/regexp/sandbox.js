"use strict";

var regexp = /ab+c/;

// oder

var regexp = new RegExp("ab+c");

// Das passt nicht
var res = regexp.exec("Prefix abbbb");
console.log(res);
// => null

// Das passt
var res = regexp.exec("Prefix abbbbc Suffix");
console.log(res);
// => ["abbbbc", index: 7, input: "Prefix abbbbc Suffix"]