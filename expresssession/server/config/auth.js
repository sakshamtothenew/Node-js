
 const checkAuthentication = (req , res , next) => {
    if(req.isAuthenticated()){
        next();
    }
    else {
       alert('you are not authenticated')
       res.redirect('http://localhost:3000/auth')
    }
}
module.exports = {checkAuthentication}