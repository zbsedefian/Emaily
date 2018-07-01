// Include modules and other files
const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')
require('./models/User')
require('./services/passport')

// Connect to remote mongo database
mongoose.connect(keys.mongoURI)

const app = express()

/*
    Enable the app to use cookies.
    Cookie session extracts cookie data and decrypts it.
    That data is passed on to passport which pulls user id out of cookie data.
    The id is then passed to deserializeUser() which turns it into a User model instance
    Finally, the User model instance is added to req object as 'req.user'

    app.use() wires up middleware
*/
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        keys: [keys.cookieKey] // encrypt cookie
    })
)
app.use(passport.initialize()) // tell passport it should use cookies to handle authentication
app.use(passport.session())

/*
    This runs the route for authentication and passes app as a parameter
    Equivalent to
    const authorizationFunction = require('./routes/authRoutes')
    authorizationFunction(app)
*/
require('./routes/authRoutes')(app)

// Dynamic port binding
const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Listening at port ${PORT}`))