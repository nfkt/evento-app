const Sequelize = require('../loaders/index').sequelize;
const db = require('../config/database');

const Events = db.define('events', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    event_title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    event_description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    start_date:{
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    end_date:{
        type: Sequelize.DATEONLY,
        allowNull: false,
    }, 
    venue:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    contact_info:{
        type: Sequelize.STRING,
        allowNull: false
    },
    event_status:{
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Active',
        validate: {
            isIn: {
                args: [['In progress','Active', 'Cancelled', 'Completed']]
            }
        }
    }
}, 
{
    initialAutoIncrement: 3000,
    timestamps: false,
});

module.exports = Events;