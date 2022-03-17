'use strict'

// crawler

// npm install request --save
// npm install cheerio --save
// npm install iconv-lite --save

// 뉴스 속보 찾기
const cheerio = require('cheerio');
const request = require('request');

const url = 'https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=105';
const iconv = require('iconv-lite');

let title = null;
const arrTitle = [];

const parse = (decodedResult) => {
    const $ = cheerio.load(decodedResult);
    // url 주소에 들어가서 html 태그를 보고 헤드라인 제목 태그를 찾아서 작성해준다.
    const titles = $('.list_text_inner').find('a');

    for(let i=0; i<titles.length; i+=1) {
        title = $(titles[i]).text();
        arrTitle[i] = title.trim();
    }

    console.log(arrTitle);
};

// parsing
request({
    uri: url,
    method: 'GET',
    encoding: null,
}, (err, res, body) => {
    const decodedResult = iconv.decode(body, 'euc-kr');
    parse(decodedResult);
});