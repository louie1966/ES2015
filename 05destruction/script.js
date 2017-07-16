'use strict';
// Object Destructuring
var obj = { first: 'Asim', last: 'Hussain', age: 39 };
function getObj() {
    return obj;
}
var _a = getObj(), first = _a.first, last = _a.last;
console.log(first);
console.log(last);
// Array Destructuring
var arr = ['a', 'b'];
var x = arr[0], y = arr[1];
console.log(x);
console.log(y);
// Function Parameter Destructuring
function func(_a) {
    var _b = _a.x, x = _b === void 0 ? 1 : _b;
    console.log(x);
}
func({});
