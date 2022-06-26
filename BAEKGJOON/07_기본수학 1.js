// 1712 손익분기점
// Math.Floor를 알아야 하는 문제!
const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `1000 100 110`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line];
})();

const t = input().split(' ').map(Number)

const A = t[0]
const B = t[1]
const T = t[2]


if ( B > T || B === T ){
  console.log(-1)
} 

else {
  const margin = T - B
  const answer = Math.floor ( A / margin ) +1
  console.log(answer)
}



// 2292 벌집
const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `66`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line];
})();

const t = Number(input())

let range= 1;

if (t === 1){
  console.log(1)
}

for (let i=1; i < t; i++){
  const line = 6 * i
  range += line

  if ( t <= range) {
    console.log(i+1)
    break;
  }
}





// 1193 분수찾기
// 이것 진짜 너무 어려움. (다른사람것)
const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `14`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line];
})();

let t = Number(input())

let groupCounter = 0;
let ascending = [];
let descending = [];

while ( t > 0 ) {
  groupCounter++;
  t = t - groupCounter
}

for (let i= 0; i < groupCounter; i++){
  ascending.push(i+1);
  descending.push(groupCounter-i)
}

if(groupCounter %2 === 0) {
  console.log(`${ascending[groupCounter-1+t]}/${
    descending[groupCounter-1+t]
  }`);
} else {
  console.log(`${descending[groupCounter-1+t]}/${
    ascending[groupCounter-1+t]
  }`);
}


// 2869 달팽이는 올라가고 싶다
// 시간 초과나옴
// const fs = require('fs');
// const stdin = (process.platform === 'linux'
//     ? fs.readFileSync('/dev/stdin').toString()
//     : `2 1 5`
// ).split('\n');

// const input = (() => {
//   let line = 0;
//   return () => stdin[line];
// })();

// const t = input().split(' ').map(Number)
// let arrive = 0;

// for(let i=1; i<=t[2]; i++){
//   let doDay = t[0]
//   arrive += doDay;
//   if(arrive < t[2]){
//     arrive -= t[1]
//   } else 
//   if(arrive === t[2] || arrive > t[2]){  
//     arrive += doDay
//     console.log(i)    
//     break;
//   } 
// }

// 2869 달팽이는 올라가고 싶다 (찾은내용)
const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `2 1 5`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line];
})();

const t = input().split(' ').map(Number)
// console.log(t)
const A = t[0];
const B = t[1];
const V = t[2];
 
console.log(Math.ceil((V - B) / (A - B)));


// 2839 설탕배달 (코드 다시 확인)
let input = require('fs').readFileSync('/dev/stdin');

let count = 0;

while (true) {
  if (input % 5 === 0) {
    console.log(input / 5 + count);
    break;
  }
    
  if (0 > input) {
    console.log(-1);
    break;
  }

  count++;
  input -= 3;
}



// 10757 큰수 A+B 
// BigInt()를 알았어야 하는문제
const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `9223372036854775807 9223372036854775808`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line];
})();

const t = input().split(' ').map(BigInt)

const Int = t[0] + t[1]
const answer = Int.toString()
console.log(answer)