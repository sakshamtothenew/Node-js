const User = require('../model/user.model')

export const addUser = async ({
    email , 
    password,
    name 
}) => {
           
    const newUser = new User({
     name ,
     email , 
     password
    })
    newUser.save()
    .then(result => result)
    .catch(err=> err)

}

