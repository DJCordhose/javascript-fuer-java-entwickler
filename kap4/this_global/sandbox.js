"use strict";

var person = {name: "Olli"};
console.log(this.person);
// => Object {name: "Olli"}
console.log(person === this.person);
// => true
console.log(this === window);
// => true
console.log(this.person === window.person);
// => true
