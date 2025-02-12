const posts = require('../data/posts.js');
const arrayPosts = require('../data/posts.js');

function index(req, res) {
    
    let filteredRicetta = arrayPosts;

    if (req.query.content) {
        filteredMenu = arrayPosts.filter(
            posts => posts.content.includes(req.query.content) 
        );
    }

    res.json(filteredRicetta);
}

function show(req, res) {
    
    const id = parseInt(req.params.id)

    const ricetta = arrayPosts.find(posts => posts.id === id);

    if (!ricetta) {

        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Ricetta non trovata"
        })
    }
   
    res.json(ricetta);
}

function store(req, res) {
    res.send('Creazione nuova ricetta');
}

function update(req, res) {
    res.send('Modifica integrale della ricetta ' + req.params.id);
}

function patch(req, res) {
    res.send('Modifica parziale della ricetta ' + req.params.id);
}

function destroy(req, res) {
    
    const id = parseInt(req.params.id)

    const ricetta = arrayPosts.find(posts => posts.id === id);

    if (!ricetta) {

        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Ricetta non trovata"
        })
    }


    arrayPosts.splice(arrayPosts.indexOf(posts), 1);

    res.sendStatus(204)
}

module.exports = { index, show, store, update, patch, destroy }