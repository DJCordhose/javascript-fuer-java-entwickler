Bekannte Fehler
===============

* S.71 "Beispiel" anstatt "Biespiel"
* S.36 Der Kommentar: "//a ist vorhanden und nicht null" ist nicht akkurat, da "a" auch 0, NaN oder "" sein könnte,
  wie auf der Seite davor beschrieben. Die sichere Variante wäre
  if (typeof a === 'undefined' || a === null) {
  } else {
  }


