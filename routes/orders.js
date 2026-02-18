const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/orders");
const { orderValidationRules, validate } = require("../middleware/validate");
const { isAuthenticated } = require("../middleware/authenticate");

router.get(
  "/",
  // #swagger.tags = ['Orders']
  // #swagger.security = [{ "Authorization": [] }]
  ordersController.getAllOrdersByMyClients,
);

router.post(
  "/",
  isAuthenticated,
  orderValidationRules,
  validate,
  /* #swagger.tags = ['Orders'] 
     #swagger.security = [{ "Authorization": [] }] 
     #swagger.parameters['body'] = {
        in: 'body',
        description: 'Information about new order',
        schema: { $ref: '#/definitions/Order' }
     } */
  ordersController.createOrderByMyClients,
);

router.put(
  "/:id",
  isAuthenticated,
  orderValidationRules,
  validate,
  /* #swagger.tags = ['Orders'] 
     #swagger.security = [{ "Authorization": [] }] 
     #swagger.parameters['body'] = {
        in: 'body',
        description: 'Information to update order',
        schema: { $ref: '#/definitions/Order' }
     } */
  ordersController.updateOrderByMyClient,
);

router.delete(
  "/:id",
  isAuthenticated,
  /* #swagger.tags = ['Orders'] 
     #swagger.security = [{ "Authorization": [] }] */
  ordersController.deleteOrderByMyClient,
);

module.exports = router;
