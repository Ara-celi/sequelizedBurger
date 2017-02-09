// Dependencies
// =============================================================
var Burger = require("../models/burger.js");

// Routes
// =============================================================
module.exports = function(app) {

// Get all burgers
app.get("/api/all", function(req, res) {

  Burger.findAll({}).then(function(results) {
    res.json(results);


// Add a burger
app.post("/api/new", function(req, res) {

    console.log("Burger Data:");
    console.log(req.body);

    Burger.create({
      burger_id: req.body.burger_id,
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    });

  });

// Delete a burger (devour)
};
