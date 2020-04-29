const { users, students } = require('./data')
const url = require('url');




const userRequestResponseHandler = (request, response) => {
    let searchedName = []

    response.setHeader("Access-Control-Allow-Origin", "*");
    const parsedUrl = url.parse(request.url, true)
    console.log(parsedUrl);
    if (request.method == 'GET' && parsedUrl.pathname == '/users') {
        if (parsedUrl.query.username) {
            let username = parsedUrl.query.username;
            searchedName = users.filter((eachUser) => eachUser.username.includes(username))
        }
        else {
            searchedName = [...users];
        }
    }


    response.end(JSON.stringify(searchedName));


}



const studentRequestResponseHandler = (request, response) => {

    let filteredBranch = [...students];
    response.setHeader("Access-Control-Allow-Origin", "*");
    const parsedUrl = url.parse(request.url, true)
    console.log(parsedUrl);
    if (request.method == 'GET' && parsedUrl.pathname == '/students' && parsedUrl.query.branch && parsedUrl.query.branch != 'ALL')
            filteredBranch = students.filter(eachStudent => eachStudent.branch == parsedUrl.query.branch)


    response.end(JSON.stringify(filteredBranch))
}


const pagesRequestResponseHandler = (request , response) =>{
    response.setHeader("Access-Control-Allow-Origin", "*");
    
    const parsedUrl = url.parse(request.url , true)
    console.log(parsedUrl)
    if(parsedUrl.pathname == '/home') 
    {
        response.end('home page')

    }
    if(parsedUrl.pathname == '/about')
    {
        response.end(" about page")
    }
    if(parsedUrl.pathname == '/Contactus')
    {
        response.end(" contact page ")
    }


} 


module.exports = { userRequestResponseHandler, studentRequestResponseHandler , pagesRequestResponseHandler }