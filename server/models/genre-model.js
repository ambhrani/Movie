const mongoose = require('mongoose');
const Schema = mongoose.Schema


const Genre = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
});

module.exports = mongoose.model('genre', Genre);



//exports.genreSchema = genreSchema;
//exports.Genre = Genre; 
