const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose')

const CLIENT_ID = '379457355450-4mad2t5pkits636u3sfcuvk0n8dhrg4e.apps.googleusercontent.com';
const CLIENT_SECRET = 'DKbq2BnjVq7r7TT3WlcKGCqh';

const { User } = require('../model/user.model')
module.exports = function (passport) {
    passport.use(
        new GoogleStrategy(
            {

                clientID: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                callbackURL: "/auth/google/callback",
            },
            (accessToken, refreshToken, profile, done) => {
                User.findOne({ email: profile._json.email, provider: 'google' })
                    .then(user => {
                        if (!user) {
                            new User({
                                name: profile._json.name,
                                email: profile._json.email,
                                provider: profile.provider
                            }).save()
                                .then(newUser => {
                                    console.log(newUser);
                                    done(null, newUser)
                                });

                        }
                        else {
                            done(null, user)
                        }


                    })
            }
        )
    );




    passport.serializeUser(function (user, done) {
        console.log("serialize ran")
        done(null, user._id);
    });

    passport.deserializeUser(function (id, done) {
        console.log("deserialize ran")
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
};