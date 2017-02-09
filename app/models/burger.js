// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "burger" model that matches up with DB
var Burgers = sequelize.define("burgers", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  burger_name: {
    type: Sequelize.STRING
  },
  devoured: {
    type: Sequelize.BOOLEAN
    default: false
  }
});

// Syncs with DB
Burgers.sync();

// Makes the Burger Model available for other files (will also create a table)
module.exports = Burgers;












