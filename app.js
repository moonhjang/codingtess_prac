const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `110`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line];
})();

const t = input()
const t_num = Number(t)
// console.log( t)
const count = 0;

if (t_num < 100) {
  console.log('here')
  count = t_num
  console.log(count, t_num, "100이하")
} 

if (t_num >= 100 && t_num <= 1000) {
  console.log('here1')
  for (let i=0; i<10; i++){
    const compare = t[1] - t[0] 
    console.log(compare, '이건뭐디?')
      if (t[1]+compare === t[2]){
        count ++
        console.log(count, "100이상인데 한 수")
      } 
  // }
}

// for (let i=1; i < 10{

//     if (t < 100) {
//       count = t
//       console.log(count, t, "100이하")
//     } else if (t >= 100 && t <= 1000) {
//       const compare = t[1] - t[0] 
//       if (t[1]+compare === t[2]){
//         count ++
//         console.log(count, "100이상인데 한 수")
//       } 
//     }
    
    
         
// }

// console.log(count)
//   if ( t < 10){
//     count = 9
  
//   for(let j=0; j<10; j++){
//     if (let )
//   }
//   

//   let total = 0
//   for (let j=1; j<= a[0]; j++){
//     total += a[j]
//   }
//   const b = a.filter(num => num = num > total/a[0])
//   const answer = (b.length/a[0]*100).toFixed(3)+'%'
//   console.log(answer)






