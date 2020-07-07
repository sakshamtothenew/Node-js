

const child = require('child_process')

const process = child.execFile('cat' , ['Streams.js'] , (err , stdout , stderr)=> {
        if(err)
        {
            console.log(err)
        }

        console.log(stdout)
})