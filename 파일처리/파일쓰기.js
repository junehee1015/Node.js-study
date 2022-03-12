// fs (File System)
// -> file system에 접근하는 module이다.
// -> fs module은 callback 형식이다.
// -> 실무에서 사용하기 불편하기때문에 promise 형식으로 사용한다.
const fs = require('fs').promises;

// 파일쓰기
// fs.writeFile('생성할 파일 경로', 내용)

const contents = 'contents: hello';
fs.writeFile('./contents.txt', contents);