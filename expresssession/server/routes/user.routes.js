const {addUser} = require('../controllers/user.controllers')
const route = require('express').Router()


route.post('/Login' , addUser);


module.exports = route;


