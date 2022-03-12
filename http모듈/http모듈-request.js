'use strict'

// request
// - url: url 정보
// - headers: 요청 message의 header 정보
// - method: client 요청 벙식(get, post)
// - httpVersion: http 버전

const fs = require('fs'); // file control
const http = require('http'); // web server
const url = require('url'); // url control

const server = http.createServer((request, response) => {
    let pathname = url.parse(request.url);
    pathname = url.parse(request.url).pathname;

    if(pathname === '/') {
        fs.readFile('../exam.html', (err, data) => {
            response.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
            response.end(data);
            console.log(url.parse(request.url));
            console.log('------------');
            console.log('pathname:',pathname);
        });
    }else if(pathname === '/example') {
        fs.readFile('./exam.html', (err, data) => {
            response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            response.end(data);
            console.log('pathname:',url.parse(request.url));
            console.log('------------');
            console.log('pathname:',pathname);
        });
    }
}).listen(1995, () => console.log('Server가 실행되었습니다. http://localhost:1995'));


const closeServer = () => {
    server.close();
    console.log('Server가 종료되었습니다. http://localhost:1995');
};
setTimeout(closeServer, 10000);
