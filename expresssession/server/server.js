const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const cors = require('cors')
const axios = require('axios')
const mongoose = require('mongoose')
const passport = require('passport')


const app = express();
require('./config/passport')(passport);

mongoose.connect('mongodb://localhost:27017/Students')
app.use(session({ secret: "sshhhhss", saveUninitialized: true, resave: true, cookie: { maxAge: (60000 * 5) } }))



app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());


app.use('/aboutus', express.static(__dirname + "/aboutus"))
app.use('/auth' , require('./routes/user.routes'))
app.use('/student' , require('./routes/student.routes'))




app.get('/github/:username' , (req , res) => {

    axios.get('https://api.github.com/users/'+req.params.username)
    .then(response => {
            
            res.send(response.data.html_url);
    })
    .catch(err => res.send("Not Found"))
})


app.listen(5000, () => {
    console.log("app is listening at http://localhost:5000")
})