const config = require("../config");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

// OPTIONAL: test the connection
(async () => {
  try {
    await sequelize.authenticate;
    console.log("Connection has been established successfully.");
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
})();

const db = {};
db.sequelize = sequelize;

(async () => {
  try {
    await db.sequelize.sync();
    console.log("DB is successfully synchronized");
  } catch (error) {
    console.log(error);
  }
})();

module.exports = db;
