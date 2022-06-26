const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `10`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const t = Number(input())
let count = 2

if (t <= 1) {
  console.log(t)
} else {
  
}

for(i=0; i<t[0]; i++){
  const letter = input()
  arr.push(letter)
  
}
