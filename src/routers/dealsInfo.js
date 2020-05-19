const express = require('express');
const { DealInfo, Branch, Agent, DealStatus, Deal } = require('../models/index');

const router = express.Router();

router.get('/', async (req, res) => {
    const [deals, dealsStatus, dealsInfo, branches, agents] = await Promise.all(
        [
            Deal.findAll(),
            DealStatus.findAll(),
            DealInfo.findAll(),
            Branch.findAll(),
            Agent.findAll()
        ]
    );
    res.render('dealsinfo', { dealsInfo, branches, agents, deals, dealsStatus });
});

router.post('/', async (req, res) => {
    req.body.DealId = Number(req.body.DealId);
    req.body.BranchId = Number(req.body.BranchId);
    req.body.AgentId = Number(req.body.AgentId);
    req.body.DealStatusId = Number(req.body.DealStatusId);
    await DealInfo.build({ ...req.body }).save();
    res.redirect('/dealsinfo');
});

router.patch('/:id', async (req, res) => {
    req.body.AgentId = Number(req.body.AgentId);
    req.body.BranchId = Number(req.body.BranchId);
    req.body.AgentId = Number(req.body.AgentId);
    req.body.DealStatusId = Number(req.body.DealStatusId);
    await DealInfo.update({ ...req.body }, {
        where: {
            id: req.params.id
        }
    })
    res.redirect('/dealsinfo');
});

router.get('/:id', async (req, res) => {
    const deal = await DealInfo.findOne({
        where: {
            id: req.params.id
        }
    })
    res.send({ deal });
});

router.delete('/:id', async (req, res) => {
    await DealInfo.destroy({
        where: {
            id: req.params.id
        }
    });
    res.redirect('/dealsinfo');
});

module.exports = router;