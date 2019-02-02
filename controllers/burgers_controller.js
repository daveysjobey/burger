var express = require("express")
var burger = require("../models/burger.js")

var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers:data
      };
    //   console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/burgers", function(req, res) {
    burger.insertOne([
      "burger_name"
    ], [
      req.body.burger_name
    ], function(data) {
      // Send back the ID of the new quote
      res.redirect("/");
    });
  });
  
  router.put("/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.updateOne({
      devoured: req.body.devoured
    }, condition, function(data) {
     
      // res.redirect("/");
      res.status(200).end();
     
    });
  });
  
  
  
  // Export routes for server.js to use.
  module.exports = router;
  