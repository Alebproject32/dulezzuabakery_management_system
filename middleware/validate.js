const { body, validationResult } = require("express-validator");

// Rules for Inventory: keeping my items consistent
const inventoryValidationRules = () => {
  return [
    body("itemName").notEmpty().withMessage("Item name is required"),
    body("category").notEmpty().withMessage("Category is required"),
    body("quantity").isNumeric().withMessage("Quantity must be a number"),
    body("unit")
      .notEmpty()
      .withMessage("Unit is required, please fill the field."),
    body("supplier")
      .notEmpty()
      .withMessage("Remember you need to fill the field supplier."),
    body("priceByUnit").isNumeric().withMessage("Price must be a number"),
    body("minStockrequire")
      .isNumeric()
      .withMessage("Oops you need to fill the field minStockrequire."),
  ];
};

// Rules for Orders: ensuring customers data is correct
const orderValidationRules = () => {
  return [
    body("customerName").notEmpty().withMessage("Customer name is required"),
    body("customerEmail").isEmail().withMessage("Valid email is required"),
    body("orderDate").notEmpty().withMessage("Valid date is required"),
    body("deliveryDate").notEmpty().withMessage("Valid date is required"),
    body("totalAmount")
      .isNumeric()
      .withMessage("Total amount must be a number"),
    body("orderStatus").notEmpty().withMessage("Order status is required"),
    body("article")
      .isArray({ min: 1 })
      .withMessage("At least one article is required"),
  ];
};

// Rules for Supplies: baking tools and raw materials
const supplyValidationRules = () => {
  return [
    body("itemName").notEmpty().withMessage("Item name is required"),
    body("usage").notEmpty().withMessage("Usage is required"),
    body("quantity").isNumeric().withMessage("Quantity must be a number"),
    body("unit").notEmpty().withMessage("Unit is required"),
    body("supplierName")
      .notEmpty()
      .withMessage("Supplier Name is required, please don´t forget."),
    body("lastReorderDate")
      .notEmpty()
      .withMessage("Last Reorder Date is required in this ocassion."),
    body("isDurable").notEmpty().withMessage("Durable is required"),
  ];
};

// Rules for Employees: staff information management
const employeeValidationRules = () => {
  return [
    body("firstName").notEmpty().withMessage("First name is required"),
    body("lastName").notEmpty().withMessage("Last name is required"),
    body("email").isEmail().withMessage("Must be a valid email address"),
    body("staffRole").notEmpty().withMessage("Role is required"),
    body("hireDate").notEmpty().withMessage("Date is required"),
    body("salaryPerMonth").isNumeric().withMessage("Salary must be a number"),
    body("phoneNumber").notEmpty().withMessage("Phone number is required"),
  ];
};

// The executioner: this function checks if any of the rules above failed
const validate = (request, response, next) => {
  const errors = validationResult(request);
  if (errors.isEmpty()) {
    return next();
  }

  // Format the errors so they look clean in the API response
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.path]: err.msg }));

  return response.status(400).json({
    message: "Validation failed for DulezzuaBakery data.",
    errors: extractedErrors,
  });
};

module.exports = {
  inventoryValidationRules,
  orderValidationRules,
  supplyValidationRules,
  employeeValidationRules,
  validate,
};
