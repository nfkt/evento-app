const Sequelize = require('../loaders/index').sequelize;
const db = require('../config/database');

const Employees = require('./employees');
const Events = require('./events');

const Invitations = db.define('invitations', {
    eventsId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
    },
    employeesId: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    invitation_response: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Pending',
        validate: {
            isIn: {
                args: [['Accept','Reject']]
            }
        },
    rejection_response: {
        type: Sequelize.STRING,
        validate: {
            isIn: {
                args: [['Sick','Not available', 'Network issue', 'Other']]
            }
        }
    },
    feedback: {
        type: Sequelize.STRING,

    }
    }
})

Employees.hasMany(Invitations);
Invitations.belongsTo(Employees);

Events.hasMany(Invitations);
Invitations.belongsTo(Events);

module.exports = Invitations;