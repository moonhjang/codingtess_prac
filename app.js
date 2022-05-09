const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `ddz=z=`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let t = input().toString().trim();
console.log(t.replace(/c=|c-|dz=|d-|lj|nj|s=|z=|./g,'a').length);
































// const fs = require('fs');
// const stdin = (process.platform === 'linux'
//     ? fs.readFileSync('/dev/stdin').toString()
//     : `zzzzaaaaffff`
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
//         findStr.push(t[i])  //현재글자를 넣어줌
//         count += 1
//       } else {
//         findStr.pop()       //배열에 있거나, 글자가 다른경우 가상의 배열을 삭제
//         count -= 1
//           if (findStr.length === 0){
//             break;
//           }
//       }
//   } 
// }

// console.log(findStr.length > 0?  findStr[0] :'?')



// const fs = require('fs');
// const stdin = (process.platform === 'linux'
//     ? fs.readFileSync('/dev/stdin').toString()
//     : `Mississipi`
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