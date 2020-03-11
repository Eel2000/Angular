var Users = require('../models/user.model');

//enregistrer user
exports.postUser = function(req, res){
    var users = new Users();

    users.nom = req.body.nom;
    users.postnom = req.body.postnom;
    users.email = req.body.email;
    users.mot_pass = req.body.mot_pass;

    users.save(function(err, saveUser){
        if(err){
            return res.json({succes: true, message: err}).status(500);
        }

        res.json({succes: true, message: 'l utilisateur a ete enregistrer avec succes', data: saveUser}).status(200);
    })
}

//REcuperer tout les users
exports.getUser = function(req, res){
    Users.find(function(err, users){
        if(err){
            return res.json({success: false, message: err}).status(500);
        }

        if(!users){
            return res.json({success: false, message: 'Il n y a pas des cours dans la base de donnees'}).status(404);
        }

        res.json({success: true, message: 'Les cours ont ete trouve avec succes', data: users}).status(200);
    })
}