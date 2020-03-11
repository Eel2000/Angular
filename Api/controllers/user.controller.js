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
exports.getUsers = function(req, res){
    Users.find(function(err, users){
        if(err){
            return res.json({success: false, message: err}).status(500);
        }

        if(!users){
            return res.json({success: false, message: 'Il n y a pas des users dans la base de donnees'}).status(404);
        }

        res.json({success: true, message: 'Les users ont ete trouve avec succes', data: users}).status(200);
    })
}

//methode pour retourner un user via l'id
exports.getUser = function(req, res){
    Users.findById(req.params.user_id, function(err, user){
        if(err){
            return res.json({success: false, message: err}).status(500);
        }

        if(!user){
            return res.json({success: false, message: 'Il n y a pas le user de l id ' + req.params.user_id}).status(404);
        }

        res.json({success: true, message: 'Le user a ete retrouve avec succes', data: user}).status(200);
    })
}
//methode pour modifier un user
exports.updateUser = function(req, res){
    Users.findById(req.params.user_id, function(err, users){
        if(err){
            return res.json({success: false, message: err}).status(500);
        }

        if(req.body.nom) {users.nom = req.body.nom; }
        if(req.body.postnom) {users.postnom = req.body.postnom; }
        if(req.body.email) {users.email = req.body.email; }
        if(req.body.mot_pass) {users.mot_pass = req.body.mot_pass; }

        users.save(function (err, modifieUser){
            if(err){
                return res.json({success: false, message: err}).status(500);
            }
            res.json({success: true, message: 'Le cours a ete modifie avec succes', data: modifieUser}).status(200);
        })
    })
}

//methode pour supprimer un cours
exports.deleteUsers = function(req, res){
    Users.findByIdAndRemove(req.params.user_id, function(err){
        if(err){
            return res.json({success: false, message: err}).status(500);
        }

        res.json({success: true, message: 'Le cours a ete supprimer avec succes'}).status(200);
    })
}