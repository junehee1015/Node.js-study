"use strict"

// ejs
// Web Page를 동적으로 처리하는 template 엔진 Module이다.
// -> 특정 문자열을 HTML형식의 문자열로 변환해준다.
// ejs Server에서 넘어온 data를 사용할 수 있다.

// 외부 Module이기 때문에 npm install ejs --save 로 설치한다.
// .ejs 파일 내에서 <% %>, <%= %> 형태의 태그를 사용하여 HTML 중간에 필요한 logic 및 data를 추가할 수 있다.
// -> <% %>: 변수 지정.
// -> <%= %>: 변수 사용.
// -> for문, if문을 통해 Server data를 HTML로 바로 만들 수 있는 것이 장점이다.

const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const server = http.createServer((req, res) => {
    fs.readFile('./ejs.ejs', 'utf-8', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        // response.end() 객체에 ejs.render(data)를 사용하여 파일을 불러온다.
        res.end(ejs.render(data, {
            // .ejs 파일의 변수 설정
            title: 'Multiplication Table',
            num: 5
        }));
    });
}).listen(1995, () => console.log('Server 실행. http://localhost:1995'));

const closeServer = () => {
    server.close();
    console.log('Server 종료. http://localhost:1995');
};
setTimeout(closeServer, 10000);