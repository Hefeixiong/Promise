import Promise from './Promise'

let promise = new Promise(function (resolve , reject) {
  // resolve(100);
  reject('err');
  console.log('first');
});
