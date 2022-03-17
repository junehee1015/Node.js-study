'use strict'

// insert
// insert into () values ();
const mysql = require('mysql');

// DB 연결 정보
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0000',
    database: 'book_table',
    port: 3306
});

// DB 연결
connection.connect();

// data 추가
connection.query(`insert into books (genre, name, writer, releasedate) values ('action', 'Killer', 'C.unknown', '2022-02-05')`, (err, results, fields) => {
    if(err) throw err;
    console.log(results);
});

// 연결 종료
connection.end();