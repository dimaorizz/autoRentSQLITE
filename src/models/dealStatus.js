const { DataTypes } = require('sequelize');

const Agent = {
    status: {
        type: DataTypes.STRING,
        allowNull: false,
    }
};

module.exports = Agent;