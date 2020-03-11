var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    
    postnom: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    mot_pass: {
        type: String,
        required: true
    }
})