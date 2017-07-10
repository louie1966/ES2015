//const foo1;
var foo2 = 1;
// foo2 = 2; // TypeError: Assignment to constant variable
// function func() {
// if (true) {
// const tmp = 123;
// }
// console.log(tmp); // Uncaught ReferenceError: tmp is not defined
// }
// func();
var foo3 = "foo";
foo3 = "moo";
console.log(foo3);
var foo4 = 'abc';
// foo4 = 'def'; // TypeError: Assignment to constant variable
var foo5 = {};
// foo5 = {}; // TypeError: Assignment to constant variable.
var foo6 = {};
foo6['prop'] = "Moo"; // This works!
console.log(foo6);
"use strict";
var foo7 = Object.freeze({});
foo7.prop = 123;
console.log(foo7.prop); // undefined
