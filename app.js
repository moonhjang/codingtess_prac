const fs = require('fs');
const stdin = (process.platform === 'linux'
    ? fs.readFileSync('/dev/stdin').toString()
    : `23 48
25`
).split('\n');

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

const t1 = input().split(' ').map(Number)
const t2 = Number(input())

const min = t1[1]+t2
if (min >= 60){
  const addHour = Math.floor(min/60)

  // 24시 일때는 0으로 표현
  const hour = t1[0] + addHour
  if ( hour >= 24) {
    const calHour = Math.floor(hour/24)
    t1[0] = hour - (24*calHour)
  } else {
    t1[0] = hour
  }
  t1[1]= min-(60*addHour)
  console.log(t1.join(' '))
} else {
  t1[1]= min
  console.log(t1.join(' '))
}
