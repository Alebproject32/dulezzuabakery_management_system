const router = require("express").Router();
const employeesController = require("../controllers/employees");
const { employeeValidationRules, validate } = require("../middleware/validate");
const { isAuthenticated } = require("../middleware/authenticate");

router.get("/", employeesController.getAllEmployeesOfDulezzubakery);

// Here I want to apply the Validation rule to access information
router.post(
  "/",
  isAuthenticated,
  employeeValidationRules(),
  validate,
  employeesController.createEmployeeToDulezzuabakery,
);
router.put(
  "/:id",
  isAuthenticated,
  employeeValidationRules(),
  validate,
  employeesController.updateEmployeeDataOfDulezzuabakery,
);
router.delete(
  "/:id",
  isAuthenticated,
  employeesController.deleteEmployeeDataOfDulezzuabakery,
);

module.exports = router;
