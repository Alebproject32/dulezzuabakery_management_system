const { response } = require("express");

// Middleware to protect my routes and ensure the user is logged in
const isAuthenticated = (request, response, next) => {
  // Checks if the session and the user object exist
  if (!request.session || !request.session.user) {
    return response
      .status(401)
      .json({ message: "You do not have access. Identify yourself please." });
  }
  // If everything is fine, it goes to the next function
  next();
};

module.exports = {
  isAuthenticated,
};
