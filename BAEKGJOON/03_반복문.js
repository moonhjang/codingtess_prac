// 2739 구구단

const fs = require('fs');
let input = Number(fs.readFileSync('dev/stdin'))

const a = input;
// const a = 2;

for (let i=1; i < 10; i++){
    mul = a * i 
    console.log( a,'*',i, '=',mul )
}

// 10950 A+B - 3
const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
1 1
2 3
3 4
9 8
5 2
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let t = input();
while(t--){
    const [a,b] = input().split(' ').map(Number);
    console.log(a + b)
};


// 8393 합
const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let t = input();
let answer = 0
for (let i = 1; i <= t; i++){
    answer += i
}
console.log(answer)

// 25304 영수증
const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `260000
    4
    20000 5
    30000 2
    10000 6
    5000 8`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const total = input()
const count  = input()

let calculate = 0;
for (let i = 0; i < count; i++) {
  const list = input().trim().split(' ').map(Number)
  const multiple = list[0] * list[1]
  calculate += multiple
} 
const result = calculate == total? 'Yes': 'No'
console.log(result)



// 15552 빠른 A+B =======================> 다시확인
const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
1 1
12 34
5 500
40 60
1000 1000
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let t = input();

while(t--) {
  const [a,b] = input().split(' ').map(Number);
  console.log(a+b)
}


// 2741 N찍기
let input = Number(require('fs').readFileSync('/dev/stdin').toString());

let answer = '';

for (let i = 1; i <= input; i++) {
    answer += i + "\n";
}

console.log(answer);


// 2742 N찍기
let input = Number(require('fs').readFileSync('/dev/stdin').toString());

let answer = '';

for (let i = input; i >= 1; i--) {
    answer += i + "\n";
}

console.log(answer);

// 11021 A + B - 7
const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
1 1
2 3
3 4
9 8
5 2
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let t = input();

for (let i = 1; i <= t; i++) {
  const [a,b] = input().split(' ').map(Number);
  const total = a + b
  console.log('Case #'+i+': '+total)
}

// 11022 A + B - 8

const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
1 1
2 3
3 4
9 8
5 2
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let t = input();

for (let i = 1; i <= t; i++) {
  const [a,b] = input().split(' ').map(Number);
  const total = a + b
  console.log('Case #'+i+': '+a+ ' + '+b+' = '+total)
}


// 2438 별찍기 -1
const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let t = input();


for (let i = 1; i <= t; i++) {
  const star = '*'
  console.log(star.repeat(i))
}

// 2439 별찍기 -2
const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let t = input();


for (let i = 1; i <= t; i++) {
  const empty = ' '  
  const star = '*'
  const line = empty.repeat(t-i) + star.repeat(i) 
  console.log(line)
}

// 10871 X보다 작은수
const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `10 5
1 10 4 9 2 3 8 5 7 6`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let [t,v] = input().split(' ').map(Number);
let a = input().split(' ').map(Number)

const answer = []
for (let i = 0; i <= t; i++) {
  if (a[i] < v){
    answer.push(a[i])
  } 
}
console.log(answer.join(' '))


// 10952 A + B - 5    // 10951 A + B - 4
const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `1 1
2 3
3 4
9 8
5 2
0 0`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

for (let i = 0; i < stdin.length -1; i++) {
  const [a,b] = input().split(' ').map(Number);
    if (a === 0 && b === 0){
      break;
    } else {
      const total = a + b
      console.log(total)
    }
}


// 1110 더하기 사이클 (다른사람)

// 1의 자리에 있는 수 구하기 : num % 10
// 10의 자리에 있는 수 구하기 : Math.floor(num/10)
// 1의 자리에 있는 수 10의 자리 수로 만들기 : (num % 10) * 10


const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `26`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const t = Number(input())
let num = t
let sum;
let i = 0

while (true){
  i++;

  sum = Math.floor(num/ 10) + num% 10;
  num = (num % 10) * 10 + sum % 10;

  if (t === num){
    break;
  }
}

console.log(i)