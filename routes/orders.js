const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/orders");

router.get("/", ordersController.getAllOrdersByMyClients);
router.post("/", ordersController.createOrderByMyClients);
router.put("/:id", ordersController.updateOrderByMyClient);
router.delete("/:id", ordersController.deleteOrderByMyClient);

module.exports = router;
