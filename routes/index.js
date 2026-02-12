// This file is the Manager of my Documentation Project to improve my MVC
const express = require("express");
const router = express.Router();
const passport = require("passport");

// Here I can find my specific routes of collections in my database
const inventory = require("./inventory");
const orders = require("./orders");

// Welcome of routes in my Project
router.get("/", (request, response) => {
  response.send("DulezzuaBakery Management System - API Online");
});

// Gathering all my routes
router.use("/inventory", require("./inventory"));
router.use("/orders", require("./orders"));
router.use("/supplies", require("./supplies"));
router.use("/employees", require("./employees"));

router.get("/logout", function (request, response, next) {
  request.logout(function (err) {
    if (err) {
      return next(err);
    }
    response.redirect("/");
  });
});

router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: "api-docs",
    session: true,
  }),
  (request, response) => {
    request.session.user = request.user;
    response.redirect("/");
  },
);
module.exports = router;
