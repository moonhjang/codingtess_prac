// 2750 수 정렬하기
const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
5
4
3
2
1`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const t = Number(input())
let arr=[];

for(let i=0; i<t; i++){
  let num = Number(input())
  arr.push(num)

}
const arrangedNum = arr.sort((a,b)=> a-b)
arrangedNum.forEach(each => console.log(each))


// 2751 수 정렬하기2

// 1427 소트인사이드(정답확인)
const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `999998999`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const t = input().split('').map(Number).sort((a,b)=>b-a).join('')
console.log(t)