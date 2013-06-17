"use strict";

try {
    throw "Fehler";
    // oder
    throw new Error("Fehler");
} catch (e) {
    console.log("Gefangen: " + e);
} finally {
    console.log("Wird immer durchlaufen");
}