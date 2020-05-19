const express = require('express');
const { DealStatus } = require('../models/index');

const router = express.Router();

router.get('/', async (req, res) => {
    const dealsStatus = await DealStatus.findAll();
    res.render('dealsstatus', { dealsStatus });
});

router.post('/', async (req, res) => {
    await DealStatus.build({ ...req.body }).save();
    res.redirect('/dealsstatus');
});

router.patch('/:id', async (req, res) => {
    await DealStatus.update({ ...req.body }, {
        where: {
            id: req.params.id
        }
    })
    res.redirect('/dealsstatus');
});

router.get('/:id', async (req, res) => {
    const dealsStatus = await DealStatus.findOne({
        where: {
            id: req.params.id
        }
    })
    res.send({ dealsStatus });
});

router.delete('/:id', async (req, res) => {
    await DealStatus.destroy({
        where: {
            id: req.params.id
        }
    });
    res.redirect('/dealsstatus');
});

module.exports = router;