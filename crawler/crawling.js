'use strict'

// crawling
// 웹사이트를 정기적으로 돌며 정보를 추출하는 기술.

// request Module
// npm install request --save
// npm install iconv-lite --save

// 웹에서 data를 받아올 수 있다.

const request = require('request');
const iconv = require('iconv-lite');
const charset = require('charset');

const crawl = callback => queryString => request({
    uri: 'https://www.google.com',
    encoding: null,
    method: 'GET',
    qs: queryString,
    timeout: 10000,
    followRedirect: true,
    maxRedirects: 10
}, (err, res, body) => {
    if(!err && res.statusCode === 200) {
        const decodedResult = iconv.decode(body, 'euc-kr');
        callback(decodedResult);
    }else {
        console.log(`err: ${res.statusCode}`);
    }
});

const parse = (decodedResult) => {
    console.log('decodedResult:', decodedResult);
};
crawl(parse)();

// cheerio Module
// npm install cheerio --save

// 웹 스크래핑 Module이다.
// 웹 스크래핑: 웹 사이트의 특정 정보를 추출해 내는 것.
// html형식으로 되어 있는 문자열에서 특정 값을 뽑아 낼때 사용한다.

const cheerio = require('cheerio');

const $ = cheerio.load('<html><h2 class="title">Hello</h2></html>');
const titleText = $('.title').text();

console.log(titleText);

