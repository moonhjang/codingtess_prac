const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `2 16`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line];
})();



const isPrime = (num) => {
   if(num === 1) return false; 
   for(var i=2; i<=Math.sqrt(num); i++){
      if((num%i)==0) return false; 
    } return true; 
  } 
const t = input().split(' ').map(Number)
  
for(var i=t[0]; i<=t[1]; i++) 
  isPrime(i) ? console.log(i) : null;

