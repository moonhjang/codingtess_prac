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

// 1157 단어 공부 (왜 통과가 안될까.)
const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `M`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const t = input().toUpperCase().split('').sort() 
const findStr= [];
let count = 0;

// 글자가 하나인경우
for (let i=0; i<t.length; i++){
  if (t.length === 1){                     
    findStr.push(t[0])
  }

  // 앞 글자 또는 전글자가 같은 경우
  if (t[i] === t[i+1] || t[i] === t[i-1]){  
      // findStr 배열이 없거나, 가상의 findStr 배열의 글자와 같은 경우
      if(t[i] === findStr[0]|| findStr.length === 0){
        // console.log(findStr)
        findStr.push(t[i])  //현재글자를 넣어줌
        count += 1
      } else {
        // console.log(findStr)
        findStr.pop()       //배열에 있거나, 글자가 다른경우 가상의 배열을 삭제
        count -= 1
          if (findStr.length === 0){
            break;
          }
      }
  } 
}
// console.log(findStr)
console.log(findStr.length > 0?  findStr[0] :'?')


//_______________________1157 나를 제외한 천재____________________________//
// charCodeAt를 사용한 풀이

let input = require('fs').readFileSync('/dev/stdin').toString().toLowerCase();

const result = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  result[input.charCodeAt(i) - 97] ++;
}

const max = Math.max(...result);
const index = result.indexOf(max);

let isSame = false;

for (let j = 0; j < 26; j++) {
  if (result[j] === max && index != j) {
    isSame = true;
    break;
  }
}

console.log(isSame ? "?" : String.fromCharCode(index + 65));


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
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `ddz=z=`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let t = input().toString().trim();
console.log(t.replace(/c=|c-|dz=|d-|lj|nj|s=|z=|./g,'a').length);



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
