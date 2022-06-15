const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `472
385`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const n1 = input()
const n2 = input()
const n2_Each = n2.split('').map(Number)

console.log(n1 * n2_Each[2])
console.log(n1 * n2_Each[1])
console.log(n1 * n2_Each[0])
console.log(n1 * n2)