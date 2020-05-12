const route = require('express').Router()
const { getStudents, addStudents, deleteStudents } = require('../controllers/students.controllers')



route.get('/', getStudents)

route.post('/', addStudents)

route.delete('/:id', deleteStudents)

module.exports = route;