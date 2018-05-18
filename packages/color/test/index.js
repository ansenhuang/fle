const color = require('../index');

console.log(color('normal'));
console.log(color.bold('bold'));
console.log(color.red.bold('red bold'));
console.log(color.red.bgGreen.bold('red bgGreen bold'));
