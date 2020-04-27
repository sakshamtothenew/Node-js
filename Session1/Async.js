// Below mentioned is example of async reading of file i.e non blocking

const fs = require('fs')

const fileContent  = fs.readFile('./toBeReadFile.txt' , 'Utf8' , 

function(err , content) {
    console.log(content)
})

console.log("hello world");


// OutPut 

//  hello world 
//  this is a sample text file contains a sentence.
