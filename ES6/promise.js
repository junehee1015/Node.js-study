'use strict'

const promiseResult = new Promise(resolve => {
    resolve(2); 
    // 2를 넘겨준다
}).then(result => {
    // result = 2
    console.log('first:', result);
    return `${result} hellow`;
}).then(result => {
    // result = 2 hellow
    console.log('second:', result);
    return `${result} hello`;
});
promiseResult.then(result => console.log(result)); // result = 2 hellow hello


const first = new Promise(resolve => resolve(1))
.then(value => `${value + 10}`);
const second = new Promise(resolve => resolve(2))
.then(value => `${value + 20}`);

// promise.all([promise1, promise2])
// promise를 모두 실행하고 동시에 반환한다.
Promise.all([first, second]).then(value => {
    console.log('value:', value);
    console.log('value의 합:', Number(value[0]) + Number(value[1]));
});