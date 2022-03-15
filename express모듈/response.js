'use strict'

// express
// npm install express --save로 설치해야 한다.
// Web Server를 쉽게 구현할 수 있는 외부 모듈이다.
// http모듈에 여러 기능을 추가해서 쉽게 사용할 수 있게 만든 모듈이다.
// request, response


// response 객체 method

// json(): JSON 응답메세지 전송.
// redirect(): redirection 응답 전송.
// render(): template rendering.
// send(): JSON, HTML, Buffer 전송, 메세지 header에 Content-Type 자동 설정.
// sendStatus(): 상태코드와 상태메세지 전송.
// status(): 상태코드 설정, 응답 method 종료 x.
// download(): 파일 다운로드.

const express = require('express');
const app = express();

// app.use((req, res) => {
//     res.send('Hellow express Module');
// });


// get
app.get('/', (req, res) => {
    const result = [];
    const num = 9;
    for(let i=0; i<10; i++) {
        result.push({
            구구단: `${num} X ${i}`,
            답: `${num * i}`
        });
    }
    res.send(result);
});


// error 
app.get('/error', (req, res) => {
    res.status(404).send('404 Error!!!');
});


// close server
const server = app.listen(1995, () => console.log('Server 실행. http://localhost:1995'));
setTimeout(() => {
    server.close();
    console.log('Server 종료. http://localhost:1995');
}, 10000);

