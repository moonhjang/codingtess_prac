// 백준 문제 풀때, 필요한 코드
// 참고 https://hanch-dev.tistory.com/4

// 데이터 입력방식 (readline 모듈)

// 예제 입력이 한줄로 되어 있을 때
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function(line) {
  console.log(line);

  rl.close();
}).on("close", function() {
  process.exit();
});

//////////////////////////////////////

// 예제 입력이 여러줄로 되어 있을 때 
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line)
})
  .on('close', function () {
  console.log(input);
  process.exit();
});


//////////////////////////////////////
//////////////////////////////////////
//////////////////////////////////////



// 데이터 입력방식 (fs 모듈)


// 예제 입력이 한줄로 되어 있을 때
let fs = require('fs')
//숫자 하나인 경우
let input = Number(fs.readFileSync('dev/stdin'))
//' ' 기준으로 구분
let input = fs.readFileSync('dev/stdin').toString().split(' ')

console.log(input)

//////////////////////////////////////

// 예제 입력이 여러줄로 되어 있을 떼
let fs = require('fs')
let input = fs.readFileSync('dev/stdin').toString().split('\n')

const fs = require('fs'); 
const [x, y] = fs.readFileSync(0).toString().trim().split('\n').map(Number); 

// 예제 데이터 개수가 주어진 경우
let cnt = input[0]
let lines = []

for(let i = 1; i <= cnt; i++) {
	lines.push(input[i].split(' '))
}

console.log(lines)