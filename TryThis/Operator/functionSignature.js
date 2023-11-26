// user 객체를 받아서 id와 name을 출력하는 함수를 3개의 함수로 작성하시오.
// \(Function signature를 3개 이상으로 표현하기)


const hong = {id: 1, name: 'Hong'};
const lee = {id: 2, name: 'Lee'};

function f1(user) {
  console.log(user.id, user.name);
}
f1(hong);  

function f2(id, name) {
  console.log(id, name);
}

f2(hong.id, hong.name);

function f3({id, name}) {
  console.log(id, name);
}

f3(hong);

