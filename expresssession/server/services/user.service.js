const {User} = require('../model/user.model')

 const addUser = async ({
    email , 
    password,
    name 
}) => {
           
    const newUser = new User({
     name ,
     email , 
     password
    })
  const user =   newUser.save()
    .then(result => result)
    .catch(err=> err)
    
  return user;
}


module.exports = {
    addUser 

}