// 2739 구구단

const fs = require('fs');
let input = Number(fs.readFileSync('dev/stdin'))

const a = input;
// const a = 2;

for (let i=1; i < 10; i++){
    mul = a * i 
    console.log( a,'*',i, '=',mul )
}

// 10950 A+B - 3