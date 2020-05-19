const { DataTypes } = require('sequelize');

const Branch = {
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    adress: {
        type: DataTypes.STRING,
        allowNull: false,
    }
};

module.exports = Branch;