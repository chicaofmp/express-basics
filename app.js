const express = require('express');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


const colors = ['red', 'orange', 'black', 'blue', 'green', 'white'];

const games = ['Counter-Strike', 'warcraft 3', 'starcraft', 'Call of Duty', 'MegaMan X', 'Mario', 'Sonic']

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    const name = req.cookies.username
    
    if(name) {
        res.render('index', { name: name })
    } else {
        res.redirect('/welcome')
    }

    
})

app.get('/hello', (req, res) => {
    res.render('hello')
})

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/welcome', (req, res) => {
    res.render('welcome')
} )

app.get('/cards', (req, res) => {
    // res.locals.prompt = "WHO ARE YOU? Equal but DIFFERENT! - Check the //comments!";

    res.render('card', { prompt: "//CheckComments - Who are you? ", colors});
});

app.get('/test', (req, res) => {
    res.render('test',  { prompt: "Games:", games, colors})
})

app.get('/presentation', (req, res) => {
    res.render('hi')
})

app.post('/presentation', (req, res) => {
    console.dir(req.body)
    res.render('hi', { name: req.body.username });
})

app.get('/welcome', (req, res) => {
    const name = req.cookies.username;

    if(name) {
        res.redirect('/')
    } else {
        res.render('welcome')
    }
});

app.post('/welcome', (req, res) => {

    res.cookie('username', req.body.username)
    res.redirect('/')
})

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});

