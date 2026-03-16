const mongoose = require('mongoose');

const noteShema = new mongoose.Schema({
   
     title: {  
            type: String,
               required: true

     },
     description: {
        type: String,
        required: true   
     },
     createdAt: {
        type: Date,
        default: Date.now
     }
     


});

const noteModel = mongoose.model('Note', noteShema);

module.exports = noteModel;   