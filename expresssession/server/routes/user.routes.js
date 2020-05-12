const {addUser , authenticate} = require('../controllers/user.controllers')
const route = require('express').Router()


route.post('/Signup' , addUser);

route.post('/login' , authenticate )


module.exports = route;


