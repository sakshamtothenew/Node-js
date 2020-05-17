const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const route = require('./routes/items.route')

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

mongoose.connect("mongodb://localhost:27017/Inventory" , {useNewUrlParser : true , useUnifiedTopology : true})

app.use('/items' , route)

mongoose.connection.on("error" , (err) => {
    console.log(err);
})

mongoose.connection.on("connected" , ()=> {
    console.log("mongoose is connected...")
})
app.listen(5000 , () => {
    console.log('app iss listening at port 5000')
})


