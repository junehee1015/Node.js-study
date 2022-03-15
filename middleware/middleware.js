'use strict'

// middleware

// express Module을 통해 request와 response의 과정 중에 다른 logic을 실행 할 수 있도록 분리된 함수이다.
// 즉, 요청과 응답 사이에 특수한 기능을 수행한다. => Module의 구성요소 중 하나가 middleware이다.

// app.use()를 사용하여 middleware를 등록하고 필요한 요청에 따른 처리를 할 수 있다.
// app.use()를 사용하여 eventListener를 연결할 수 있다.
// next() method를 사용하여 순차적으로 다음 middleware로 요청이 넘어간다.

const express = require('express');
const app = express();

// middleware 1
app.use((req, res, next) => {
    console.log('First Middleware');
    req.user1 = 'Hello';
    next();
});

// middleware 2
app.use((req, res, next) => {
    console.log('Second Middleware');
    req.user2 = 'Middleware';
    next();
});

app.use((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write(`<h1>${req.user1}</h1>`);
    res.write(`<h1>${req.user2}</h1>`);
    res.end(`<h2>응답 결과</h2>`);
});


const server = app.listen(1995, () => console.log('Server 실행. http://localhost:1995'));
setTimeout(() => {
    server.close();
    console.log('Server 종료. http://localhost:1995');
}, 10000);