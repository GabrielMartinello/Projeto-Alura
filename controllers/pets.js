const pets = require('../models/pets');

module.exports = app => {
    app.post('/pet', (req,res) => {
        const pet = req.body;

        pets.adicionaPet(pet, res);
    })
}