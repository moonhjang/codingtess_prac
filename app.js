const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3
21 Junkyu
21 Dohyun
20 Sunyoung`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const t = Number(input())
const arr = [];

for(i=0; i<t; i++){
  const name = input()
  arr.push(name)
}
arr.sort((a,b) => a.split(' ')[0]-b.split(' ')[0])
arr.forEach(a => console.log(a))

