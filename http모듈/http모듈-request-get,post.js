'use strict'

const http = require('http');
const fs = require('fs');
const url = require('url');
const server = http.createServer((request, response) => {
    if(request.method === 'GET') {
        fs.readFile('../exam.html', (err, data) => {
            response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            response.end(data);
            console.log(`${request.method}방식의 요청입니다.`);
        });
    }else if(request.method === 'POST') {
        // on() -> event 발생시
        // - error: error를 항상 먼저 처리한다.
        // - data: data가 있으면 실행.
        // - end: data처리가 다 끝났을 때
        request.on('data', data => {
            response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            response.end(data);
            console.log(`${request.method}방식의 요청입니다.`);
        });
    }
}).listen(1995, () => console.log('Server 실행. http://127.0.0.1:1995'));


const closeServer = () => {
    server.close();
    console.log('Server 종료. http://127.0.0.1:1995');
};
setTimeout(closeServer, 30000);