// JSON.parse()
// JSON.stringify()와는 반대이다.
// JSON파일 불러오기. -> String 객체를 javascript 객체로 변환.

const fs = require('fs');

fs.readFile('./json.json', (err, data) => {
    if(err) throw err;
    console.log(data.toString());

    const json = JSON.parse(data.toString());
    console.log(json);

    json.forEach(value => {
        console.log(value.name, value.age);
    });
});