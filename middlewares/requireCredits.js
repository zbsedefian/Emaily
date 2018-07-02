module.exports = (req, res, next) => {
    if (req.user.credits <= 0)
        return res.status(403).send({ error: 'You must add credits to send a survey.' })
    next()
}