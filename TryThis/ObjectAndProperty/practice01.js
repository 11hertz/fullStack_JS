const arr = [100, 200, 300, 400, 500, 600, 700];
// 1. for-in문을 사용하여 배열의 인덱스를 출력하시오.
for (const idx in arr) console.log(idx);

// 2. for-in문을 사용하여 배열의 원소를 출력하시오.
for (const idx in arr) console.log(arr[idx]);

const obj = { name: 'lim', addr: 'Yongsan', level: 1, role: 9, receive: false };
// 3. for-in문을 사용하여 프로퍼티 이름을 출력하시오.
for (const prop in obj) console.log(prop);

// 4. for-in문을 사용하여 프로퍼티 값을 출력하시오.
for (const prop in obj) console.log(obj[prop]);

// 5. for-of문을 사용하여 프로퍼티 값을 출력하시오.
for (const value of Object.values(obj)) console.log(value);

// 6. level 프로퍼티가 열거되지 않도록 설정하시오.
Object.defineProperty(obj, 'level', {
  enumerable: false
});

console.log(obj);
// { name: 'lim', addr: 'Yongsan', role: 9, receive: false }

// 7. role 프로퍼티는 읽기전용으로 설정하시오.
Object.defineProperty(obj, 'role', {
  writable: false
});

obj.role = 11;
console.log(obj);
// { name: 'lim', addr: 'Yongsan', role: 9, receive: false }
