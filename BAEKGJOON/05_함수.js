// 4673 셀프 넘버
const list1 = [1, 3, 5, 7, 9, 20, 31, 42, 53, 64, 75, 86, 97]; 
const total = []; 
const list = []; 

for (let i = 1; i < 10000; i++){
  total.push(i)
}

for (let i = 1; i < 10000; i++){
  const num = (i+'').split('').map(Number)
  const sum = num.reduce((prev, curr) => prev + curr )
  const createNum = i + sum
  if (createNum < 10000){
    list.push(createNum)
  }
}

const Num = list.sort((a,b)=> a-b)
const selfNumber = total.filter(x => !Num.includes(x))
selfNumber.map(n => console.log(n))



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
