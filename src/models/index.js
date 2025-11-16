// src/models/index.js
const { Sequelize } = require('sequelize');
const path = require('path');

const storage = process.env.DATABASE_STORAGE || path.resolve(__dirname, '..', '..', 'database.sqlite');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage,
  logging: false
});

const Company = require('./company')(sequelize);

module.exports = { sequelize, Company };
