// 1. [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]] 배열을 객체로 만드시오.
// => { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }

const arr = [
  ['A', 10, 20],
  ['B', 30, 40],
  ['C', 50, 60, 70]
];
const obj = {};

for (let [x, ...res] of arr) {
  obj[x] = res;
}

console.log(obj);
// { A: [ 10, 20 ], B: [ 30, 40 ], C: [ 50, 60, 70 ] }

// 2. 위에서 만든 객체를 다시 배열로 만드시오.
// { 'A': [10, 20], 'B': [30, 40], 'C': [50, 60, 70] }
// => [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]]

const arr2 = [];

for (let [key, value] of Object.entries(obj)) {
  arr2.push([key, ...value]);
}

console.log(arr2);
// [['A', 10, 20], ['B', 30, 40], ['C', 50, 60, 70]]
