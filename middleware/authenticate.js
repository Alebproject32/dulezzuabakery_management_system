const { response } = require("express");

// Middleware to protect my routes and ensure the user is logged in
const isAuthenticated = (request, response, next) => {
  // Checks if the session and the user object exist
  if (request.isAuthenticated()) {
    return next();
  }
  return response
    .status(401)
    .json({ message: "You do not have access. Identify yourself please." });
};
next();

module.exports = {
  isAuthenticated,
};
