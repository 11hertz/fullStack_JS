// ex1) for문을 이용하여 다음과 같이 출력하는 제어문을 작성하시오.
// for(let i = 0.1; i < 1; i = i + 0.1) console.log(i);  // right??
// 0.1
// 0.2
// 0.3
// 0.4
// 0.5
// 0.6
// 0.7
// 0.8
// 0.9
// 1     ← optional (1.0도 OK)
for(let i = 0.1; i < 1; i += 0.1) {
  console.log(i.toFixed(1));
}


// ex2) 소숫점 5자리까지 입력가능하고, 이 값에 0.1을 더해서 결과를 출력하려 한다. 
// 사용자가 0.21354 를 입력했을 때 정확한 값을 출력하시오.
// 0.21354 + 0.1 // 0.31354 ?
// 0.31354
function pointSum(num1) {
  const num2 = 0.1;
  const len = num1.toString().length - 2;
  console.log(len);
  return (num1 + num2).toFixed(len);
}

const res = pointSum(0.21354);
console.log(res);


// ex3) 0.14 + 0.28 = ?
function pointSum2(num1, num2) {
  const len = num1.toString().length - 2;
  console.log(len);
  return (num1 + num2).toFixed(len);
}

const res2 = pointSum2(0.14, 0.28);
console.log(res2);