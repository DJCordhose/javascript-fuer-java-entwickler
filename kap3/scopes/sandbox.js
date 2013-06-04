"use strict";

// Blöcke spannen keine Sichtbarkeitsbereiche auf
{
    var a = 10;
}
// Hoppla!
console.log(a); // => 10

// So macht man Sichtbarkeitsbereiche
(function(){
  var b = 10;
  console.log("Noch bin ich da: " + b);
})();
// => ReferenceError: a is not defined
//console.log(b);

// Die ausführliche Version
var anonFunc = function() {
    var b = 10;
    console.log("Noch bin ich da: " + b);
}

anonFunc();
console.log(b);
