// ex1) 1 ~ 10 사이의 정수에 대해 제곱근을 소숫점 3자리까지 출력하시오.
// Math.sqrt() 사용, 무리수만 출력!
// 2 1.414
// …
// 7 2.646
// …
// 10 3.162

for (let i = 1; i <= 10; i += 1) {
  const sqrtNum = Math.sqrt(i);
  if (sqrtNum % 1) console.log(i, sqrtNum.toFixed(3));
}

// ex2) 오늘 날짜의 요일을 출력하는 switch문을 사용해서 작성해 보고,
// switch문을 사용하지 않은 더 간단한 방법도 찾아보세요.
// const today = new Date();  today.getDay(); // 요일번호
// 오늘은 금요일입니다.  (일월화수목금토)

function getDay() {
  const today = new Date().getDay();
  let dayName = '';

  switch (today) {
    case 0:
      dayName = '일';
      break;
    case 1:
      dayName = '월';
      break;
    case 2:
      dayName = '화';
      break;
    case 3:
      dayName = '수';
      break;
    case 4:
      dayName = '목';
      break;
    case 5:
      dayName = '금';
      break;
    case 6:
      dayName = '토';
      break;
    default:
      break;
  }

  return `오늘은 ${dayName}요일 입니다.`;
}

const res = getDay();
console.log(res);

// switch x
const WEEK = '일월화수목금토';
const today = new Date().getDay();
const dayName = WEEK[today];
console.log(`오늘은 ${dayName}요일 입니다.`);
