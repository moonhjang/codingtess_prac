
const list1 = [1, 3, 5, 7, 9, 20, 31, 42, 53, 64, 75, 86, 97]; 
const total = []; 
const list = []; 

for (let i = 1; i < 10000; i++){
  total.push(i)
}

for (let i = 1; i < 10000; i++){
  const num = (i+'').split('').map(Number)
  const sum = num.reduce((prev, curr) => prev + curr )
  const createNum = i + sum
  if (createNum < 10000){
    list.push(createNum)
  }
}

const Num = list.sort((a,b)=> a-b)
const selfNumber = total.filter(x => !Num.includes(x))
selfNumber.map(n => console.log(n))
