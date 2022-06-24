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

// 1427 소트인사이드
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


// 11650 좌표 정렬하기

// 11651 좌표 정렬하기2

// 1181 단어 정렬 
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


// 10814 나이순 정렬
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
