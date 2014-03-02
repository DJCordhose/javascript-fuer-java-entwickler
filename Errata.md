Bekannte Fehler
===============

* S.71 "Beispiel" anstatt "Biespiel"
* S.36 Der Kommentar: "//a ist vorhanden und nicht null" ist nicht akkurat, da "a" auch 0, NaN oder "" sein könnte,
  wie auf der Seite davor beschrieben. Die sichere Variante wäre:
  if (typeof a === 'undefined' || a === null) {
  } else {
  }
* S.58: Beispiel oben: Semikolons bei den Funktionsdefinition an der falschen Stelle, so wäre es richtig:
(function () {
    console.log("inner1:" + inner1);

    inner1();

    console.log("inner2:" + inner2);

    function inner1() {
        console.log("Inner1 do");
    }

    var inner2 = function () {
        console.log("Inner2 do");
    };
})();


Danksagungen
------------

Die Fehler auf den Seiten 36 und 58 hat Ralph Engelmann gemeldet. Vielen Dank dafür!

