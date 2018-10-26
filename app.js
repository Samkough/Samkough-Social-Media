const express = require('express');
var twit = require('twit');

const app = express();

app.get('/', function (req, res) {
    res.send("Hello world!")
    // res.render('index');
})

app.get('/twitter', (req, res) => {
    res.send("twitter");
});

app.get('/instagram', (req, res) => {
    res.send("instagram");
});

app.get('/facebook', (req, res) => {
    res.send("facebook");
});

app.get('/github', (req, res) => {
    res.send("github");
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})