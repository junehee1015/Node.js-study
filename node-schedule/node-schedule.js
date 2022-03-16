'use strict'

// node-schedule

// npm install node-schedule --save

// Job schedule Module이다.
// node schedule은 시간 기반 scheduling이다.
// 간격 event는 setInterval()을 사용하면 된다.
// 매월, 매시, 매분, 매초과 같이 시간 단위로 발생하는 event를 구현할 수 있다.
// cancel() method를 사용하여 등록한 schedule을 취소할 수 있다.

// cron 표현식
// * * * * * *
// second(0~59)
// minute(0~59)
// hour(0~23)
// day of month(1~31)
// month(1~12)
// day of week(요일)(0~7)(0 or 7 is Sun)

const schedule = require('node-schedule');

// 특정 시간에 실행
// 2022년 3월 15일 17:50:00 (월 0~11)
const date = new Date(2022, 2, 15, 17, 42, 59);
const a = schedule.scheduleJob(date, () => {
    console.log('no pain, no gain');
});


// 매주 월~금 11:30:00 AM
const b = schedule.scheduleJob('00 30 11 * * 1-5', ()=> { // cron 표현식
    console.log('매주 월~금 11:30:00 AM 알람');
});


// 0 sun, 6 sat
// 월~일 17시 17분
const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = [0, new schedule.Range(0, 6)];
rule.hour = 17;
rule.minute = 17;
const c = schedule.scheduleJob(rule, () => {
    console.log('월~일 17시 17분 알람');
});


// 0 sun, 6 sat
// 매 주 토요일 21:10:00
const d = schedule.scheduleJob({houe: 21, minute: 10, dayOfWeek: 6}, () => {
    console.log('매 주 토요일 21:10:00 알람');
});


// set start, end
const start = new Date(Date.now() + 5000);
const end = new Date(start.getTime() + 5000);
const e = schedule.scheduleJob({start: start, end: end, rule: '*/1 * * * * *'}, () => {
    console.log('set start, end 알림');
});


// 실행 취소
a.cancel();
b.cancel();
c.cancel();
d.cancel();
e.cancel();
