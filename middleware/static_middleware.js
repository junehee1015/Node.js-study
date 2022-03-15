'use strict'

// static middleware

// 쉽게 정적 파일을 처리할 수 있다.
// 정적 파일: css파일, js파일, img 등 요청해도 변경되지 않는 파일이다.
// express에 내장된 static middleware를 사용하거나 serve-static 외부 Module을 설치해서 사용한다.

const express = require('express');
const app = express();

app.use(express.static(`${__dirname}/img`)); // file 위치
app.use((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end(`<img src='top.jpg'>`);
});

const server = app.listen(1995, () => console.log('Server 실행. http://localhost:1995'));
setTimeout(() => {
    server.close();
    console.log('Server 종료. http://localhost:1995');
}, 10000);