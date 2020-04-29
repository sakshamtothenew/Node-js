const http = require('http')
const url = require('url');
const { users } = require('./data')
const {userRequestResponseHandler , studentRequestResponseHandler , pagesRequestResponseHandler} = require('./ReqResHandler')


const server1 = http.createServer(userRequestResponseHandler)
const server2 = http.createServer(studentRequestResponseHandler)
const server3 = http.createServer(pagesRequestResponseHandler)

server1.listen(5000, () => {

    console.log("server1 is listening at 5000...")
})

server2.listen(4000 , () => {
    console.log("this is student server llistening at 4000 ...")

})

server3.listen(3005 , () => {
    console.log("this is about page running at port 3005...")
})