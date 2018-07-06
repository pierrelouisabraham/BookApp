var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var urlServer = 'http://localhost:5000';

var app = express();


var books = [
    {
        id: 1,
        author: 'Brent Weeks',
        title: 'La voie des ombres',
        publicationDate: '10\/2008',
        available: true,
        nbPages: 695,
        nbRent: 10
    },
    {
      id: 2,
      author: 'Brent Weeks',
      title: 'Le choix des ombres',
      publicationDate: '08\/2009',
      available: false,
      nbPages: 700,
      nbRent: 10
    },
    {
      id: 3,
      author: 'Raymond Elias Feist',
      title: 'Pug l\'apprenti',
      publicationDate: '10\/1998',
      available: true,
      nbPages: 200,
      nbRent: 10
    },
    {
      id: 4,
      author: 'Robin Hobb',
      title: 'L\'assassin royal',
      publicationDate: '10\/2015',
      available: true,
      nbPages: 200,
      nbRent: 10
    },
];



// Middlewares
app.use(bodyParser.json()); //le body des requetes sont parsées en (json-->js)
//app.use(express.static('public'));

// Permet Les requêtes cross-domain
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "PUT, DELETE");
    next();
});

// Routes
//get
app.get('/books', (req, res) => res.json(books));




app.get('/teams/:team/players', (req, res) => {
    var team = req.params.team;
    var playersFiltered = players.filter(player => player.current_team == team);
    return res.json(playersFiltered);
})
//post
app.post('/teams', function(req, res) {
    var id = getLastId(teams);
    var team = {
        id: id + 1,
        logo: req.body.logo,
        name: req.body.name,
        country: req.body.country,
        stadium: req.body.stadium,
        coach: req.body.coach,
        founded: req.body.founded,
        nbCup: req.body.nbCup
    };
    teams.push(team);
    res.json(team);
})
// put
app.put('/students/:id', (req, res) =>{
    if (req.body.id){
        for (let i = 0; i < students.length; i++) {
            if (students[i].id == req.body.id){
                students[i] = req.body; // mise à jour de l'étudiant
                break; // sortie de boucle
            }
        }
        return res.json('update complete');
    }
    res.status(500).end(); // envoie d'un code erreur au client
})

// Helper functions
function getLastId(arr) {
    var maxId = 0;
    for (var i=0; i<arr.length; i++) {
        if (arr[i].id > maxId) {
            maxId = array[i].id
        }
    }
    return maxId;
}

app.listen(5000, () => console.log('Serveur écoute le port 5000...'));
