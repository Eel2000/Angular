var Users = require('../models/user.model');

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