const mongoose = require('mongoose')
const { Schema } = mongoose //const Schema = mongoose.Schema  uncommented is destructuring version

const recipientSchema = new Schema({
    email: String,
    response: { type: Boolean, default: false }
})

// Not saving to mongoose model
module.exports = recipientSchema