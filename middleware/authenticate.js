const { response } = require("express");

const isAuthenticated = (request, response, next) => {
  if (!request.session || request.session.user) {
    return response
      .status(401)
      .json("You do not have access. Identify yourself please.");
  }
  next();
};

module.exports = {
  isAuthenticated,
};
