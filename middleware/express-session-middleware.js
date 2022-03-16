'use strict'

// express-session

// npm install parseurl --save
// npm install express-session --save

// request 객체가 session 기능을 사용할 수 있게 한다.
// cookie로 비밀 정보를 보내면 아주 쉽게 유출될 수 있기 때문에 이러한 문제를 보완한 것이 session이다.

const express = require('express');
const parseurl = require('parseurl');
const session = require('express-session');

const app = express();

app.use(session({
    secret: 'keyboard dog', //  secret은 keyboard cat으로 랜덤한 값을 입력해준다. secret 값은 공개되어서는 안된다.
    resave: false,
    saveUninitialized: true
}));

app.use((req, res, next) => {
    if(!req.session.views) {
        req.session.views = {};
    }

    console.log('session:', req.session);
    console.log('views:', req.session.views);

    // get url
    const pathName = parseurl(req).pathname;

    // count views
    req.session.views[pathName] = (req.session.views[pathName] || 0) + 1;

    // 다음 middleware
    next();
});


app.get('/puddle', (req, res) => {
    res.send(`Hello Puddle~!! ${req.session.views['/puddle']}`);
});
app.get('/biggle', (req, res) => {
    res.send(`Hello Biggle~!! ${req.session.views['/biggle']}`);
});


// server
const server = app.listen(1995, () => console.log('Server 실행. http://localhost:1995'));

setTimeout(() => {
    server.close();
    console.log('Server 종료. http://localhost:1995');
}, 15000);