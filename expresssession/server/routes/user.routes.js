const {addUsers , authenticate} = require('../controllers/user.controllers')
const route = require('express').Router()


route.post('/Signup' , addUsers);

route.post('/login' , authenticate )


module.exports = route;


