const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const cors = require('cors')
const axios = require('axios')
const mongoose = require('mongoose')
const passport = require('passport')


const app = express();
app.use(session({ secret: "anything", saveUninitialized: true, resave: true }))

require('./config/passport')(passport);
require('./config/passport-google')(passport);
mongoose.connect('mongodb://localhost:27017/Students')

app.use(cors())

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/aboutus', express.static(__dirname + "/aboutus"))
app.use('/auth', require('./routes/user.routes'))
app.use('/student', require('./routes/student.routes'))




app.get('/github/:username', (req, res) => {

    axios.get('https://api.github.com/users/' + req.params.username)
        .then(response => {

            res.send(response.data.html_url);
        })
        .catch(err => res.send("Not Found"))
})


app.listen(5000, () => {
    console.log("app is listening at http://localhost:5000")
})