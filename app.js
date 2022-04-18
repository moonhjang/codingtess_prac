const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `26`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

answer = ''
console.log(stdin.length)
while(true){
  const t = input().split('').map(Number)
  for (let i = 0; i <= stdin.length; i++ )
    answer = t[0] + t[1]
    console.log(t[0], t[1])
 
  break;
}
