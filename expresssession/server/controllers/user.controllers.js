const {addUser} = require('../services/user.service')
const bcrypt = require('bcrypt')

export const addUser = async  (req , res) => {

  const salt = 10;
  req.body.password =  bcrypt.hashSync(req.body.password , salt);
    
        const data = await addUser(req.body);
        res.send(data)
}


export const authenticate = async (req , res ) => {

    passport.authenticate("local", {
        successRedirect: "http://localhost:3000/users/",
        failureRedirect: "http://localhost:3000/auth/login",
        failureFlash: true
      })
}