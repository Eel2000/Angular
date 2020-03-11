var mongoose = require('mongoose');

var CourSchema = new mongoose.Schema({

    titre: {
        type: String,
        required: true,
        unique:true
    },

    description: String,
    slug: {
        type: String,
        unique: true
    },
    contenu: String,

    auteur: String,
    publication: Date
});

CourSchema.pre('save', function (callback) {
    var cours = this;
    var now = new Date();

    cours.publication = now;

    callback();

})

module.exports = mongoose.model('cours', CourSchema);