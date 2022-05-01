// 4673 셀프 넘버




// 1065 한수
const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `500`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line];
})();

const t = input()
const t_num = Number(t)
let count = 0;

if (t_num < 100) {
  count = t_num
} 

if (t_num >= 100 && t_num <= 1000) {
  count = 99;
  for (let i=101; i<= t; i++){
    const num = i + ''
    const compare = num[1] - num[0] 
      if (Number(num[1]) + compare === Number(num[2])){
        count ++;
      } 
  }
}

console.log(count)
