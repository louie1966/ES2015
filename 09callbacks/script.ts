function doAsyncTask1(cb) {
    setTimeout(() => {
        console.log("Async Task Calling Callback");
        cb();
    }, 1000);
}
doAsyncTask1(() => console.log("Callback Called"));

var promise1 = new Promise((resolve, reject) => {
});

var promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Work Complete");
        resolve();
    }, 1000);
});

function doAsyncTask2() {
    var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async Work Complete");
            resolve();
        }, 1000);
    });
    return promise;
}

function doAsyncTask3() {
    var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Async Work Complete");
            if (error) {
                reject();
            } else {
                resolve();
            }
        }, 1000);
    });
    return promise;
}

doAsyncTask3().then(() => console.log("Task Complete!"));

doAsyncTask3().then(
    () => console.log("Task Complete!"),
    () => console.log("Task Errored!"),
);

let error = true;
function doAsyncTask4() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (error) {
                reject('error'); // pass values
            } else {
                resolve('done'); // pass values
            }
        }, 1000);
    });
}
doAsyncTask4().then(
    (val) => console.log(val),
    (err) => console.error(err)
);

let promise3 = Promise.resolve('done');

let promise4 = Promise.reject('fail');

let promise5 = Promise.resolve('done');
promise5.then((val) => console.log(val)); // 'done'

Promise.resolve("done")
    .then(
    (val) => {
        console.log(val);
        return 'done2';
    },
    (err) => console.error(err)
    )
    .then(
    (val) => console.log(val),
    (err) => console.error(err)
    );
// 'done'
// 'done2'

Promise.reject('fail')
    .then((val) => console.log(val))
    .then(
    (val) => console.log(val),
    (err) => console.error(err)
    );

Promise.resolve('done')
    .then((val) => {
        throw new Error("fail")
    })
    .then(
    (val) => console.log(val),
    (err) => console.error(err)
    );
// [Error: fail]

Promise.resolve('done')
    .then((val) => { throw new Error("fail") })
    .then((val) => console.log(val))
    .catch((err) => console.error(err));