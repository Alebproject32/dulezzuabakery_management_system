// In this place will point the path of all functions
const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/inventory");
const {
  inventoryValidationRules,
  validate,
} = require("../middleware/validate");
const { isAuthenticated } = require("../middleware/authenticate");

router.get("/", (request, response) => {
  // #swagger.tags = ['Inventory']
  inventoryController.getAllArticles(request, response);
});
router.post(
  "/",
  isAuthenticated,
  inventoryValidationRules(),
  validate,
  inventoryController.createItemArticle,
);
router.put(
  "/:id",
  isAuthenticated,
  inventoryValidationRules(),
  validate,
  inventoryController.updateArticle,
);
router.delete("/:id", isAuthenticated, inventoryController.deleteArticle);

module.exports = router;
