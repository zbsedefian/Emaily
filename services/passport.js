// Include passport module as well as Google+'s oauth20 strategy
// Include mongoose to work with mongodb
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy
const mongoose = require('mongoose')
const keys = require('../config/keys')

// Make a new mongo model (similar to table) called "users"
const User = mongoose.model('users')

/*  
    Saves user.id (which is mongodb's own identification, not googleID)
    better than googleID because one might sign in with facebook and have
    multiple IDs associated to one db id.
    
    serializeUser() generates an identifying piece of information from the user
    and returns it.
    Passport then uses it to set a cookie.
    
    First parameter of done() is an error message.
*/
 passport.serializeUser((user, done) => {
    done(null, user.id)
})

/*
    Takes the user.id and finds it in the database. Returns user if found
    .then() is called a 'promise'
*/
passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user)
        })
})

// Allows passport to use the Google Strategy for authentication
passport.use(
    new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback',
        proxy: true // tells it to trust heroku proxy so that https works
    },
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ googleID: profile.id})   
        if (existingUser)
            return done(null, existingUser)
        const user = await new User({ googleID: profile.id }).save()
        done(null, user)
    })
)

// Allows passport to use LinkedIn Strategy for authentication
passport.use(
    new LinkedInStrategy(
    {
        clientID: keys.linkedInClientID,
        clientSecret: keys.linkedInClientSecret,
        callbackURL: '/auth/linkedin/callback',
        proxy: true, // tells it to trust heroku proxy so that https works
        scope: ['r_emailaddress', 'r_basicprofile'],
    }, 
    async (accessToken, refreshToken, profile, done) => {
        const existingUser = await User.findOne({ linkedInID: profile.id })
        if (existingUser)
            return done(null, existingUser)
        const user = await new User({ linkedInID: profile.id }).save()
        done(null, user)
}))