let array1 = [1, 2, 3];
for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
}

let array2 = [1,2,3];
array2.forEach(function (value) {
console.log(value);
});
// 1
// 2
// 3

var obj = {a:1,b:2};
for (let prop in obj) {
console.log(prop);
}
// a
// b

let array3 = [10,20,30];
for (let index in array3) {
console.log(index);
};
// 0
// 1
// 2

let array4 = [10,20,30];
for (let index in array4) {
console.log(typeof(index));
};
// string
// string
// string

let array5 = [10,20,30];
for (var value of array5) {
console.log(value);
}
// 10
// 20
// 30