const route = require('express').Router()
const Controller = require('../Controller')

route.get('/' , Controller.getItems)
route.post('/' , Controller.addItems)
route.delete('/:id' , Controller.deleteItems)
route.put('/:id' , Controller.updateItems)


module.exports = route 
