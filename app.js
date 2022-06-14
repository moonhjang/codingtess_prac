const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `joonas`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const t = input()

console.log(t + '??!')
