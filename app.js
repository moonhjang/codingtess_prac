const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `26`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const t = Number(input())
let num = t
let sum;
let i = 0

while (true){
  i++;

  sum = Math.floor(num/ 10) + num% 10;
  console.log(i, Math.floor(num/ 10), num% 10)

  console.log(i, (num % 10)* 10, sum % 10, num, sum)
  num = (num % 10) * 10 + sum % 10;
  // console.log(i, (num % 10)* 10, sum % 10, num)

  if (t === num){
    break;
  }
}

console.log(i)