var express = require('express');
var app = express();
var characters = require('./characters.json');
var quotes = require('./quotes.json');


app.use('/images', express.static('images'));

app.get('/', (req, res) => {
    res.send('Server up and Running!');
})

app.get('/characters', (req, res) => {
    res.json(characters.map(({id, name}) => ({id, name})));
})

app.get('/characters/:id', (req, res) => {
    let charId = req.params['id'];
    res.json(characters.find(({id}) => +charId === id));
})

app.get('/quotes', (req, res) => {
    res.json(quotes);
})

var server = app.listen(3000, () => {
    console.log(`Server running at http://localhost: ${server.address().port}`)
});