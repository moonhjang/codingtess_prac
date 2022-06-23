const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `13
but
i
wont
hesitate
no
more
no
more
it
cannot
wait
im
yours`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const t = Number(input())
const arr = [];

for(i=0; i<t; i++){
  const letter = input()
  arr.push(letter)
}
arr.sort().sort((a, b)=> a.length-b.length)
const set = new Set(arr)
set.forEach(a => console.log(a))

