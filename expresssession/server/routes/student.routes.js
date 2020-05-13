const route = require('express').Router()
const { getStudents, addStudents, deleteStudents } = require('../controllers/students.controllers')

// const {chtoeckAuthentication} = require('../config/auth')
const verifyToken = require('../config/verifytoken')

route.get('/', verifyToken , getStudents)

route.post('/', verifyToken , addStudents)

route.delete('/:id', deleteStudents)

module.exports = route;