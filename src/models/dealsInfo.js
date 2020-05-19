const { DataTypes } = require('sequelize');

const DealInfo = {
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
};

module.exports = DealInfo;