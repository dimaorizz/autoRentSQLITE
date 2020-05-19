const sequelize = require('../db/sqlite');

const Agent = sequelize.define('Agent', require('./agents'));
const Branch = sequelize.define('Branch', require('./branches'));
const Car = sequelize.define('Car', require('./cars'));
const Client = sequelize.define('Client', require('./clients'));
const Deal = sequelize.define('Deal', require('./deals'));
const DealInfo = sequelize.define('DealInfo', require('./dealsInfo'));
const DealStatus = sequelize.define('DealStatus', require('./dealStatus'));

Branch.hasMany(Agent, {onDelete: "cascade", onUpdate: "cascade"});
Branch.hasMany(Car, {onDelete: "cascade", onUpdate: "cascade"});
Branch.hasMany(DealInfo, {onDelete: "cascade", onUpdate: "cascade"});
Agent.hasMany(DealInfo, {onDelete: "cascade", onUpdate: "cascade"});
Client.hasMany(Deal, {onDelete: "cascade", onUpdate: "cascade"});
Car.hasMany(Deal, {onDelete: "cascade", onUpdate: "cascade"});
Deal.hasMany(DealInfo, {onDelete: "cascade", onUpdate: "cascade"});
DealStatus.hasMany(DealInfo, {onDelete: "cascade", onUpdate: "cascade"});

sequelize.sync()

module.exports = {
    Agent,
    Branch,
    Car,
    Client,
    Deal,
    DealInfo,
    DealStatus
};
