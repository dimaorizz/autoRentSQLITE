const { DataTypes } = require('sequelize');

const Deal = {
    rentalDays: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    }
};

module.exports = Deal;