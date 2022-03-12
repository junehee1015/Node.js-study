// fs.readdirSync()
// 존재하는 파일 명단을 불러온다.

const fs = require('fs');
const fileList = fs.readdirSync('./');

console.log(fileList);

fileList.forEach(value => console.log(value));