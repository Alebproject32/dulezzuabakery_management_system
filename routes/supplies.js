const router = require("express").Router();
const suppliesController = require("../controllers/supplies");
const supplyValidationRules = require("../middliware/validate");
const { validate } = require("../models/inventory");
const { isAuthenticated } = require("../middleware/authenticate");

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
