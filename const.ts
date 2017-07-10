//const foo1;

const foo2 = 1;
// foo2 = 2; // TypeError: Assignment to constant variable

// function func() {
// if (true) {
// const tmp = 123;
// }
// console.log(tmp); // Uncaught ReferenceError: tmp is not defined
// }
// func();

let foo3 = "foo";
foo3 = "moo";
console.log(foo3);

const foo4 = 'abc';
// foo4 = 'def'; // TypeError: Assignment to constant variable

const foo5 = {};
// foo5 = {}; // TypeError: Assignment to constant variable.

const foo6 = {};
foo6['prop'] = "Moo"; // This works!
console.log(foo6);

"use strict";

const foo7 = Object.freeze({});
foo7.prop = 123;
console.log(foo7.prop) // undefined