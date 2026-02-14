// This file is the Manager of my Documentation Project to improve my MVC
const express = require("express");
const router = express.Router();
const passport = require("passport");

// Welcome of routes in my Project
router.get("/", (request, response) => {
  response.send("DulezzuaBakery Management System - API Online");
});

// Gathering all my routes
router.use("/inventory", require("./inventory"));
router.use("/orders", require("./orders"));
router.use("/supplies", require("./supplies"));
router.use("/employees", require("./employees"));

// Login route - This starts the GitHub Magic
router.get(
  "/login",
  passport.authenticate("github", { scope: ["user:email"] }),
  /* #swagger.tags = ['Auth'] */ (req, res) => {},
);

router.get(
  "/logout",
  /* #swagger.tags = ['Auth'] */ function (request, response, next) {
    request.logout(function (err) {
      if (err) {
        return next(err);
      }
      response.redirect("/");
    });
  },
);

router.get(
  "/github/callback",
  /* #swagger.tags = ['Auth'] */
  passport.authenticate("github", {
    failureRedirect: "/api-docs",
    session: true,
  }),
  (request, response) => {
    request.session.user = request.user;
    request.session.save((err) => {
      if (err) {
        return response.redirect("/api-docs");
      }
      response.redirect("/");
    });
  },
);

module.exports = router;
