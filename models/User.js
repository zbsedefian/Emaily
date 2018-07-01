/*
    Although mongoDb does not care about schemas, mongoose does.
    You must define a Schema for models (tables) here.
    Here, we want the user schema to only have one property: googleID.
*/

const mongoose = require('mongoose')
const { Schema } = mongoose //const Schema = mongoose.Schema  uncommented is destructuring version

const userSchema = new Schema({
    googleID: String,
    linkedInID: String,
    credits: {type: Number, default: 0}
})

// Sets the schema to the mongoose model 'users'
mongoose.model('users', userSchema)