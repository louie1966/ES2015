let map1 = new Map();
map1.set("A", 1);
map1.set("B", 2);
map1.set("C", 3);

let map2 = new Map()
    .set("A", 1)
    .set("B", 2)
    .set("C", 3);

let map3 = new Map([
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

map3.size
// 2

map3.clear()
map3.size
// 0

let map4 = new Map([
    ["APPLE", 1],
    ["ORANGE", 2],
    ["MANGO", 3]
]);

for (let key of map4.keys()) {
    console.log(key);
}
// APPLE
// ORANGE
// MANGO

for (let value of map4.values()) {
    console.log(value);
}
// 1:
// 2
// 3

for (let entry of map4.entries()) {
    console.log(entry[0], entry[1]);
}
// "APPLE" 1
// "ORANGE" 2
// "MANGO" 3

for (let [key, value] of map4.entries()) {
console.log(key, value);
}
// "APPLE" 1
// "ORANGE" 2
// "MANGO" 3

for (let [key, value] of map4) {
console.log(key, value);
}
// "APPLE" 1
// "ORANGE" 2
// "MANGO" 3