/*jshint globalstrict: true, devel: true, node: true */
'use strict';

var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var baza = require('./db/books');

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
    var genres = baza().distinct("genre");
    res.render('index.ejs', {genres: genres});
});

app.get('/:gen', function (req, res) {
    var genres = baza().distinct("genre");
    var books = baza({genre: req.params.gen}).select("title", "author");
    var genre = req.params.gen;
    var f_submit = function() {
       console.log("test");
        return 23;
    };
    res.render('index.ejs', {genres: genres, books: books, genre: genre, f_submit: f_submit()});
});

app.post('/:gen', function (req, res) {
    var newAuthor=req.body.author;
    var newTitle=req.body.title;
    var genre = req.params.gen;
    console.log(newAuthor, newTitle);
    var genres = baza().distinct("genre");
    var books = baza({genre: genre}).select("title", "author");
    res.render('index.ejs', {genres: genres, books: books, genre: genre});
});


app.listen(3000, function () {
    console.log('Serwer działa na porcie 3000');
});


process.on('SIGINT',function(){
  console.log('\nshutting down');
  process.exit();
});

