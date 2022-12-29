const fs = require('fs');
const { start } = require('repl');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `2
1
3
2
3`
).split('\n');

const input = (() => {
  let line = 0;

  return () => stdin[line++];
})();

const t  = input()
console.log(t)
const arr = [];

for (let i=0; i<t*2; i++) {
  const n= Number(input())
  arr.push(n)
}

for (let i=0; i<arr.length; i+=2){
  const h = arr[i]
  const w = arr[i+1]

  console.log("height: ", h, "wide:", w)
  
  let arr2 = Array.from({length:w}, (v,i)=>i+1); 
  console.log(arr2)
    for (let i=0; i<h; i++){
    
        for (let j=1; j<=w; j++){
          console.log(arr2[j])
        //   console.log(arr2[y], i)
              if (j == 0){
                console.log(0, i ,'?')
                    arr2[i] += 1
              }

        //       if (i == 1){
        //         console.log(arr2[i],1 , i ,'?')
        //         arr2[i] =1
        //       }

              arr2[j] += arr2[j-1] 

              console.log(arr2, j,"확인!!")
          
          }
          console.log(arr2,)
    }
 
  
}
// console.log(arr)



