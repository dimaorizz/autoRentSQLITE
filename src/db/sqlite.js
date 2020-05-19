const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname + '../../../autoRent',
    logging: false
})

sequelize.authenticate().then(() => {
    console.log('SQLite connected')
})

module.exports = sequelize