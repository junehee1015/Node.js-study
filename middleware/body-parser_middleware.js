'use strict'

// body-parser_middleware

// npm install body-parser --save 로 Module을 설치한다.
// parser: data를 내가 원하는 형태의 data로 가공하는 과정을 수행하는 Module 또는 method이다.
// POST요청 처리시 사용자가 보낸 data를 추출할 수 있다.

const express = require('express');
const app = express();
const body_parser = require('body-parser');

// application/x=www-form-urlencoded 방식의 Content-Type data를 받아준다.
// extended: false -> querystring library를 사용.
// extended: true -> qs library를 사용. (default 값은 true이지만 더 이상 사용하지 않는다.)
app.use(body_parser.urlencoded({extended: false}));

// application/json 방식의 Content-Type data를 받아준다.
app.use(body_parser.json());

app.use(express.static(`${__dirname}/..`)); // html 파일 위치
app.use((req, res) => {
    const id = req.body.id || req.query.id;
    const pw = req.body.pw || req.query.pw;

    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write(`<h1>Login Infomation</h1>`);
    res.write(`<h2>ID: ${id}</h2>`);
    res.write(`<h2>PW: ${pw}</h2>`);
    res.end(JSON.stringify(req.body, null, 2));
});

const server = app.listen(1995, () => console.log('Server 실행. http://localhost:1995'));
setTimeout(() => {
    server.close(() => console.log('Server 종료. http://localhost:1995'));
}, 15000);
