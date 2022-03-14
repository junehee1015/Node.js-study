'use strict'

// Template Engine
// -> template 양식과 특정 data 모델에 따른 입력 자료를 결합하여 원하는 결과 문서를 출력하는 소프트웨어이다.

// pug
// Express 모듈이 ejs, pug모듈을 주로 template 엔진으로 사용한다.
// compile(): pug문자열을 HTML문자열로 변경할 수 있는 함수 생성.
// npm install pug --save 로 설치해야 한다.

const http = require('http');
const fs = require('fs');
const pug = require('pug');
const server = http.createServer((req, res) => {
    fs.readFile('./pug.pug', 'utf-8', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

        // pug는 변수에 넣어 함수의 형태로 사용해야 실행된다.
        const fn = pug.compile(data);
        res.end(fn());
    });
}).listen(1995, () => console.log('Server 실행. http://localhost:1995'));
const closeServer = () => {
    server.close();
    console.log('Server 종료. http://localhost:1995');
};

setTimeout(closeServer, 10000);