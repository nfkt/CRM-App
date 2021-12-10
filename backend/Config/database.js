const loaders = require('../loaders/index')

const dbConfig = {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

if (dbConfig.dialect === "sqlite") {
  dbConfig.storage = process.env.DB_STORAGE;
}

if (dbConfig.dialect === "mysql") {
  dbConfig.operatorAliases = false;
}

const db = new loaders.sequelize(
  process.env.DB_SCHEMA,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  dbConfig
);

module.exports = db;
