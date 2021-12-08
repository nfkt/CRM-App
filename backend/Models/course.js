const Sequelize = require('sequelize');
const db = require('../Config/database');

const Course = db.define('Course', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    coursecode: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    coursename: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    coursefee: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    visit: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
            isIn: [["Web Dev", "ML", "IOT"]],
        }
    },
    
},
{
    initialAutoIncrement: 2000
});

module.exports = Course;