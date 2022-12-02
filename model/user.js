const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
 
        firstname : {
            type : String,
            default : Null
        },
        lastname : {
            type : String,
            default : Null
        },
        email : {
            type : String,
            unique : true
        },
        password : {
            type : String,
        },
        token : {
            type : String,
        },

});


module.exports = mongoose.model('user','userSchema')