// 산술연산자 중 %의 연산자 우선순위를 증명하시오. (vs +- vs */ vs **)
// % 우선순위는 +- 보다는 앞선다.
// % 우선순위는 */ 와는 같다.
// ** 우선순위는 % 보다 앞선다.

const a = 10;
const b = 5;
const c = 3;

const res1 = a + b % c === (a + b) % c; // false - %가 우선순위 높음
const res2 = a * b % c === (a * b) % c; // true - 우선순위가 같아서 순서대로 실행
const res3 = a ** b % c === (a ** b) % c; // true - **가 우선순위 높아서 순서대로 실행

console.log(res1);
console.log(res2);
console.log(res3);
