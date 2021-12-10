const app = require('./express');
const sequelize = require('./sequelize');

const loaders = {
    app: app,
    sequelize: sequelize
}

module.exports = loaders;