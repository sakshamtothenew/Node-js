const mongoose = require('mongoose')
const passportLocal = require('passport-local-mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
    
    },
    name: {
        type: String,
    
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})


module.exports.User   = mongoose.model('users' , userSchema)