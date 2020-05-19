const express = require('express');
const { Branch } = require('../models/index');

const router = express.Router();

router.get('/', async (req, res) => {
    const branches = await Branch.findAll();
    res.render('branches', { branches })
});

router.post('/', async (req, res) => {
    await Branch.build({ ...req.body }).save();
    res.redirect('/branches')
});

router.patch('/:id', async (req, res) => {
    await Branch.update({ ...req.body }, {
        where: {
            id: req.params.id
        }
    })
    res.redirect('/branches');
});

router.get('/:id', async (req, res) => {
    const branch = await Branch.findOne({
        where: {
            id: req.params.id
        }
    })
    res.send({ branch });
});

router.delete('/:id', async (req, res) => {
    await Branch.destroy({
        where: {
            id: req.params.id
        }
    });
    res.redirect('/branches');
});

module.exports = router;