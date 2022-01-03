const Sequelize = require('../loaders/index').sequelize;
const db = require('../config/database');

const Employees = db.define('employees', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    // password: {
    //     type: Sequelize.STRING,
    //     allowNull: false
    // },
    grade: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, 
{
    initialAutoIncrement: 1000,
    timestamps: false,
});

module.exports = Employees;