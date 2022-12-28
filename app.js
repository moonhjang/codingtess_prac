const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `ljes=njak`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let word  = input()
const cro = ['c=','c-','dz=','d-','lj','nj','s=','z=']

for (i of cro) {
  word = word.split(i).join("Q"); 
}
console.log(word.length)

// for (let i=0; i< cro.length; i++){
//   const croCount= word.split(cro[i]).length -1
//   console.log(croCount)

//   if (croCount > 0) {
//     charCount -= cro[i].length * croCount
  
//     word = word.replace(cro[i],'*')
  
//     console.log(word)
//     // result += croCount
//   }

// }

// result += word.length

