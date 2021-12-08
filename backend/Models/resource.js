

const Sequelize = require('sequelize');
const db = require('../Config/database');

const Resource = db.define('Resource', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    resourcecode: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },

    resourcename: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    resourcefee: {
        type: Sequelize.STRING,
        allowNull: false
    },
    visit: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    category: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isIn: [["Lab", "Class Room", "Seminar Hall"]],
        }
    },
},
    {
        initialAutoIncrement: 1000
    });

module.exports = Resource