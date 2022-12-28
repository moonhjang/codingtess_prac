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

// 1157 단어 공부
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

 
const word  = input().toUpperCase()
let alphabets = [...new Set(word.split(''))];

// console.log(alphabets)

// 제일많은 문자와 개수 초기화
let maxChar = '';
let maxCount = 0;

for (let i = 0; i < alphabets.length; i++) {
  // 알파벳 개수 : 문자를 알파벳으로 나눴을 때 생성되는 배열의 길이 - 1
  let count = word.split(alphabets[i]).length - 1;

  // 최대 개수보다 높으면 제일 많은 문자와 개수를 해당 알파벳과 개수로 바꿔줌
  if (count > maxCount) {
      maxChar = alphabets[i];
      maxCount = count;
      // 최대 개수와 같으면 제일 많은 문자를 ? 로 바꿔줌
  } else if (count === maxCount) {
      maxChar = '?';
  }
}

console.log(maxChar)


// 1152 단어의 개수 (빈값만 있는 테스트가 있는 점 유의!)
const { count } = require('console');
const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `  `
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line];
})();

const t = input().trim()
if (t === ''){
  console.log(0)
} else {
  console.log(t.split(' ').length)
}


// 2908 상수
const { count } = require('console');
const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `221 231`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line];
})();

const t = input().split(' ').map(num => Number(num.split('').reverse().join('')))

console.log(Math.max(...t))


// 5622 다이얼 (문제 이해 필요)
const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `UNUCIC`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let t = input();
let result = 0;
const phone = {2: "ABC",
              3: "DEF",
              4: "GHI",
              5: "JKL",
              6: "MNO",
              7: "PQRS",
              8: "TUV",
              9: "WXYZ",}

for (let i=0; i<t.length; i++){
  
  for (let j=2; j<=9; j++){
    if(phone[j].includes(t[i])){
      result += j + 1;
      break;
    }
  }
}
console.log(result)


// 2941 크로아티아 알파벳 (문제 이해 필요)
const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `ljes=njak`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let word  = input()
const cro = ['c=','c-','dz=','d-','lj','nj','s=','z=']

for (i of cro) {
  word = word.split(i).join("Q"); 
}
console.log(word.length)



// 1316 그룹 단어 체커
const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `2
yzyzy
zyzyz`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let t = input();
let result = []
let count = 0;


for (let i = 0; i < t; i++) {
    const letter = input().split(' ')
    const each = letter[0].split('')
    let list = [];

    for (let j = 0; j < each.length; j++) {
        if (list.indexOf(each[j]) === -1){
          count = 1;
          list.push(each[j])
        } else if (each[j] === each[j-1]) {
          list.push(each[j])
        } else if (each[j] !== each[j-1] && list.indexOf(each[j]) > -1){
          count = 0;
          break;
        } 
    }

    result.push(count)
    final = result.filter(num => num === 1)
}
console.log(final.length)
