const { body, validationResult } = require("express-validator");

const inventoryValidationRules = () => {
  return [
    body("itemName").notEmpty().withMessage("Item name is required"),
    body("category").notEmpty().withMessage("Category is required"),
    body("quantity").isNumeric().withMessage("Quantity must be a number"),
    body("priceByUnit").isNumeric().withMessage("Price must be a number"),
  ];
};

const orderValidationRules = () => {
  return [
    body("customerName").notEmpty().withMessage("Customer name is required"),
    body("customerEmail").isEmail().withMessage("Valid email is required"),
    body("totalAmount")
      .isNumeric()
      .withMessage("Total amount must be a number"),
    body("orderStatus").notEmpty().withMessage("Order status is required"),
    body("article")
      .isArray({ min: 1 })
      .withMessage("At least one article is required"),
  ];
};

const supplyValidationRules = () => {
  return [
    body("itemName").notEmpty().withMessage("Item name is required"),
    body("quantity").isNumeric().withMessage("Quantity must be a number"),
    body("unit").notEmpty().withMessage("Unit is required"),
  ];
};

const employeeValidationRules = () => {
  return [
    body("firstName").notEmpty().withMessage("First name is required"),
    body("lastName").notEmpty().withMessage("Last name is required"),
    body("email").isEmail().withMessage("Must be a valid email address"),
    body("staffRole").notEmpty().withMessage("Role is required"),
    body("salaryPerMonth").isNumeric().withMessage("Salary must be a number"),
    body("phoneNumber").notEmpty().withMessage("Phone number is required"),
  ];
};

const validate = (request, response, next) => {
  const errors = validationResult(request);
  if (errors.isEmpty()) {
    return next();
  }
  return response.status(400).json({ errors: errors.array() });
};

module.exports = {
  inventoryValidationRules,
  orderValidationRules,
  supplyValidationRules,
  employeeValidationRules,
  validate,
};
