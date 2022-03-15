'use strict'

// cookie parser middleware

// npm install cookie-parser --save로 설치한다.
// cookie header를 parsing하고 request.cookies를 cookie 이름으로 key가 된 객체로 채운다.

const express = require('express');
const cookie_parser = require('cookie-parser');
const app = express();

app.use(cookie_parser());

app.get('/set', (req, res) => {
    console.log('Set Cookie 호출.');
    res.cookie('user', {
        id: 'cookie',
        name: 'cookie name',
        authorized: true
    });
    res.redirect('/get');
});

app.get('/get', (req, res) => {
    console.log('Get Cookie 호출.');
    res.send(req.cookies);
});

const server = app.listen(1995, () => console.log('Server 실행. http://localhost:1995'));
setTimeout(() => {
    server.close(() => console.log('Server 종료. http://localhost:1995'));
}, 10000);