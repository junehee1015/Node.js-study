'use strict'

// Cookie
// client가 server에 접속할 때, server가 client에게 심어놓은 작은 정보 조각.
// response.writeHead에 Set-Cookie 속성 사용.

const fs = require('fs');
const http = require('http');
const server = http.createServer((request, response) => {
    // Cookie 존재 유무 확인.
    if(request.headers.cookie) {
        // Cookie 추출하기.
        const cookie = request.headers.cookie.split('; ').map(value => {
            value = value.split('=');
            return {
                name: value[0],
                value: value[1]
            };
        });
        console.log(cookie);
        fs.readFile('../exam.html', (err, data) => {
            response.writeHead(200, {'Content-Type': 'text/html; charset=uft-8'});
            response.write(data);
            response.end(`<h3>${JSON.stringify(cookie)}</h3>`);
        });
    }else {
        fs.readFile('../exam.html', (err, data) => {
            // Cookie의 만료일 설정.
            let expires = new Date();
            expires.setDate(expires.getDate() + 1);

            response.writeHead(200, {
                'Content-Type': 'text/html; charset=uft-8',
                // Cookie 설정
                // 만료일 설정시 GMT방식으로 변환하기위해 toUTCString()을 사용하여 변환한다.
                'Set-Cookie': [`1=cookie1; Expires=${expires.toUTCString()}`, `2=cookie2; Expires=${expires.toUTCString()}`]
            });
            response.write(data);
        });
    }
}).listen(1995);

const closeServer = () => {
    server.close();
    console.log('Server 종료. http://127.0.0.1:1995');
};
setTimeout(closeServer, 10000);