const express = require('express');
const { Car, Branch } = require('../models/index');

const router = express.Router();

router.get('/', async (req, res) => {
    const cars = await  Car.findAll();
    const branches = await Branch.findAll();
    res.render('cars', { cars, branches });
});

router.post('/', async (req, res) => {
    req.body.BranchId = Number(req.body.BranchId);
    req.body.cost = Number(req.body.cost);
    await Car.build({ ...req.body }).save();
    res.redirect('/cars');
});

router.patch('/:id', async (req, res) => {
    req.body.BranchId = Number(req.body.BranchId);
    req.body.cost = Number(req.body.cost);
    await Car.update({ ...req.body }, {
        where: {
            id: req.params.id
        }
    })
    res.redirect('/cars');
});

router.get('/:id', async (req, res) => {
    const cars = await Car.findOne({
        where: {
            id: req.params.id
        }
    })
    res.send({ cars });
});

router.delete('/:id', async (req, res) => {
    await Car.destroy({
        where: {
            id: req.params.id
        }
    });
    res.redirect('/cars');
});

module.exports = router;