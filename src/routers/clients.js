const express = require('express');
const { Client } = require('../models/index');

const router = express.Router();

router.get('/', async (req, res) => {
    const clients = await  Client.findAll();
    res.render('clients', { clients });
});

router.post('/', async (req, res) => {
    await Client.build({ ...req.body }).save();
    res.redirect('/clients');
});

router.patch('/:id', async (req, res) => {
    await Client.update({ ...req.body }, {
        where: {
            id: req.params.id
        }
    })
    res.redirect('/clients');
});

router.get('/:id', async (req, res) => {
    const clients = await Client.findOne({
        where: {
            id: req.params.id
        }
    })
    res.send({ clients });
});

router.delete('/:id', async (req, res) => {
    await Client.destroy({
        where: {
            id: req.params.id
        }
    });
    res.redirect('/clients');
});

module.exports = router;