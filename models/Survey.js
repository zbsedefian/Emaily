const mongoose = require('mongoose')
const { Schema } = mongoose //const Schema = mongoose.Schema  uncommented is destructuring version
const RecipientSchema = require('./Recipient')

const surveySchema = new Schema({
    title: String,
    body: String,
    subject: String,
    recipients: [RecipientSchema],
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    dateSent: Date,
    lastResponded: Date
})

// Sets the schema to the mongoose model 'surveys'
mongoose.model('surveys', surveySchema)