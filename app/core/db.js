// ===== db
// import all modules
const Sequelize       = require('sequelize');
const dbConfig        = require('../config/db.config');

const sequelize       = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorAliases: false,
  pool: {
    min: dbConfig.pool.min,
    max: dbConfig.pool.max,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db             = {};

db.sequelize          = sequelize;
db.Sequelize          = Sequelize;

const user            = require('../models/User')(sequelize, Sequelize);
const student         = require('../models/Student')(sequelize, Sequelize);

db.user               = user;
db.student            = student;

module.exports        = db;