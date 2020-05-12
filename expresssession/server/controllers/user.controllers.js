const {addUser} = require('../services/user.service')


export const addUser = async  (req , res) => {

        const data = await addUser;
        res.send(data)
}