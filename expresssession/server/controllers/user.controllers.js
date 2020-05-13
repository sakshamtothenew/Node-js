const {addUser} = require('../services/user.service')
const bcrypt = require('bcrypt')
const passport = require('passport')
const jwt = require('jsonwebtoken')
const addUsers = async  (req , res) => {

  const salt = 10;
  req.body.password =  bcrypt.hashSync(req.body.password , salt);
    
        const data = await addUser(req.body);
        res.send(data)
}


 const authenticate =  (req , res , next ) => {
    passport.authenticate("local",(err , user , info) => {

      if(info)
      {
        console.log(info);
         res.send(info);
      }
      if(err) { next(err)} 

      if(user) {
          jwt.sign({user} , 'secretkey'  , {expiresIn : '60s'} , (err , token)=> {
            res.json({
              ...user._doc,
              token
            })
          })
        
        // res.send(user)
      
      // here we need to create token 
    } 
      
    })(req , res , next)
}


module.exports = {addUsers , authenticate}