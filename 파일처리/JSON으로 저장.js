// fs.writeFile('./filename.json', JSON.stringify('contents'), err => {if(err) throw err});
// JSON 형식으로 파일 저장하기.

const fs = require('fs');

const contents = [
    {name: 'a', age: 11},
    {name: 'b', age: 23},
    {name: 'c', age: 52},
    {name: 'd', age: 37},
    {name: 'e', age: 28}
];
fs.writeFile('./json.json', JSON.stringify(contents), err => {if(err) throw err});