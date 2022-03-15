'use strict'

// router middleware
// router level middleware는 express.Router() instance에 바인드 된다.
// 이 점을 제외하면 application level middleware와 동일한 방식으로 작동한다.

// 특정 root url을 기점으로 기능이나 logic별로 routing을 나눠서 관리할 수 있다.
// user router에는 다른 router에 필요 없는 인증 middleware를 따로 추가하는 등의 작업을 할 수 있다.

const express = require('express');
const app = express();

app.get('/one', (req, res) => {
    res.send(`<a href='/two'>Street 200</a>`);
});

app.get('/two', (req, res) => {
    res.send(`<a href='/one'>Street 100</a>`);
});

app.get('/three/:number', (req, res) => {
    const street = req.params.number;
    res.send(`Street ${street}`);
});

app.get('/four/:number', (req, res) => {
    const ave = req.params.number;
    res.send(`Ave ${ave}`);
});

const server = app.listen(1995, () => console.log('Server 실행. http://localhost:1995'));
setTimeout(() => {
    server.close(() => console.log('Server 종료. http://localhost:1995'));
}, 10000);