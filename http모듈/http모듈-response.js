'use strict'

// response
// 사용자의 요청에 대해 응답을 주는 객체
// writeHead(상태코드, {Header정보}) = 응답헤더
// write() - 응답본문
// end() - 응답종료
const fs = require('fs'); // file control
const http = require('http'); // web server
const server = http.createServer((request, response) => {
    // HTTP 상태코드(200, 404, 500 등)
    fs.readFile('../exam.html', (err, data) => {
        response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        response.end(data);
    });
}).listen(1995, () => console.log('Server가 실행되었습니다. http://localhost:1995'));


// Server Event
server.on('connection', () => console.log('connection: Server 연결.'));
server.on('close', () => console.log('close: Server 종료.'));


// Server Close
const closeSv = () => {
    server.close();
    console.log('Server가 종료되었습니다. http://localhost:1995');
};
setTimeout(closeSv, 10000);