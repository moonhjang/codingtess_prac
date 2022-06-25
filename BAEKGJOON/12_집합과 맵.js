// 숫자카드

// 14425 문자열 집합
const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5 11
baekjoononlinejudge
startlink
codeplus
sundaycoding
codingsh
baekjoon
codeplus
codeminus
startlink
starlink
sundaycoding
codingsh
codinghs
sondaycoding
startrink
icerink`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const t = input().split(' ').map(Number)
const arr = [];
const checkArr = [];

for(i=0; i<t[0]; i++){
  const letter = input()
  arr.push(letter)
  
}

for(i=0; i<t[1]; i++){
  const letter = input()
  checkArr.push(letter)
  
}

const filteredArr = checkArr.filter( letter => arr.indexOf(letter)>=0)
console.log(filteredArr.length)