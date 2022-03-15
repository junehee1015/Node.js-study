'use strict'

// morgan middleware

// npm install mogan --save로 설치한다.
// log 기록을 남긴다.
// 매개변수는 combined, common

const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('combined'));
app.use(morgan('common'));
app.use(morgan(':method + :date'));
app.use(morgan(':status + :url'));
app.use((req, res) => {
    res.send('<h1>express morgan</h1>');
});

const server = app.listen(1995, () => console.log('Server 실행. http://localhost:1995'));
setTimeout(() => {
    server.close(() => console.log('Server 종료. http://localhost:1995'));
}, 10000);
