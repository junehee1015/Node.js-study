// 파일 이름 바꾸기
// fs.rename('이전 파일명', '새로운 파일명', err => {if(err) throw err})

const fs = require('fs');
fs.rename('./contents.txt', './new contents.txt', err => {if(err) throw err});
