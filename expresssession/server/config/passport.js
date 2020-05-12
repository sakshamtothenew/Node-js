const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

const { User } = require('../model/user.model')


module.exports = function (passport) {
    passport.use(
        new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
            User.findOne({
                email: email
            })
                .then(user => {
                        console.log("it reached here ")
                    if (!user) {
                        done(null, false, { message: 'invalid user , please try again' })
                    }

                    bcrypt.compare(password, user.password, (err, isMatch) => {

                        if (isMatch) {
                            return done(null, user);
                        } else {
                            return done(null, false, { message: 'password incorrect' })
                        }

                    })
                })
        })
    )


    passport.serializeUser(function (user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });

}


