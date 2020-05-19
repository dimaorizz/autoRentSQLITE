const { DataTypes } = require('sequelize');

const Client = {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    secondName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    successfulDeals: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    },
    failedDeals: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
    }
};

module.exports = Client;