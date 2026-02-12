const router = require("express").Router();
const employeesController = require("../controllers/employees");
const { employeeValidationRules, validate } = require("../middleware/validate");
const { isAuthenticated } = require("../middleware/authenticate");

router.get("/", (request, response) => {
  // #swagger.tags = ['Employees']
  // #swagger.security = [{ "Authorization": [] }]
  employeesController.getAllEmployeesOfDulezzubakery(request, response);
});

// Here I want to apply the Validation rule to access information
router.post(
  "/",
  isAuthenticated,
  employeeValidationRules(),
  validate,
  // #swagger.tags = ['Employees']
  // #swagger.security = [{ "Authorization": [] }]
  employeesController.createEmployeeToDulezzuabakery,
);
router.put(
  "/:id",
  isAuthenticated,
  employeeValidationRules(),
  validate,
  // #swagger.tags = ['Employees']
  // #swagger.security = [{ "Authorization": [] }]
  employeesController.updateEmployeeDataOfDulezzuabakery,
);
router.delete(
  "/:id",
  isAuthenticated,
  // #swagger.tags = ['Employees']
  // #swagger.security = [{ "Authorization": [] }]
  employeesController.deleteEmployeeDataOfDulezzuabakery,
);

module.exports = router;
