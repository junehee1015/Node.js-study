'use strict'

// connect-multiparty

// npm install connect-multiparty --save

// Web browser에서 파일을 전송할 때 multipart/form-data 인코딩 방식을 사용한다.
// 기존의 일반적인 방식은 application/x-www-form-urlencoded이다.

const express = require('express');
const fs = require('fs');
const multipart = require('connect-multiparty');

const app = express();

// 파일 경로
app.use(multipart({uploadDir: `${__dirname}/upload`}));

// html파일 불러오기
app.get('/', (req, res) => {
    fs.readFile('../multipart.html', (err, data) => {
        res.send(data.toString()); // toString()을 안하면 html파일이 다운로드 된다.
    });
});

// 파일 upload
app.post('/', (req, res) => {
    const imgFile = req.files.img; // form 태그의 input file의 name
    const outputPath = `${__dirname}/upload/${Date.now()}_${imgFile.name}`;

    console.log('outputPath:', outputPath);
    console.log('body:', req.body);
    console.log('files:', req.files);
    console.log('path:', imgFile.path);

    // upload 된 파일명 변경 후 다시 upload page로 이동
    fs.rename(imgFile.path, outputPath, () => {
        res.redirect('/');
    });
});

// server
const server = app.listen(1995, () => console.log('Server 실행. http://localhost:1995'));

setTimeout(() => {
    server.close();
    console.log('Server 종료. http://localhost:1995');
}, 15000);