const express = require('express')

const db = require("../../data/db-config");

const router = express.Router();

router.get('/', (req, res) => {
    db('cars')
    .then(cars => {
        res.json(cars);
    })
    .catch(error => {
        res.status(500).json({
            message: "Cannot get your data"
        })
    }); 
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    
    db('cars').where( { id }).first()
    .then(cars => {
        res.json(cars);
    })
    .catch(error => {
        res.status(500).json({
            message: "Cannot get your data"
        })
    });
});

router.post('/', (req, res) => {
    const carsData = req.body;
    db('cars').insert(carsData)
    .then(ids => {
        db('cars').where({ id: ids[0] })
        .then(newCarAdded => {
            res.status(201).json(newCarAdded);
        })
    })
    .catch(error => {
        res.status(500).json({
            message: "Cannot get your data"
        })
    })
})


module.exports = router;