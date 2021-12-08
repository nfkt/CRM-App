const Sequelize = require('sequelize');
const db = require('../Config/database');
// const Resource = require('./Resource')

const ResourceEnquiry = db.define('ResourceEnquiry', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userstatus: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Pending',
        validate: {
            isIn: {
                args: [['Pending', 'Rejected', 'Purchased', 'Payment Pending', 'Interested']]
            }
        }
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    resourceName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    reqDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    duration: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isIn: {
                args: [['twoWeeks', 'threeWeeks', 'fourWeeks']]
            }
        }
    }
});

// Resource.hasMany(ResourceEnquiry);

module.exports = ResourceEnquiry;