// exports.함수
// 함수를 보낸다. 다른 문서에서 require을 사용하여 받을 수 있다.

const printHello = () => console.log('hello');

exports.printHello = printHello;
exports.printMessage = msg => console.log(msg);