const { count } = require('console');
const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `The last character is a blank`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line];
})();

const t = input().split(' ')
console.log(t.length)
