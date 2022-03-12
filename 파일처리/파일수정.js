// 파일수정
// fs.appendFile()

const fs = require('fs');

fs.appendFile('./contents.txt', '\nappend contents', err => {
    if(err) throw err;
    console.log('append');
});