// below mention is example of sync reading of file i.e blocking

const fs = require('fs');

const fileContent = fs.readFileSync('toBeReadFile.txt', 'Utf8')

console.log(fileContent);

console.log("Hello world");







// OutPut 
//  this is a sample text file contains a sentence.

//  hello world 
