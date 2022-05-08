// 11654 아스키 코드
const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `A`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line];
})();

const t = input()
const toAscii = t.charCodeAt(0)
console.log(toAscii)


// 11720 숫자의 합
const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
54321`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const t = input()
const num = input().split('').map(Number)
const sum = num.reduce((acc,a)=> acc+a,0)
console.log(sum)


// 10809 알파벳 찾기
const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `baekjoon`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const t = input()
// 아스키코드에서 abc 나열
const arr = Array.from({length:26},(v,i) =>  String.fromCharCode(i+97));
arr.map((string) => console.log(t.indexOf(string)))


// 2675 문자열 반복
const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `2
3 ABC
5 /HTP`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const t = input()

for (let i=0; i<t; i++){
  const[num,str] = input().split(' ')
  const eachStr = str.split('')
  const repeatStr = eachStr.map(each => each.repeat(num)).join('')
  console.log(repeatStr)
}

// 1157 단어 공부 (다시!!!!!!!!!!!)
const { count } = require('console');
const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `Mississipi`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const t = input().toUpperCase().split('')
const findStr= [];

for (letter of t){
  if (findStr.indexOf(letter) > -1){
    findStr[letter] +=1;
  } else {
    findStr.push(letter)
    findStr[letter] = 1 ;   
  }
 
}

console.log(findStr, findStr[].sort())
let list = [];
let check = 0;
// findStr.forEach((i) => list.push(findStr[i]))
findStr.filter((num) => num > findStr[num])

const a = list.filter(num => num === Math.max(...list))
console.log(a)
console.log(a.length > 1? '?':'1')

// console.log(findStr.M)
// console.log(Object.keys(findStr))

// const arr = Array.from({length:26},(v,i) =>  String.fromCharCode(i+97));
// t.map((string) => console.log(t.indexOf(string)))






// 1152 단어의 개수  (확인바람. 왜 틀리지????)
const { count } = require('console');
const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `The last character is a blank`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line];
})();

const t = input().split(' ')
console.log(t.length)



// 2908 상수

// 5622 다이얼

// 2941 크로아티아 알파벳

// 1316 그룹 단어 체커
