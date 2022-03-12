// 디렉토리 만들기(폴더 만들기)
// fs.mkdirSync()

// `${__dirname}` : 실행환경 directory의 정대경로를 받아온다.
// fs.existsSync() : directory가 존재하는지 확인.
const fs = require('fs');

const dirName = `${__dirname}/mkdir`;

if(!fs.existsSync(dirName)) fs.mkdirSync(dirName);
else console.log('directory가 존재합니다.');