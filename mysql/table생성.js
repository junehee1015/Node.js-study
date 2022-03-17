'use strict'

// table 생성

// npm install mysql --save
// prompt에서 만든 database에 table을 생성한다.

const mysql = require('mysql');

// 연결 DB정보 입력
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0000',
    database: 'book_table',
    port: '3306'
});

// database 연결
connection.connect();

// create table
// create table tablename ();
connection.query('create table books (number INT NOT NULL AUTO_INCREMENT PRIMARY KEY, genre VARCHAR(20) NOT NULL, name VARCHAR(50) NOT NULL, writer VARCHAR(30) NOT NULL, releasedate date NOT NULL);', (err, results, fields) => {
    if(err) throw err;
    console.log(results);
});
connection.query('describe books', (err, results, fields) => {
    if(err) throw err;
    console.log(results);
});

// 연결 종료
connection.end();