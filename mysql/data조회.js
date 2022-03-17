'use strict'

// data 조회
// select * from ~

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0000',
    database: 'book_table',
    port: '3306'
});

connection.connect();

// 1. select * from ~
connection.query('select * from books', (err, results, field) => {
    if(err) throw err;
    console.log('----------select * from---------');
    console.log(results);
});

// 2. 각각 field 명칭
connection.query('select number, genre, name, writer, releasedate from books', (err, results, field) => {
    if(err) throw err;
    console.log('---------field 명칭----------');
    console.log(results);
});

// 3. select * from ~ where ~
connection.query(`select * from books where genre = 'romance'`, (err, results, field) => {
    if(err) throw err;
    console.log('---------select * from where-------------');
    console.log(results);
});

// 4. select * from ~ where ~ or ~
connection.query(`select * from books where genre = 'fantasy' or genre = 'action'`, (err, results, field) => {
    if(err) throw err;
    console.log('---------select * from where or----------');
    console.log(results);
});

// 5. select * from ~ where ~ like ~
// -> field 값중 
connection.query(`select * from books where releasedate like '2022%'`, (err, results, field) => {
    if(err) throw err;
    console.log('---------select * from where like----------');
    console.log(results);
});

// 6. select * from ~ order by
// -> order by 정렬(asc, desc)
connection.query(`select * from books order by number desc`, (err, results, field) => {
    if(err) throw err;
    console.log('---------select * from where order by----------');
    console.log(results);
});

// 연결 종료
connection.end();