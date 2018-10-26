const express = require('express');
var twit = requre('twit');

const app = express();

app.get('/', function (req, res) {
    res.send("Hello world!")
    // res.render('index');
})

app.get('/twitter', (req, res) => {
    res.send("twitter");
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})