const router = require("express").Router();
const suppliesController = require("../controllers/supplies");
const { supplyValidationRules, validate } = require("../middleware/validate");
const { isAuthenticated } = require("../middleware/authenticate");

//router.get("/", (request, response) => {
// #swagger.tags = ['Supplies']
//suppliesController.getAllSuppliesToBreadsAndCakes(request, response);
//});

// #swagger.tags = ['Supplies']
router.get("/", suppliesController.getAllSuppliesToBreadsAndCakes);
router.post(
  "/",
  isAuthenticated,
  supplyValidationRules(),
  validate,
  suppliesController.createSupplyToBreadsAndCakes,
);
router.put(
  "/:id",
  isAuthenticated,
  supplyValidationRules(),
  validate,
  suppliesController.updateSupplyToBreadsAndCakes,
);
router.delete("/:id", isAuthenticated, suppliesController.deleteSupplyForever);

module.exports = router;
