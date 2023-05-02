const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
 // define: { freezeTableName: true}, // un-comment to prevent pluralization of define() arg1 in table name}

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.charityusers = require("./charityuser.model.js")(sequelize, Sequelize);
db.businessusers = require("./businessuser.model.js")(sequelize, Sequelize);
db.events = require("./event.model.js")(sequelize, Sequelize);

module.exports = db;
