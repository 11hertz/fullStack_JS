//  원시값(primitive)만을 갖는 객체 kim을 복사하는 프로그램을 Object의 클래스 메소드 / spread(...) 연산자를 사용하지 말고 작성하시오.
const kim = { nid: 3, nm: 'Hong', addr: 'Pusan' };

const copyObject = obj => {
  const newObj = {};
  for (let x in obj) {
    newObj[x] = obj[x];
  }
  return newObj;
};

const newKim = copyObject(kim);

console.log(kim);
// { nid: 3, nm: 'Hong', addr: 'Pusan' }

newKim.addr = 'Daegu';

console.log(newKim);
// { nid: 3, nm: 'Hong', addr: 'Daegu' }

console.log(kim.addr !== newKim.addr); // true
