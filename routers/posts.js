const express = require('express')
const router = express.Router();

// index
router.get('/', function (req, res) {
    res.send('Lista delle ricette');
});
// show
router.get('/:id', function (req, res) {
    res.send('Dettagli di una ricetta ' + req.params.id);
});
// store
router.post('/', function (req, res) {
    res.send('Creazione nuova ricetta');
});

// update
router.put('/:id', function (req, res) {
    res.send('Modifica integrale della ricetta ' + req.params.id);
});

// modify
router.patch('/:id', function (req, res) {
    res.send('Modifica parziale della ricetta ' + req.params.id);
});

// destroy
router.delete('/:id', function (req, res) {
    res.send('Eliminazione della ricetta ' + req.params.id);
});

module.exports = router;