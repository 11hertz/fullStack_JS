const before = () => console.log('before....');
const after = () => console.log('after...');

const someFn = (name, greeting) => console.log(`${greeting}, ${name}`);
const someFn2 = (id, nickname, email, level) => console.log(`${id} / ${nickname} / ${email} / ${level}`);

const template = (fn) => {
  return (...args) => {
    before();
    fn(...args);
    after();
  };
};

const temp = template(someFn);
const temp2 = template(someFn2);

temp('11hertz', 'hello');
temp2(1, '11hertz', 'reachzin@naver.com', 5);
