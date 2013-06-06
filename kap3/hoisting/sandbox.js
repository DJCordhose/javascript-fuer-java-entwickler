"use strict";

// var
(function() {
    console.log("Hoisted var vor Deklaration: " + hoisted);
    // => undefined
    var hoisted = 10;
    console.log("Hoisted var nach Initialisierung: " + hoisted);
    // => 10
})();

// normalisiert
(function() {
    var hoisted;
    console.log("Hoisted var vor Deklaration: " + hoisted);
    // => undefined
    hoisted = 10;
    console.log("Hoisted var nach Initialisierung: " + hoisted);
    // => 10
})();


// func
(function() {
    console.log("func inner1 vor Deklaration: " + inner1);
    // => function inner1() {}
    console.log("func inner2 vor Deklaration: " + inner2);
    // => undefined
    var inner1 = function() {};
    function inner2() {}
})();
