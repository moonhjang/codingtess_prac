// 1978 소수 찾기
// 2581 소수
// 11653 소인수분해



// 1929 소수 구하기
// 시간초과
const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `2 16`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line];
})();

const t = input().split(' ').map(Number)

for (let i=t[0]; i<= t[1]; i++){
  for (let j = 2; j <= i; j++){
    if (i === 1) console.log(i)
    if (i % j === 0  && j >= i && j != 1){
        console.log(i)
        break;      
    } else if (i % j === 0  && i > j)
        break;
  }
}








// 4948 베르트랑 공준
// 9020 골드바흐의 추측

