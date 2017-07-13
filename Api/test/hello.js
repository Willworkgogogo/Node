// let x = "world";
// let y = `hello ${x}`;
// console.log(y)

'use strict';

let s = 'Hello';

function greet(name) {
    console.log(`${s}, ${name}!`);
}

function sayHi(name) {
    console.log(`Hi, ${name}...`)
}

module.exports = {
    greet: greet,
    sayHi: sayHi
}