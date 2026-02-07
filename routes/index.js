// This file is the Manager of my Documentation Project to improve my MVC
const express = require("express");
const router = express.Router();

// Here I can find my specific routes of collections in my database
const inventory = require("./inventory");
const orders = require("./orders");

// Welcome of routes in my Project
router.get("/", (require, response) => {
  response.send("DulezzuaBakery Management System - API Online");
});

// Gathering all my routes
router.use("/inventory", inventory);
router.use("/orders", orders);

module.exports = router;
