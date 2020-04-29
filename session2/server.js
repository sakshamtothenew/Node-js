const http = require('http')
const url = require('url');
const { users } = require('./data')
const { userRequestResponseHandler, studentRequestResponseHandler, pagesRequestResponseHandler } = require('./ReqResHandler')



const server = http.createServer((request, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");
    const parsedUrl = url.parse(request.url, true)
    let res = null;
    if (parsedUrl.pathname == '/users') {

        res = userRequestResponseHandler(request)
        console.log(res)
    }
    else if (parsedUrl.pathname == '/students') {
        res = studentRequestResponseHandler(request);
        console.log(res);
    }
    else {
        res = pagesRequestResponseHandler(request);
        console.log(res)
    }

    response.end(res);
})




server.listen(5000, () => {
    console.log("server is running")
})
