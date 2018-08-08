var fs = require('fs');

//readFileSync

console.log('A');
var result = fs.readFileSync('sample.txt', 'utf8');
console.log(result);
console.log("C");
