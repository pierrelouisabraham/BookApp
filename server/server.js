var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var urlServer = 'http://localhost:5000';

var app = express();

var teams = [
    {
        id: 1,
        logo: 'http://www.logo-designer.co/wp-content/uploads/2017/01/2017-interbrand-logo-design-juventus-football.png',
        name: 'Juventus',
        country: 'Italie',
        stadium: 'Juventus Stadium',
        coach: 'Allegri',
        founded: 1897,
        nbCup: 5
    },
    {
        id: 2,
        name: 'PSG',
        logo: 'https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/768px-Paris_Saint-Germain_Logo.svg.png',
        country: 'France',
        stadium: 'Parc des Princes',
        coach: 'Emery',
        founded: 1970,
        nbCup: 2
    },
    {
        id: 3,
        logo: 'https://upload.wikimedia.org/wikipedia/fr/a/aa/Blason_RC_Strasbourg_1976.png',
        name: 'RC Strasbourg',
        country: 'France',
        stadium: 'La Meinau',
        coach: 'Laurent',
        founded: 1902,
        nbCup: 1
    },
    {
        id: 4,
        logo: 'http://www.logo20.com/logo-real-madrid/logo-real-madrid-2.png',
        name: 'Real Madrid',
        country: 'Espagne',
        stadium: 'Santiago Bernabeu',
        coach: 'Zidane',
        founded: 1912,
        nbCup: 6
    },
    {
        id: 5,
        logo: 'http://images.footmercato.net/club/400x400/13089.png',
        name: 'Gomido',
        country: 'Togo',
        stadium: 'Gomido Arena',
        coach: '',
        founded: 1974,
        nbCup: 2
    },
    {
        id: 6,
        logo: 'https://seeklogo.com/images/A/as-roma-60-s-logo-5422998DC3-seeklogo.com.png',
        name: 'AS Roma',
        country: 'Italie',
        stadium: 'Olimpico',
        coach: 'Di Francesco',
        founded: 1899,
        nbCup: 1
    },
];

var books = [
    {
        id: 1,
        author: 'Brent Weeks',
        title: 'La voie des ombres',
        publicationDate: 10/2008,
        available: 'true',
        nbPages: 695,
        nbRent: 10
    },
    {
      id: 2,
      author: 'Brent Weeks',
      title: 'Le choix des ombres',
      publicationDate: '08/2009',
      available: 'true',
      nbPages: 700,
      nbRent: 10
    },
    {
      id: 3,
      author: 'Raymond Elias Feist',
      title: 'Pug l\'apprenti',
      publicationDate: '10/1998',
      available: 'true',
      nbPages: 200,
      nbRent: 10
    },
    {
      id: 4,
      author: 'Robin Hobb',
      title: 'La voie des ombres',
      publicationDate: 10/2015,
      available: 'true',
      nbPages: 200,
      nbRent: 10
    },
];

var students = [
    {
        id: 1,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-_sEoHajjPnKH3kZANSFp7oA9-7yb74K70zY-sr9gAZj_Q9iD',
        firstname: 'tret',
        lastname: 'popo',
        notes: [20, 18, 15],
        group: 'POEI Java'
    },
    {
        id: 2,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-_sEoHajjPnKH3kZANSFp7oA9-7yb74K70zY-sr9gAZj_Q9iD',
        firstname: 'poip',
        lastname: 'nuiu',
        notes: [14, 12, 8],
        group: 'POEI Java'
    },
    {
        id: 3,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-_sEoHajjPnKH3kZANSFp7oA9-7yb74K70zY-sr9gAZj_Q9iD',
        firstname: 'boieng',
        lastname: 'hihi',
        notes: [17, 5, 20],
        group: 'ESD'
    },
    {
        id: 4,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-_sEoHajjPnKH3kZANSFp7oA9-7yb74K70zY-sr9gAZj_Q9iD',
        firstname: 'Francesco',
        lastname: 'Totti',
        notes: [10, 17, 20],
        group: 'POEI Java'
    }
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
app.get('/teams', (req, res) => res.json(teams));
app.get('/players', (req, res) => res.json(players));
app.get('/students', (req, res) => res.json(students));
app.get('/students/:id', (req, res) => {
    let id = req.params.id;
    for (let i =0; i < students.length; i++){
        if (students[i].id == id) {
            return res.json(students[i]);
        }
    }

    res.status(404).send('etudiant inconnu');
});
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
