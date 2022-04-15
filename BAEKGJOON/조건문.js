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

// 2753 윤년

// 14684 사분면 고르기

// 2884 알람시계

// 2525 오븐시계

// 2480 주사위 세개 