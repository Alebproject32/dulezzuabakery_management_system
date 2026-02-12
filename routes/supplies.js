const router = require("express").Router();
const suppliesController = require("../controllers/supplies");
const { supplyValidationRules, validate } = require("../middleware/validate");
const { isAuthenticated } = require("../middleware/authenticate");

router.get("/", (request, response) => {
  // #swagger.tags = ['Supplies']
  // #swagger.security = [{ "openid": [] }]
  suppliesController.getAllSuppliesToBreadsAndCakes(request, response);
});

router.post(
  "/",
  isAuthenticated,
  supplyValidationRules(),
  validate,
  /* #swagger.tags = ['Supplies'] 
  // #swagger.security = [{ "openid": [] }] */
  suppliesController.createSupplyToBreadsAndCakes,
);
router.put(
  "/:id",
  isAuthenticated,
  supplyValidationRules(),
  validate,
  /* #swagger.tags = ['Supplies'] 
  // #swagger.security = [{ "openid": [] }] */
  suppliesController.updateSupplyToBreadsAndCakes,
);
router.delete(
  "/:id",
  isAuthenticated,
  /* #swagger.tags = ['Supplies'] 
  // #swagger.security = [{ "openid": [] }] */ suppliesController.deleteSupplyForever,
);

module.exports = router;
