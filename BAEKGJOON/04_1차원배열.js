// 개수 세기
const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `11
    1 4 1 2 4 2 4 2 3 4 4
    5`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const t = input()
const list = input().trim().split(' ').map(Number)
const num = input().trim()

let answer =0;
for (let i=0; i<t; ++i){
  const result = list[i] == num
  answer = result == true ? answer+1 : answer;
}

console.log(answer)



// 10818 최소, 최대
const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
20 10 35 30 7`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

t = input()
tb = input().split(' ').map(Number)
min = Math.min(...tb)
max = Math.max(...tb)
console.log(min, max)


// 2562 최댓값
const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3
29
38
12
57
74
40
85
61`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const list = [];
for (let i=1; i<=stdin.length; i++){
  t = input()
  list.push(Number(t))
}


const max = Math.max(...list)
const index = list.indexOf(max) +  1
console.log(max)
console.log(index)


// 5597 과제 안내신 분...?
const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3
1
4
5
7
9
6
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const total = Array.from({length:30}, (v,i)=>i+1)

const array = [];
for (let i=0; i<30; ++i){
  const num = input()
  array.push(Number(num))
}

const f= total.filter(x => !array.includes(x))
f.map((item) => console.log(item))


// 2577 숫자의 개수
const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `150
266
427`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();


const answer = String(input(0)*input(1)*input(2))

for (let i=0; i<= 9; i++) {
  let count = 0;
  for (let j=0; j< answer.length; j++){
      if(Number(answer[j]) === i){
        count++
      }
    }
    console.log(count)
}

// 3052 나머지
const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `39
40
41
42
43
44
82
83
84
85`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const list = [];
for(let i=1; i<=10; i++){
  t = input() % 42
  if (list.indexOf(t)<0){
    list.push(t)
  }
}
 
console.log(list.length)

// 1546 평균
const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `3
40 80 60`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const t = input()
const a = input().split(' ').map(Number)

const max = Math.max(...a)

let total = 0

for(let i=0; i<t; i++){
  let newScore = a[i]/max*100
  total += newScore
}

avg = total/t
console.log(avg)

// 8958 OX퀴즈
const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
OOXXOXXOOO
OOXXOOXXOO
OXOXOXOXOXOXOX
OOOOOOOOOO
OOOOXOOOOXOOOOX`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const t = input()


for(let i=0; i<t; i++){
  const a = input()
  let count = 0 
  let answer = 0
  for (let j=0; j<a.length; j++){
    if (a[j] === 'O'){
      count++;
      answer = answer + count
    } else {
      count = 0
    }
  }
  console.log(answer)
}


// 4344 평균은 넘겠지
const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const t = input()
let total =0;
for(let i=0; i<t; i++){
  const x = input().split(' ').map(Number)
  x.shift();
  const b= x.reduce((val, i) => 
    val+i
    )

  const average = b/x.length
  const over =x.filter(score => score >average )
  const result =over.length/x.length *100
  const re_result= result.toFixed(3)+'%'
  console.log(re_result)
}
 

// 4344_다른분
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = input[0] * 1;

for (let i = 1; i <= num; i++) {
    let score = input[i].split(' ');
    let num2 = score.shift() * 1;
    let count = 0;
    
    let avg = score.reduce((acc, v) => acc += v * 1, 0);
    
    avg /= num2;

    for (let j = 0; j < num2; j++) {
        if (score[j] > avg) {
            count++;
        }
    }
    
    let result = ((count / num2) * 100).toFixed(3);
    
    console.log(result + "%");
}