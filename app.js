const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `zZa`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const t = input().toLowerCase() 
console.log(t)

const result = new Array(26).fill(0);
console.log(result)

for (let i = 0; i < t.length; i++) {
  result[t.charCodeAt(i) - 97] ++;
  console.log(t.charCodeAt(i)-97)
}
console.log(result)
const max = Math.max(...result);
console.log(max)
const index = result.indexOf(max);
console.log(index, '???' )
let isSame = false;
console.log(result)

for (let j = 0; j < 26; j++) {
  if (result[j] === max && index != j) {
    console.log(result[j])
    isSame = true;
    break;
  }
}

console.log(isSame ? "?" : String.fromCharCode(index + 65));