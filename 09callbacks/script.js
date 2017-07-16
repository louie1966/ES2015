"use strict";
function doAsyncTask1(cb) {
    setTimeout(function () {
        console.log("Async Task Calling Callback");
        cb();
    }, 1000);
}
doAsyncTask1(function () { return console.log("Callback Called"); });
var promise1 = new Promise(function (resolve, reject) {
});
var promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Async Work Complete");
        resolve();
    }, 1000);
});
function doAsyncTask2() {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Async Work Complete");
            resolve();
        }, 1000);
    });
    return promise;
}
function doAsyncTask3() {
    var promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Async Work Complete");
            if (error) {
                reject();
            }
            else {
                resolve();
            }
        }, 1000);
    });
    return promise;
}
doAsyncTask3().then(function () { return console.log("Task Complete!"); });
doAsyncTask3().then(function () { return console.log("Task Complete!"); }, function () { return console.log("Task Errored!"); });
var error = true;
function doAsyncTask4() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (error) {
                reject('error'); // pass values
            }
            else {
                resolve('done'); // pass values
            }
        }, 1000);
    });
}
doAsyncTask4().then(function (val) { return console.log(val); }, function (err) { return console.error(err); });
var promise3 = Promise.resolve('done');
var promise4 = Promise.reject('fail');
var promise5 = Promise.resolve('done');
promise5.then(function (val) { return console.log(val); }); // 'done'
Promise.resolve("done")
    .then(function (val) {
    console.log(val);
    return 'done2';
}, function (err) { return console.error(err); })
    .then(function (val) { return console.log(val); }, function (err) { return console.error(err); });
// 'done'
// 'done2'
Promise.reject('fail')
    .then(function (val) { return console.log(val); })
    .then(function (val) { return console.log(val); }, function (err) { return console.error(err); });
Promise.resolve('done')
    .then(function (val) {
    throw new Error("fail");
})
    .then(function (val) { return console.log(val); }, function (err) { return console.error(err); });
// [Error: fail]
Promise.resolve('done')
    .then(function (val) { throw new Error("fail"); })
    .then(function (val) { return console.log(val); })
    .catch(function (err) { return console.error(err); });
