console.info('Hello World');

let a = 3, b = 2;
console.log(`${a} + ${b} = ${a + b}`); // 3 + 2 = 5

let ar1 = [ 10, 30 ];
let ar2 = [ 20, 'abc'];
let ar3 = [ ...ar1, 5, 6, ...ar2 ];
console.log(ar3); // [ 10, 30, 5, 6, 20, 'abc' ]

let obj1 = { a: 10, b: 30 };
let obj2 = { a: 50, c: 'abc' };
let obj3 = { ...obj1, a: 20, ...obj2, x: 'xyz' };
console.log(obj3); // { a: 50, b: 30, c: 'abc', x: 'xyz' }