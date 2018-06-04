const passport = require('passport')

module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }))

    app.get('/auth/google/callback', passport.authenticate('google'))

    app.get('/auth/linkedin', passport.authenticate('linkedin', {
        scope: ['r_basicprofile', 'r_emailaddress']
    }))

    app.get('/auth/linkedin/callback', passport.authenticate('linkedin'))

    // Will respond by sending back req.user, where their user data is saved
    app.get('/api/current_user', (req, res) => {
        res.send(req.user)
    })
}