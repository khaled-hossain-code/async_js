const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('in setTimeout1');
    let res = 10;
    if (res) {
      resolve(10);
    } else {
      reject( new Error('Rejected from setTimeout1'))
    }
  }, 1000);
});

console.log('ok');

const myPromise = p.then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});