const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Genre = new mongoose.Schema({ 
   name: {    type: String,    
    required: true,   
    minlength: 5,    
    maxlength: 50  }});

//exports.genreSchema = genreSchema;//exports.Genre = Genre;