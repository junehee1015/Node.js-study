// 파일읽기
// fs.readFileSync() -> 동기로 열기
// fs.readFile() -> 비동기로 열기

const fs = require('fs');

// 동기로 열기
// fs.readFileSync()
const dataSync = fs.readFileSync('./contents.txt');
const str1 = dataSync.toString();
console.log(dataSync);
console.log(str1);


// 비동기로 열기
// fs.readFile('파일경로', (error, data))

// fs.open()으로 파일을 연다. 옵션에 따라서 파일의 접근 방법이 달라진다.
// 옵션
// r  : 읽기 상태로 연다. 파일이 존재하지 않으면 Error.
// r+ : 읽기/쓰기 상태로 연다. 파일이 존재하지 않으면 Error.
// w  : 쓰기 상태로 연다. 파일이 존재하지 않으면 생성. 파일이 존재하면 내용을 초기화하고 다시 써내려간다.
// w+ : 일기/쓰기 상태로 연다. 파일이 존재하지 않으면 생성. 파일이 존재하면 내용을 초기화하고 다시 써내려간다.
// a  : 추가 쓰기 상태로 연다. 파일이 존재하지 않으면 생성한다.
// a+  : 추가 읽기/쓰기 상태로 연다. 파일이 존재하지 않으면 생성한다.
const data = fs.readFile('./contents.txt', (error, data) => {
    if(error) throw error;
    console.log('error:', error);
    console.log('data:', data);
    console.log('data:', data.toString());
});