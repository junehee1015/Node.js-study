'use strict'

// crawler email 전송

// npm install request --save
// npm install cheerio --save
// npm install iconv-lite --save
// npm install nodemailer --save

const request = require('request');
const cheerio = require('cheerio');
const nodemailer = require('nodemailer');

const url = 'https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=105';
const iconv = require('iconv-lite');

const date = new Date();

let title = null;
const arrTitle = [];

function sendMail(arHeadline) {
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: '',
            pass: ''
        }
    });

    const mailOptions = {
        from: 'junehi1015@naver.com',
        to: 'junehi1015@naver.com',
        subject: `${date.toLocaleDateString()} IT/과학 Today news`,
        html: `${`<h1>IT/과학 실시간 뉴스 헤드라인</h1> <h2>${arHeadline}</h2> <br/> <a href="http://www.infopub.co.kr">`+'<img src="http://www.infopub.co.kr/pdspool/common/main_top/2016-11-02.jpg"/></a>'}`
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if(err) {
            console.log(err);
        }else {
            console.log('Message:', info.response);
        }
        transporter.close();
    });
}

const parse = (decodedResult) => {
    const $ = cheerio.load(decodedResult);
    const titles = $('.list_text_inner').find('a');

    for(let i=0; i<titles.length; i+=1) {
        title = $(titles[i]).text();
        arrTitle[i] = title.trim();
    }

    return arrTitle;
};

request({
    uri: url,
    method: 'GET',
    encoding: null,
}, (err, res, body) => {
    const decodedResult = iconv.decode(body, 'euc-kr');
    const arTitles = parse(decodedResult);
    sendMail(arTitles);
});