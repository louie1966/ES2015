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
        var a_1 = "block";
    }
    console.log(a);
}
hello4();
var funcs = [];
for (var i = 0; i < 5; i += 1) {
    var y = i;
    funcs.push(function () {
        console.log(y);
    });
}
funcs.forEach(function (func) {
    func();
});
var funcs = [];
var _loop_1 = function () {
    var y_1 = i;
    funcs.push(function () {
        console.log(y_1);
    });
};
for (var i = 0; i < 5; i += 1) {
    _loop_1();
}
funcs.forEach(function (func) {
    func();
});
var funcs = [];
var _loop_2 = function (i_1) {
    funcs.push(function () {
        console.log(i_1);
    });
};
for (var i_1 = 0; i_1 < 5; i_1 += 1) {
    _loop_2(i_1);
}
funcs.forEach(function (func) {
    func();
});
