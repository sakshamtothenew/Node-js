
// this file require a data.txt file .
// file must be larger than 5mb to see working of code 

const fs = require('fs')



const readStream = fs.createReadStream("./data.txt", 'utf8')
const writeStream = fs.createWriteStream("./copy.txt");
const writeStream2 = fs.createWriteStream('./pipe.txt')
let chunckCount = 0;
readStream.on('data', (data) => {

    chunckCount++;
    console.log(chunckCount);
    writeStream.write(data)

})


readStream.pipe(writeStream2);