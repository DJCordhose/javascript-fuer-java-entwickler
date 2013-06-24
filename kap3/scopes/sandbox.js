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
console.log(typeof b);
// => undefined

// Die ausführliche Version
var anonFunc = function() {
    var b = 10;
    console.log("Noch bin ich da: " + b);
}

anonFunc();
console.log(typeof b);
// => undefined


// Verschachtelte Sichtbarkeitsbereiche
console.log("Verschachtelte Sichtbarkeitsbereiche");
(function(){
    var b = 10;
    console.log("Noch bin ich da: " + b);
    (function(){
        var c = "c";
        console.log("c ist im inneren da: " + c);
        console.log("Im inneren ist b immer noch da: " + b);
    })();
    console.log("Innere Variablen sind im äußeren unbekannt: ");
    console.log(typeof c);
// => undefined
})();
