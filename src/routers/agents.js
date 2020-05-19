const express = require('express');
const { Agent, Branch } = require('../models/index');

const router = express.Router();

router.get('/', async (req, res) => {
    const agents = await Agent.findAll();
    const branches = await Branch.findAll();
    res.render('agents', { agents, branches });
});

router.post('/', async (req, res) => {
    req.body.BranchId = Number(req.body.BranchId);
    await Agent.build({ ...req.body }).save();
    res.redirect('/agents');
});

router.patch('/:id', async (req, res) => {
    await Agent.update({ ...req.body }, {
        where: {
            id: req.params.id
        }
    })
    res.redirect('/agents');
});

router.get('/:id', async (req, res) => {
    const agents = await Agent.findOne({
        where: {
            id: req.params.id
        }
    })
    res.send({ agents });
});

router.delete('/:id', async (req, res) => {
    await Agent.destroy({
        where: {
            id: req.params.id
        }
    });
    res.redirect('/agents');
});

module.exports = router;