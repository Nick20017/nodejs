var express = require('express');
var fs = require('fs');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    // fs.createReadStream('./index.html', 'utf8').pipe(res);
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', function(req, res) {
    fs.createReadStream('./about.html', 'utf8').pipe(res);
});

app.get('/news/:id', function (req, res) {
    res.render('news', {
        newsId: req.params.id
    });
});

app.listen(3000);