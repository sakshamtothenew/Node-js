const { addUsers, authenticate } = require('../controllers/user.controllers')
const passport = require('passport')
const route = require('express').Router()
const url = require('url')
const jwt = require('jsonwebtoken')
route.post('/Signup', addUsers);

route.post('/login', authenticate)
route.get('/google',
    passport.authenticate('google', { scope: ['email', "profile"] }));

route.get("/google/callback",
    passport.authenticate("google"),
    (req, res) => {
        const user = req.user;

        jwt.sign({ user }, 'secretkey', { expiresIn: '60s' }, (err, token) => {
            res.redirect(url.format({
                pathname : 'http://localhost:3000' ,
                query :  {token}
            }))
        })
        // console.log(req.user);
        // res.redirect("http://localhost:3000/");
    });
module.exports = route;


