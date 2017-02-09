// Dependencies
// =============================================================
var express = require("express");
var path = require('path');
var Burger = require("../models/burger.js");
var app = express.app();

// Routes
// =============================================================
module.exports = function(app) {

api.get("/", function(req, res) {
  res.redirect("burgers");
});  

// Get all burgers
app.get("/burgers", function(req, res) {

  Burger.findAll({}).then(function(results) {

    res.json(results);
  });
});

// Add a burger
app.post("/burgers/new", function(req, res) {

    console.log("Burger Data:");
    console.log(req.body);

    Burger.create({
      burger_id: req.body.burger_id,
      burger_name: req.body.burger_name,
      devoured: false
    }).then(function() {
      res.json(results);
    })

  });

// Delete a burger (devour)
app.post("/burgers/update/id", function(req, res) {

    console.log("Burger Data:");
    console.log(req.params);
    Burger.update({
      devoured: true
    },{
      where: {
        id: req.params.id
      }
    }).then(function() {
      res.redirect("/")
    });

  });

};
