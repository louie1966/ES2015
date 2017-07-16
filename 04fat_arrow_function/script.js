'use strict';
setTimeout(function () {
    console.log("setTimeout called!");
}, 1000);
setTimeout(function () { return console.log("setTimeout called!"); }, 1000);
var add = function (a, b) { return a + b; };
console.log(add(1, 2));
var obj = {
    name: "Asim",
    sayLater: function () {
        var _this = this;
        setTimeout(function () { return console.log("" + _this.name); }, 1000);
    }
};
obj.sayLater();
