const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/orders");
const { orderValidationRules, validate } = require("../middleware/validate");
const { isAuthenticated } = require("../middleware/authenticate");

// #swagger.tags = ['Orders']
/* #swagger.parameters['body'] = {
      in: 'body',
      description: 'Informatión about new order',
      schema: { $ref: '#/definitions/Order' }
} */
router.get("/", ordersController.getAllOrdersByMyClients);
router.post(
  "/",
  isAuthenticated,
  orderValidationRules(),
  validate,
  ordersController.createOrderByMyClients,
);
router.put(
  "/:id",
  isAuthenticated,
  orderValidationRules(),
  validate,
  ordersController.updateOrderByMyClient,
);
router.delete("/:id", isAuthenticated, ordersController.deleteOrderByMyClient);

module.exports = router;
