'use strict'

// delete from ~ where ~ 

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0000',
    database: 'book_table',
    port: '3306'
});

connection.connect();

// delete
connection.query(`delete from books where number = 2`, (err, data, field) => {
    if(err) throw err;
    console.log(data);
});

// delete 확인
connection.query(`select * from books`, (err, data, field) => {
    if(err) throw err;
    console.log(data);
});

// 연결 종료
connection.end();