"use strict";
var set1 = new Set();
set1.add('APPLE');
set1.add('ORANGE');
set1.add('MANGO');
var set2 = new Set()
    .add('APPLE')
    .add('ORANGE')
    .add('MANGO');
var set3 = new Set(['APPLE', 'ORANGE', 'MANGO']);
set2.has('APPLE');
// true
set2.delete('APPLE');
set2.size;
// 2
set2.clear();
set2.size;
// 0
var set5 = new Set();
set5.add('Moo');
set5.size;
// 1
set5.add('Moo');
set5.size;
// 1
var set6 = new Set(['APPLE', 'ORANGE', 'MANGO']);
for (var _i = 0, set6_1 = set6; _i < set6_1.length; _i++) {
    var entry = set6_1[_i];
    console.log(entry);
}
// APPLE
// ORANGE
// MANGO 
