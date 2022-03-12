'use strict'

const http = require('http');
const server = http.createServer();

// http모듈의 server 객체 event
// -> on('event', callback) method를 사용하여 event 연결

// Client -> Server (request)
// Client <- Server (response)

// request: client가 server에 요청
// connection: client 접속시 발생
// close: server가 종료시 발생
// clientError: client에서 오류 발생시 발생
// checkContinue: client가 지속적으로 연결하고 있을 때 발생
server.on('request', () => console.log('request: Server에 요청하였습니다.'));
server.on('connection', () => console.log('connection: client가 접속하였습니다.'));
server.on('checkContinue', () => console.log('checkContinue: client가 접속중입니다.'));
server.on('close', () => console.log('close: 접속이 종료되었습다.'));

server.listen(1995, () => console.log('Server가 실행되었습니다. http://localhost:1995'));
const close = () => {
    server.close();
    console.log('Server가 종료되었습니다. http://localhost:1995');
};
setTimeout(close, 3000);
