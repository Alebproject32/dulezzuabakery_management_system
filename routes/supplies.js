const router = require("express").Router();
const suppliesController = require("../controllers/supplies");
const supplyValidationRules = require("../middliware/validate");
const { validate } = require("../models/inventory");

router.get("/", suppliesController.getAllSuppliesToBreadsAndCakes);
router.post(
  "/",
  supplyValidationRules(),
  validate,
  suppliesController.createSupplyToBreadsAndCakes,
);
router.put(
  "/:id",
  supplyValidationRules(),
  validate,
  suppliesController.updateSupplyToBreadsAndCakes,
);
router.delete("/:id", suppliesController.deleteSupplyForever);

module.exports = router;
