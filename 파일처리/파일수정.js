// νμΌμμ 
// fs.appendFile()

const fs = require('fs');

fs.appendFile('./contents.txt', '\nappend contents', err => {
    if(err) throw err;
    console.log('append');
});