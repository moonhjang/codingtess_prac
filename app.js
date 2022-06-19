const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const t = input()

for(let i=0; i<t; i++){
  const a = input().split(' ').map(Number)

  let total = 0
  for (let j=1; j<= a[0]; j++){
    total += a[j]
  }
  const b = a.filter(num => num = num > total/a[0])
  const answer = (b.length/a[0]*100).toFixed(3)+'%'
  console.log(answer)
}