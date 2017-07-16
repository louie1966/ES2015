"use strict";
var array1 = [1, 2, 3];
for (var i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}
var array2 = [1, 2, 3];
array2.forEach(function (value) {
    console.log(value);
});
// 1
// 2
// 3
var obj = { a: 1, b: 2 };
for (var prop in obj) {
    console.log(prop);
}
// a
// b
var array3 = [10, 20, 30];
for (var index in array3) {
    console.log(index);
}
;
// 0
// 1
// 2
var array4 = [10, 20, 30];
for (var index in array4) {
    console.log(typeof (index));
}
;
// string
// string
// string
var array5 = [10, 20, 30];
for (var _i = 0, array5_1 = array5; _i < array5_1.length; _i++) {
    var value = array5_1[_i];
    console.log(value);
}
// 10
// 20
// 30 
