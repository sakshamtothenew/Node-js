const express = require('express')
const bodyParser = require('body-parser')
const { userData } = require('./data')
const session = require('express-session')
const cors = require('cors')
const axios = require('axios')

require('./config/passport')(passport);
const sessions = [];


const data = userData.map((o, i) => {
    return { ...o, createdAt: Date.now() + i }
});


const addCreatedAt = (req, res, next) => {
    req.body.createdAt = Date.now();
    next();
}

const checkAuthentication = (req , res , next) => {
     if(req.isAuthenticated()){
         next();
     }
     else {
        alert('you are not authenticated')
        res.redirect('http://localhost:3000/auth/Signup')
     }
}

const getindex = (time) => {

    for (let i = 0; i < data.length; i++) {
        if (data[i].createdAt == time) {
            return i;
        }
    }
}


const app = express();


app.use(session({ secret: "sshhhhss", saveUninitialized: true, resave: true, cookie: { maxAge: (60000 * 5) } }))

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use('/aboutus', express.static(__dirname + "/aboutus"))


app.use('/auth' , require('./routes/user.routes'))


const sessionValidator = (req, res, next) => {
    console.log("this happened")
    const sessionid = req.params.id;
    for (i in sessions) {
        if (sessions[i].sessionid == sessionid) {
            if (sessions[i].expire < Date.now())
                req.valid = false;
            else { req.valid = true; }

            next()
            console.log("this reaches here")
        }
    }
    req.valid = false;
    next();
}




app.get('/session', (req, res) => {
    console.log(req.session)

    let sess = req.session;
    res.send(sess);
})



app.post('/session', (req, res) => {

    const sessionObj = {
        sessionid: req.sessionID,
        expire: Date.now() + (60000)
    }
    sessions.push(sessionObj);
    console.log(sessions);

    res.send(sessionObj);

})


app.get('/:id', sessionValidator, (req, res) => {


    if (req.valid) {
        res.send(data)

    }
    else {
        res.send("the session has been expired")

    }

})



app.delete('/:timestamp', (req, res) => {


    const timestamp = req.params.timestamp
    const index = getindex(parseInt(timestamp));
    data.splice(index, 1);
    res.send(data);
})




app.post('/adduser/:id', sessionValidator, addCreatedAt, (req, res) => {

    if (req.valid == true) {
        const user = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            branch: req.body.branch,
            createdAt: req.body.createdAt
        }

        data.push(user);
        console.log(data);

        res.send("true");
    }
    else 
    res.send("false")

})



app.get('/aboutus', (req, res) => {

    res.send("this is saksham sachdeva , made by love for users")
})


app.get('/github/:username' , (req , res) => {

    axios.get('https://api.github.com/users/'+req.params.username)
    .then(response => {
            console.log(response)
            res.send(response.data.html_url);
    })
    .catch(err => res.send("Not Found"))
})


app.listen(5000, () => {
    console.log("app is listening at http://localhost:5000")
})