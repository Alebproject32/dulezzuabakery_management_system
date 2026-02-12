const router = require("express").Router();
const employeesController = require("../controllers/employees");
const {
  employeeValidationRules,
  validate,
} = require("../middleware/validate.js");

router.get("/", employeesController.getAllEmployeesOfDulezzubakery);

// Here I want to apply the Validation rule to access information
router.post(
  "/",
  employeeValidationRules(),
  validate,
  employeesController.createEmployeeToDulezzuabakery,
);
router.put(
  "/:id",
  employeeValidationRules(),
  validate,
  employeesController.updateEmployeeDataOfDulezzuabakery,
);
router.delete("/:id", employeesController.deleteEmployeeDataOfDulezzuabakery);

module.exports = router;
