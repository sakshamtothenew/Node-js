const {addUser} = require('../services/user.service')
const bcrypt = require('bcrypt')
const passport = require('passport')

const addUsers = async  (req , res) => {

  const salt = 10;
  req.body.password =  bcrypt.hashSync(req.body.password , salt);
    
        const data = await addUser(req.body);
        res.send(data)
}


 const authenticate =  (req , res , next ) => {
  console.log('it came here')
    passport.authenticate("local",(err , user , info) => {
      if(err) {return next(err)} 
      if(user) {res.send(user)} 
      
    })(req , res , next)
}


module.exports = {addUsers , authenticate}