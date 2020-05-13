
 const checkAuthentication = (req , res , next) => {

    console.log(req.isAuthenticated())
      console.log(req.user);
    if(req.isAuthenticated()){
        next();
    }
    else {
    
       res.send({message : "please Login/signup"})
    }
}
module.exports = {checkAuthentication}