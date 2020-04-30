const express = require('express')
const bodyParser = require('body-parser')
const { userData } = require('./data')
const cors = require('cors')

const data = userData.map((o, i) => {
    return { ...o, createdAt: Date.now() + i }
});


const addCreatedAt = (req, res, next) => {
    req.body.createdAt = Date.now();
    next();
}


const getindex = (time) => {

    for (let i = 0; i < data.length; i++) {
        if (data[i].createdAt == time) {
            return i;
        }
    }
}


const app = express();



app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use( '/aboutus' , express.static(__dirname + "/aboutus"))

app.get('/', (req, res) => {
   
    res.send(data)
})



app.delete('/:timestamp', (req, res) => {

    const timestamp = req.params.timestamp
    const index = getindex(parseInt(timestamp));
    data.splice(index, 1);
    res.send(data);
})




app.post('/adduser', addCreatedAt, (req, res) => {


    const user = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        branch: req.body.branch,
        createdAt: req.body.createdAt
    }

    data.push(user);
    console.log(data);

    res.send("the data has been successfully saved");

})



app.get('/aboutus', (req, res) => {

    res.send("this is saksham sachdeva , made by love for users")
})




app.listen(5000, () => {
    console.log("app is listening at http://localhost:5000")
})