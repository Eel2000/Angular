var Cours = require('../models/cours.model');

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

//fonction pour recuperer tous les cours
exports.getCours = function(req, res){
    Cours.find(function(err, cours){
        if(err){
            return res.json({success: false, message: err}).status(500);
        }

        if(!cours){
            return res.json({success: false, message: 'Il n y a pas des cours dans la base de donnees'}).status(404);
        }

        res.json({success: true, message: 'Les cours ont ete trouve avec succes', data: cours}).status(200);
    })
}

//methode pour retourner un cours via l'id
exports.get_Cours = function(req, res){
    Cours.findById(req.params.cours_id, function(err, cours){
        if(err){
            return res.json({success: false, message: err}).status(500);
        }

        if(!cours){
            return res.json({success: false, message: 'Il n y a pas le cours de l id ' + req.params.cours_id}).status(404);
        }

        res.json({success: true, message: 'Le cours a ete retrouve avec succes', data: cours}).status(200);
    })
}

//methode pour modifier un cours
exports.updateCours = function(req, res){
    Cours.findById(req.params.cours_id, function(err, cours){
        if(err){
            return res.json({success: false, message: err}).status(500);
        }

        if(req.body.titre) {cours.titre = req.body.titre; }
        if(req.body.auteur) {cours.auteur = req.body.auteur; }
        if(req.body.description) {cours.description = req.body.description; }
        if(req.body.contenu) {cours.contenu = req.body.contenu; }
        if(req.body.slug) {cours.slug = req.body.slug; }

        cours.save(function (err, ajoutCours){
            if(err){
                return res.json({success: false, message: err}).status(500);
            }
            res.json({success: true, message: 'Le cours a ete modifie avec succes', data: ajoutCours});
        })
    })
}