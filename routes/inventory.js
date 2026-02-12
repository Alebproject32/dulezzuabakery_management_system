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
  // #swagger.security = [{ "openid": [] }]
  inventoryController.getAllArticles(request, response);
});
router.post(
  "/",
  isAuthenticated,
  inventoryValidationRules(),
  validate,
  /* #swagger.tags = ['Inventory'] 
  // #swagger.security = [{ "openid": [] }] */
  inventoryController.createItemArticle,
);
router.put(
  "/:id",
  isAuthenticated,
  inventoryValidationRules(),
  validate,
  /* #swagger.tags = ['Inventory'] 
  // #swagger.security = [{ "openid": [] }] */
  inventoryController.updateArticle,
);
router.delete(
  "/:id",
  isAuthenticated,
  /* #swagger.tags = ['Inventory'] 
  // #swagger.security = [{ "openid": [] }] */ inventoryController.deleteArticle,
);

module.exports = router;
