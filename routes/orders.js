const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/orders");
const { orderValidationRules, validate } = require("../middleware/validate");
const { isAuthenticated } = require("../middleware/authenticate");

/* #swagger.parameters['body'] = {
      in: 'body',
      description: 'Informatión about new order',
      schema: { $ref: '#/definitions/Order' }
} */
router.get("/", (request, response) => {
  // #swagger.tags = ['Orders']
  ordersController.getAllOrdersByMyClients(request, response);
});
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
