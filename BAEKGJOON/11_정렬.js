// 2750 수 정렬하기 (다시 확인할 것)
const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
5
2
3
4
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
const arrangedNum = arr.sort((a,b)=> b-a)
arrangedNum.forEach(each => console.log(each))
