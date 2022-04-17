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


// 10950 A+B - 3
