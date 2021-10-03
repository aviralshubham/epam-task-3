const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    fname : {
        type : String,
        required: true,
    },
    lname : {
        type : String,
        required: true,
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    username : {
        type: String,
        required: true,
        unique: true
    },
    tel : Number,
    password: { 
        type: String, required: true 
    },
    location : String
  
})

const Userdb1 = mongoose.model('userdb1', schema);

module.exports = Userdb1;