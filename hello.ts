{
    var a = "block";
}
console.log(a);

function hello1() {
    var a = "function";
}
hello1();
console.log(a);

function hello2() {
    var a = "function";
    for (var i = 0; i < 10; i++) {
        var a = "block";
    }
    console.log(a);
}
hello2();

function hello3() {
    var a = "function";
    for (var i = 0; i < 5; i++) {
        (function () {
            var a = "block";
        })();
    }
    console.log(a);
}
hello3();

(function () {
    var a = "block";
})();

console.log(a);

function hello4() {
    var a = "function";
    for (var i = 0; i < 5; i++) {
        let a = "block";
    }
    console.log(a);
}
hello4();

var funcs = [];
for (var i = 0; i < 5; i += 1) {
    var y = i;
    funcs.push(function () {
        console.log(y);
    })
}
funcs.forEach(function (func) {
    func()
});

var funcs = [];
for (var i = 0; i < 5; i += 1) {
    let y = i;
    funcs.push(function () {
        console.log(y);
    })
}
funcs.forEach(function (func) {
    func()
});

var funcs = [];
for (let i = 0; i < 5; i += 1) {
    funcs.push(function () {
        console.log(i);
    })
}
funcs.forEach(function (func) {
    func()
});