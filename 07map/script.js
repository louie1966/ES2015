"use strict";
var map1 = new Map();
map1.set("A", 1);
map1.set("B", 2);
map1.set("C", 3);
var map2 = new Map()
    .set("A", 1)
    .set("B", 2)
    .set("C", 3);
var map3 = new Map([
    ["A", 1],
    ["B", 2],
    ["C", 3]
]);
map3.get("A");
// 1
map3.has("A");
// true
map3.delete("A");
// true
map3.size;
// 2
map3.clear();
map3.size;
// 0
var map4 = new Map([
    ["APPLE", 1],
    ["ORANGE", 2],
    ["MANGO", 3]
]);
for (var _i = 0, _a = map4.keys(); _i < _a.length; _i++) {
    var key = _a[_i];
    console.log(key);
}
// APPLE
// ORANGE
// MANGO
for (var _b = 0, _c = map4.values(); _b < _c.length; _b++) {
    var value_1 = _c[_b];
    console.log(value_1);
}
// 1:
// 2
// 3
for (var _d = 0, _e = map4.entries(); _d < _e.length; _d++) {
    var entry = _e[_d];
    console.log(entry[0], entry[1]);
}
// "APPLE" 1
// "ORANGE" 2
// "MANGO" 3
for (var _f = 0, _g = map4.entries(); _f < _g.length; _f++) {
    var _h = _g[_f], key = _h[0], value_2 = _h[1];
    console.log(key, value_2);
}
// "APPLE" 1
// "ORANGE" 2
// "MANGO" 3
for (var _j = 0, map4_1 = map4; _j < map4_1.length; _j++) {
    var _k = map4_1[_j], key = _k[0], value_3 = _k[1];
    console.log(key, value_3);
}
// "APPLE" 1
// "ORANGE" 2
// "MANGO" 3 
