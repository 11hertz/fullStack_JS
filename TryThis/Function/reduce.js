// Array.reduce 함수를 고차 함수로 직접 구현하시오.
const reduce = (arr, fn, initValue = arr[0]) => {
  let acc = initValue;

  if (initValue === 0) acc = fn(acc, arr[0]);

  for (let i = 1; i < arr.length; i++) {
    acc = fn(acc, arr[i]);
  }

  return acc;
};

reduce([1, 2, 3], (a, b) => a + b, 0); // 6이면 통과!
reduce([1, 2, 3, 4, 5], (a, b) => a + b); // 15면 통과!
reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1); // 120이면 통과!
reduce([2, 2, 2], (a, b) => a * b); // 8이면 통과!
reduce([3, 3, 3], (a, b) => a * b, 0); // 0이면 통과!

const assert = require('assert');

assert.deepStrictEqual(
  reduce([1, 2, 3], (a, b) => a + b, 0),
  6
);
assert.deepStrictEqual(
  reduce([1, 2, 3, 4, 5], (a, b) => a + b),
  15
);
assert.deepStrictEqual(
  reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1),
  120
);
assert.deepStrictEqual(
  reduce([2, 2, 2], (a, b) => a * b),
  8
);
assert.deepStrictEqual(
  reduce([3, 3, 3], (a, b) => a * b, 0),
  0
);
