// require('파일 경로')
// 파일을 불러오면 해당 파일의 함수를 사용할 수 있다.

const requireMsg = require('./exports.js');

requireMsg.printHello();
requireMsg.printMessage('hi');