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
 