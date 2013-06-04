"use strict";

function execute(func, a) {
    func(a);
}

function executeCall(func, a) {
    func.call(null, a);
}

function executeApply(func) {
    func.apply(null, arguments.slice(1));
}

function basic(a) {
    console.log(a)
}

execute(basic, "Super!");
executeCall(basic, "Super!");
executeApply(basic, "Super!");