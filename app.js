
// 1~10000이 들어간 리스트만들기 (1)

// for (let i = 1; i < 10000; i++){
  i = 9999
  const num = (i+'').split('').map(Number)

  console.log(num)

  // const numList = [Number(num)+'']
  // console.log(numList)
  const sum = num.reduce((prev, curr) => prev + curr )
  // console.log(a)
  const createNum = i + sum
  console.log(createNum)

  // 리스트에서 create Num 삭제하기 (2)

    if (i === createNum)





// }

//(3) 리스트를 콘솔로 내보내기