// const fs = require('fs');
// const stdin = (process.platform === 'linux'
//     ? fs.readFileSync('/dev/stdin').toString()
//     : `14`
// ).split('\n');

// const input = (() => {
//   let line = 0;
//   return () => stdin[line];
// })();

// let t = Number(input())

// let groupCounter = 0;
// let ascending = [];
// let descending = [];

// while ( t > 0 ) {
//   groupCounter++;
//   t = t - groupCounter
// }

// for (let i= 0; i < groupCounter; i++){
//   ascending.push(i+1);
//   descending.push(groupCounter-i)
// }

// if(groupCounter %2 === 0) {
//   console.log(`${ascending[groupCounter-1+t]}/${
//     descending[groupCounter-1+t]
//   }`);
// } else {
//   console.log(`${descending[groupCounter-1+t]}/${
//     ascending[groupCounter-1+t]
//   }`);
// }



















const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `9`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line];
})();

let t = Number(input())
let count = 0;


while(t > 0){
  console.log(t)
  if (t % 5 === 1) 
    let left = t / 5 
    count = left + 1
  } else if (t % 5 === 2) {
    let left = t / 5 
    count = left + 2
  } else if (t % 5 === 3) {
    
  } else if (t % 5 === 4) {

  }

  count ++;
}

console.log(count)

// let pack = [];



// for (let i=1; i<7; i++){
//   for (let j=1; j<7; j++){
//     const delivery = 3*i + 5*j
//     // console.log(typeof delivery)
//     // console.log(typeof t)
//     // console.log(t % 3 )
//     const left3 =  t % 3
//     const left5 =  t % 5
//     console.log(left3 === 0 || left5 === 0, '똑떨어짐.')
//     console.log(left3 % 5 === 0 || left5 % 3 === 0, '그래도 똑떨어짐')
//     console.log(left3 % 5 !== 0 && left5 % 3 !== 0, '안됨.')
//     // console.log(left5 % 3 === 0 )
//     // console.log(left5 % 3 !== 0)
//     // console.log(left5 % 5 !== 0 )

//     if ( left3 === 0 || left5 === 0 ){
//       console.log( t === delivery, '똑떨어지나?---1')
//       if( t === delivery) {
//         console.log(1, i,j)
//         console.log(i+j)
//         break;
//       } 
//     } else if (left3 % 5 === 0 || left5 % 3 === 0){
//       console.log( t === delivery, '똑떨어지나?---2')
//       if( t === delivery) {
//         console.log(2, i,j)
//         console.log(i+j)
//         break;
//       } 
//     } else if (left3 % 5 !== 0 && left5 % 3 !== 0){
//       console.log( t === delivery, '똑떨어지나?---3')
//       console.log(3, i,j)
//       console.log(-1)
//       break;
//     } else {
//       console.log(i,j)
//     }

//   }

//     if ( left3 === 0 || left3 % 5 === 0 || left5 === 0 || left5 % 3 === 0){

//     // if ( left3 === 0 || left5 === 0 ){
//       if( t === delivery) {
//       console.log(i,j)
//       console.log(i+j)
//       break;
//       }
//     } else if (left3 % 5 !== 0 && left5 % 3 !== 0) {
//       console.log(-1)
//       break;
//     }
//   } 
 

// console.log(pack)







































// const fs = require('fs');
// const stdin = (process.platform === 'linux'
//     ? fs.readFileSync('/dev/stdin').toString()
//     : `M`
// ).split('\n');

// const input = (() => {
//   let line = 0;
//   return () => stdin[line++];
// })();

// const t = input().toUpperCase().split('').sort() 
// const findStr= [];
// let count = 0;

// // 글자가 하나인경우
// for (let i=0; i<t.length; i++){
//   if (t.length === 1){                     
//     findStr.push(t[0])
//   }

//   // 앞 글자 또는 전글자가 같은 경우
//   if (t[i] === t[i+1] || t[i] === t[i-1]){  
//       // findStr 배열이 없거나, 가상의 findStr 배열의 글자와 같은 경우
//       if(t[i] === findStr[0]|| findStr.length === 0){
//         // console.log(findStr)
//         findStr.push(t[i])  //현재글자를 넣어줌
//         count += 1
//       } else {
//         // console.log(findStr)
//         findStr.pop()       //배열에 있거나, 글자가 다른경우 가상의 배열을 삭제
//         count -= 1
//           if (findStr.length === 0){
//             break;
//           }
//       }
//   } 
// }
// // console.log(findStr)
// console.log(findStr.length > 0?  findStr[0] :'?')



// const fs = require('fs');
// const stdin = (process.platform === 'linux'
//     ? fs.readFileSync('/dev/stdin').toString()
//     : `BBAAA`
// ).split('\n');

// const input = (() => {
//   let line = 0;
//   return () => stdin[line++];
// })();

// const t = input().toUpperCase().split('')
// const findStr= [];

// for (letter of t){
//   if (findStr.indexOf(letter) > -1){
//     findStr[letter] +=1;
//   } else {
//     // findStr.push(letter)
//     findStr[letter] = 1 ;   
//   }
 
// }

// console.log(findStr)
// let list = [];
// let check = 0;
// // findStr.forEach((i) => list.push(findStr[i]))
// // findStr.filter((num) => num > findStr[num])
// findStr.forEach(num => console.log(findStr[num]))
// // console.log(findStr)

// const a = list.filter(num => num === Math.max(...list))
// console.log(a)

// list.filter(num => console.log(num))
// for (i in findStr){
//   console.log(i, '아이')
// }

// for (let i=0; i<findStr.length; i++){
//   console.log(findStr[i])
// }


// console.log(findStr.M)

// console.log(Object.keys(findStr))

// const arr = Array.from({length:26},(v,i) =>  String.fromCharCode(i+97));
// t.map((string) => console.log(t.indexOf(string)))


// for (let char in charMap) {
//   if (charMap[char] > max) {
//     max = charMap[char]
//     maxChar = char
//   }
// }