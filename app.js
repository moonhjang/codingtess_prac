const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : `10 10 3
13 2 5 11 7 8 2 4 9 10
1
2
3
8
9
10
11
16
17
49
`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let [n, m, v] = input()
console.log([n, m, v])
// let [n, m, v] = input().split(' ').map(Number);
// const cycle = [], non = [];
// v--;
// input()
//   .split(' ')
//   .forEach((x, i) => {
//     x = +x;
//     if (i < v) non.push(x);
//     else cycle.push(x);
//   });

// let ans = [];
// for (let i = 0; i < m; i++) {
//   const k = +input();
//   if (k < v) ans.push(non[k]);
//   else ans.push(cycle[(k - v) % (n - v)]);
// }
// console.log(ans.join('\n')); 