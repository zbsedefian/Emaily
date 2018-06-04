const express = require('express')
const app = express()

// Route handler
app.get('/', (req, res) => {
    res.send({hi: 'Hello world!', bye: "Cya"})
})

// Dynamic port binding
const PORT = process.env.PORT || 5000 
app.listen(PORT, () => console.log(`Listening at port ${PORT}`))