'use strict'

const mysql = require('mysql');
const express = require('express');
const fs = require('fs');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();

// DB connect info
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0000',
    database: 'book_table',
    port: '3306'
});

// Parsing
app.use(bodyParser.urlencoded({extended: false}));


// Server
app.listen(1995, () => {
    console.log('Server running. http://localhost:1995');
    connection.connect();
});


// Read
app.get('/', (req, res) => {
    fs.readFile('read.html', 'utf-8', (err, data) => {
        connection.query('select * from books', (err, result, field) => {
            if(err) throw err;
            res.send(ejs.render(data, {data: result}));
        });
    });
});


// Create Page
app.get('/create', (req, res) => {
    fs.readFile('create.html', 'utf-8', (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
// Create
app.post('/create', (req, res) => {
    const body = req.body;
    connection.query('insert into books (genre, name, writer, releasedate) values (?, ?, ?, ?)',
    [body.genre, body.name, body.writer, body.releasedate], () => {
        res.redirect('/');
    });
});


// Update Page
app.get('/modify/:id', (req, res) => {
    fs.readFile('update.html', 'utf-8', (err, data) => {
        connection.query('select * from books where number = ?', [req.params.id], (err, result) => {
            if(err) throw err;
            res.send(ejs.render(data, {data: result[0]}));
        });
    });
});
// Update
app.post('/modify/:id', (req, res) => {
    const body = req.body;
    connection.query('update books set genre = ?, name = ?, writer = ? where number = ?',
    [body.genre, body.name, body.writer, req.params.id], (err, data) => {
        if(err) throw err;
        res.redirect('/');
    });
});


// Delete
app.get('/delete/:id', (req, res) => {
    connection.query('delete from books where number = ?', [req.params.id], (err, data) => {
        if(err) throw err;
        res.redirect('/');
    });
});