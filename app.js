const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `999998999`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const t = input().split('').map(Number).sort((a,b)=>b-a).join('')
console.log(t)


