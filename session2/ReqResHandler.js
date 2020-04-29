const { users, students } = require('./data')
const url = require('url');




const userRequestResponseHandler = (request) => {
    let searchedName = []


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

    return JSON.stringify(searchedName)



}



const studentRequestResponseHandler = (request) => {

    let filteredBranch = [...students];

    const parsedUrl = url.parse(request.url, true)
    console.log(parsedUrl);
    if (request.method == 'GET' && parsedUrl.pathname == '/students' && parsedUrl.query.branch && parsedUrl.query.branch != 'ALL')
        filteredBranch = students.filter(eachStudent => eachStudent.branch == parsedUrl.query.branch)

    return JSON.stringify(filteredBranch)

}


const pagesRequestResponseHandler = (request) => {


    const parsedUrl = url.parse(request.url, true)
    console.log(parsedUrl)
    if (parsedUrl.pathname == '/home') {

        return "home page"

    }
    if (parsedUrl.pathname == '/about') {

        return "about page"
    }
    if (parsedUrl.pathname == '/Contactus') {

        return "contact page"
    }


}


module.exports = { userRequestResponseHandler, studentRequestResponseHandler, pagesRequestResponseHandler }