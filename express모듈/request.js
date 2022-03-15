'use strict'

// request 객체 method와 속성

// Header(): 요청 header의 속성 지정 또는 추출한다.
// headers: 요청 header를 추출한다.
// query: GET방식으로 요청한 매개변수를 확인한다.
// body: POST방식으로 요청한 매개변수를 확인한다.
// params: routing 매개변수를 추출한다.

const express = require('express');
const app = express();

app.use((req, res) => {
    const agent = req.header('User-Agent');
    const paramName = req.query;
    const chrome = 'Hello Chrome';
    const Other = 'Hello Other';

    console.log('headers:', req.headers);
    console.log('paramName:', paramName);
    console.log('baseUrl:', req.baseUrl);
    console.log('hostname:', req.hostname);
    console.log('protocol:', req.protocol);

    agent.toLowerCase().match(/chrome/) ? res.write(`<h1>${chrome}</h1>`) : res.write(`<h1>${Other}</h1>`);
    res.write(`<p>${agent}</p>`);
    res.write(`<p>${paramName.name}</p>`);
    res.end();
});

const server = app.listen(1995, () => console.log('Server 실행. http://localhost:1995'));
setTimeout(() => {
    server.close();
    console.log('Server 종료. http://localhost:1995');
}, 10000);