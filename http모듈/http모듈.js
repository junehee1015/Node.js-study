'use strict'

// http 모듈 server 객체
// web server 생성과 실행
const http = require('http');


// createServer()
// http 모듈의 객체로 server를 생성한다.
const server = http.createServer();


// listen(port, callback) -> 서버 실행.
// url -> 프로토콜://주소:port

// 주소 -> domain, IP
// 127.0.0.1 = localhost -> code를 실행하고 있는 컴퓨터.

// port -> web의 기본 port는 80.
// port를 한정하는 것은 port를 아는 사용자만 접속할 수 있도록 보안 들어간 주소가 된다.
// port가 종료되지 않고 재실행하면 error 발생
server.listen(1995, () => {
    console.log('Server가 실행되었습니다. http://localhost:1995');
});


// close() - 서버 종료
// server.listen() 실행이 되지만 server.close()는 호출을 해야 실행이 된다.
const serverClose = () => {
    server.close();
    console.log('Server가 종료되었습니다. http://localhost:1995');
};
setTimeout(serverClose, 3000);


