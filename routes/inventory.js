// In this place will point the path of all functions
const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/inventory");
const { inventoryValidationRules, validate } = require("/middleware/validate");

// #swagger.tags = ['Inventory']

router.get("/", inventoryController.getAllArticles);
router.post(
  "/",
  inventoryValidationRules(),
  validate,
  inventoryController.createItemArticle,
);
router.put(
  "/:id",
  inventoryValidationRules(),
  validate,
  inventoryController.updateArticle,
);
router.delete("/:id", inventoryController.deleteArticle);

module.exports = router;
