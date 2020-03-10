var Cours = require('../models/cours.models');

exports.postCours = function(req, res){
    var cours = new Cours();

    cours.titre = req.body.titre;
    cours.auteur = req.body.auteur;
    cours.description = req.body.description;
    cours.contenu = req.body.contenu;
    cours.slug = req.body.slug;

    cours.save(function(err, savedCours){
        if(err){
            return res.json({success: false, message: err}).status(500);
        }

        res.json({success: true, message: 'cours enregistre avec succes', data: savedCours}).status(200);
    })
}