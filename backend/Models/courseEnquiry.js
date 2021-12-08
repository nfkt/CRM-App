const Sequelize = require('sequelize');
const db = require('../Config/database');
const Course = require('./course')

const CourseEnquiry = db.define('CourseEnquiry', {
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
                args: [['Pending','Rejected', 'Purchased', 'Payment Pending', 'Interested']]
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
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    courseName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    qualification: {
        type: Sequelize.STRING,
        allowNull: false
    },
    interest: {
        type: Sequelize.STRING,
        allowNull: false
    }
},
{
    initialAutoIncrement: 2000
});

// Course.hasMany(CourseEnquiry);

module.exports = CourseEnquiry;