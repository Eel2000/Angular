///appeler express 
var express = require('express');

var bodyParser = require('body-parser');

//connexion avec la base de donnees
var mongoose = require('mongoose');

//On reccupere notre controller cours
var coursController = require('./controllers/cours.controller');
var userController = require('./controllers/user.controller');

var DbName = 'CoursAngular';
mongoose.connect('mongodb://localhost:27017/'+ DbName);

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}))

var port = process.env.PORT || 3500;

var router = express.Router();

router.get('/', function (req, res) {
    res.json({ message: 'welcome to your API!.' });
})

app.use('/api',router);

//Cours
router.route('/Cours')
    .post(coursController.postCours)
    .get(coursController.getCours);

router.route('/Cours/:cours_id')
    .get(coursController.get_Cours)
    .put(coursController.updateCours)
    .delete(coursController.deleteCours);

//User
router.route('/Users')
    .post(userController.postUser)
    .get(userController.getUser);

app.listen(port);
console.log('server started at port number : '+port);
