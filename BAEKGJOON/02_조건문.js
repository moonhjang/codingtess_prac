// 1330 두 수 비교하기

const fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().split(' ').map(v => +v)

const[a,b] = input;
if (a > b) {
    console.log('>');
} else if (a < b){
    console.log('<');
} else{
    console.log('=='); 
} 


// 9498 시험 성적

const fs = require('fs');
let input = Number(fs.readFileSync('dev/stdin'))

const score = input;
if (score >= 90) {
    console.log('A');
} else if (score >= 80) {
    console.log('B');
} else if (score >= 70) {
    console.log('C'); 
} else if (score >= 60) {
    console.log('D');       
} else {
    console.log('F'); 
} 

// 2753 윤년
const fs = require('fs');
let input = Number(fs.readFileSync('dev/stdin'))

const year = input;
if (year % 4===0) {
    if (!(year % 100===0) || year % 400===0){
        console.log('1');
    } else {
        console.log('0');
    }  
} else {
    console.log('0'); 
} 


// 14684 사분면 고르기 (1)
let fs = require('fs')
let input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

const [x,y] = input;
if (x > 0 && y > 0) {
   console.log(1) 
} else if( x < 0 && y > 0){
    console.log(2)
} else if( x < 0 && y < 0){
    console.log(3)
} else {
    console.log(4); 
} 

// 14684 사분면 고르기 (2)
const fs = require('fs'); 
const [x, y] = fs.readFileSync(0).toString().trim().split('\n').map(Number); 

if(x > 0) y > 0 ? console.log(1) : console.log(4) 
if(x < 0) y > 0 ? console.log(2) : console.log(3)




// 2884 알람시계

let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

let hour = Number(input[0]);  // Hour
let minute = Number(input[1]);  // Minute

minute -= 45;

if (minute < 0) {
    minute += 60;
    hour--;

    if (hour === -1) {
        hour = 23;
    }
}

console.log(hour + ' ' + minute);


// 2525 오븐시계
const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `23 48
25`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const t1 = input().split(' ').map(Number)
const t2 = Number(input())

const min = t1[1]+t2
if (min >= 60){
  const addHour = Math.floor(min/60)

  // 24시 일때는 0으로 표현
  const hour = t1[0] + addHour
  if ( hour >= 24) {
    const calHour = Math.floor(hour/24)
    t1[0] = hour - (24*calHour)
  } else {
    t1[0] = hour
  }
  t1[1]= min-(60*addHour)
  console.log(t1.join(' '))
} else {
  t1[1]= min
  console.log(t1.join(' '))
}


// 2480 주사위 세개
const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `2 2 2`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const t = input().split(' ').map(Number)

let answer = 0;

if (t[0] === t[1] && t[1] === t[2]){
  answer = 10000 + t[0] * 1000
} else if (t[0] === t[1] || t[1] === t[2]){
  answer = 1000 + t[1] * 100
} else if (t[0] === t[2]){
  answer = 1000 + t[0] * 100
} else {
  const max = Math.max(...t)
  answer = max * 100
}

console.log(answer)




