const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `2 2 2`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const t = input().split(' ').map(Number)

let answer = 0;

if (t[0] === t[1] && t[1] === t[2]){
  answer = 10000 + t[0] * 1000
} else if (t[0] === t[1] || t[1] === t[2]){
  answer = 1000 + t[1] * 100
} else if (t[0] === t[2]){
  answer = 1000 + t[0] * 100
} else {
  const max = Math.max(...t)
  answer = max * 100
}

console.log(answer)

