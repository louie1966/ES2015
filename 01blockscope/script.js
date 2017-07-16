"use strict";
/* let */
var funcs = [];
var _loop_1 = function (i) {
    funcs.push(function () {
        console.log(i);
    });
};
for (var i = 0; i < 5; i += 1) {
    _loop_1(i);
}
funcs.forEach(function (func) {
    func();
});
