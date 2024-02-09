const before = () => console.log('before....');
const after = () => console.log('after...');

const someFn = (name, greeting) => console.log(`${greeting}, ${name}`);

const template = (fn) => {
  return (userName, msg) => {
    before();
    fn(userName, msg);
    after();
  };
};

const temp = template(someFn);

temp('11hertz', 'hello');
