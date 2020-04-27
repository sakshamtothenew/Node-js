 const http = require('http')



const server = http.createServer((request , response) => {
    response.writeHead(200,  {"Content-Type" : "text/html"})
        response.write("this is response Send by server listening at 3000")
        response.write("<h1>")
        response.write("Hello world")
        response.write("</h1>")

        response.end()
}) 


server.listen(3000 , ()=> {
    console.log("server is listening...")
})