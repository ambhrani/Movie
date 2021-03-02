const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Genre = require('./genre-model')

const Movie = new Schema(
    {
        name: { type: String, required: true },
        time: { type: [String], required: true },
        rating: { type: Number, required: false },
        genre:{ type:Genre, required:true},
    },
    { timestamps: true },
)

module.exports = mongoose.model('movies', Movie)
