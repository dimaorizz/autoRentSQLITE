const express = require('express');
const { Deal, Car, Client } = require('../models/index');

const router = express.Router();

router.get('/', async (req, res) => {
    const [deals, cars, clients] = await Promise.all(
        [
            Deal.findAll(),
            Car.findAll(),
            Client.findAll()
        ]
    );
    res.render('deals', { deals, cars, clients });
});

router.post('/', async (req, res) => {
    req.body.CarId = Number(req.body.CarId);
    req.body.ClientId = Number(req.body.ClientId);
    await Deal.build({ ...req.body }).save();
    res.redirect('/deals');
});

router.patch('/:id', async (req, res) => {
    req.body.CarId = Number(req.body.CarId);
    req.body.ClientId = Number(req.body.ClientId);
    await Deal.update({ ...req.body }, {
        where: {
            id: req.params.id
        }
    })
    res.redirect('/deals');
});

router.get('/:id', async (req, res) => {
    const deal = await Deal.findOne({
        where: {
            id: req.params.id
        }
    })
    res.send({ deal });
});

router.delete('/:id', async (req, res) => {
    await Deal.destroy({
        where: {
            id: req.params.id
        }
    });
    res.redirect('/deals');
});

module.exports = router;