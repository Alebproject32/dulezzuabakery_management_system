const { response } = require("express");

const isAuthenticated = (request, responseº, next) => {
  if (request.session.user === undefined) {
    return response
      .status(401)
      .json("You do not have access. Identify yourself please.");
  }
  next();
};

module.exports = {
  isAuthenticated,
};
