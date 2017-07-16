let set1 = new Set();
set1.add('APPLE');
set1.add('ORANGE');
set1.add('MANGO');

let set2 = new Set()
    .add('APPLE')
    .add('ORANGE')
    .add('MANGO');

let set3 = new Set(['APPLE', 'ORANGE', 'MANGO']);

set2.has('APPLE')
// true

set2.delete('APPLE')

set2.size
// 2

set2.clear();
set2.size
// 0

let set5 = new Set();
set5.add('Moo');
set5.size
// 1

set5.add('Moo');
set5.size
// 1

let set6 = new Set(['APPLE', 'ORANGE', 'MANGO']);
for (let entry of set6) {
    console.log(entry);
}
// APPLE
// ORANGE
// MANGO