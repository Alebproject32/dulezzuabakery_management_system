const Employees = require("../models/employees");
const { validationResult } = require("express-validator");
/**
 * GET all employees
 */
const getAllEmployeesOfDulezzubakery = async (request, response) => {
  // #swagger.tags = ['Employees']
  // #swagger.summary = 'Get all employees'
  try {
    const result = await Employees.find();
    response.status(200).json(result);
  } catch (err) {
    response
      .status(500)
      .json({
        message:
          "Mayday,Mayday this is an internal server error." + err.message,
      });
  }
};

/**
 * POST a new employee
 */
const createEmployeeToDulezzuabakery = async (request, response) => {
  // #swagger.tags = ['Employees']
  // #swagger.summary = 'Create a new employee'

  // Data Validation Check
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }
  /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Employee details',
        required: true,
        schema: { $ref: '#/definitions/Employee' }
  } */
  try {
    const newEmployee = new Employees(request.body);
    const savedEmployee = await newEmployee.save();
    // #swagger.responses[201] = { description: 'Employee created successfully' }
    response.status(201).json(savedEmployee);
  } catch (err) {
    response.status(400).json({
      message: "Error creating employee in this occassion" + err.message,
    });
  }
};

/**
 * PUT - Update employee
 */
const updateEmployeeDataOfDulezzuabakery = async (request, response) => {
  // #swagger.tags = ['Employees']
  // #swagger.summary = 'Update an existing employee'

  // Data Validation Check
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({ errors: errors.array() });
  }
  /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Updated employee information',
        required: true,
        schema: { $ref: '#/definitions/Employee' }
  } */
  try {
    const idemployee = request.params.id.trim();
    const result = await Employees.findByIdAndUpdate(idemployee, request.body, {
      new: true,
      runValidators: true,
    });

    if (!result) {
      // #swagger.responses[404] = { description: 'Employee not found' }
      return response
        .status(404)
        .json({ message: "Stop, This Employee doesn't exist." });
    }

    // #swagger.responses[200] = { description: 'Employee updated successfully', schema: { $ref: '#/definitions/Employee' } }
    response.status(200).json(result);
  } catch (err) {
    response.status(400).json({
      message:
        "Again error updating employee, you need check out." + err.message,
    });
  }
};

/**
 * DELETE - Remove employee
 */
const deleteEmployeeDataOfDulezzuabakery = async (request, response) => {
  // #swagger.tags = ['Employees']
  // #swagger.summary = 'Delete an employee by ID'
  try {
    const idemployee = request.params.id.trim();
    const result = await Employees.findByIdAndDelete(idemployee);

    if (!result) {
      // #swagger.responses[404] = { description: 'Employee not found' }
      return response
        .status(404)
        .json({ message: "Impossible to delete data of Employee." });
    }

    // #swagger.responses[200] = { description: 'Employee deleted successfully' }
    response
      .status(200)
      .json({ message: "Employee deleted successfully from DulezzuaBakery." });
  } catch (err) {
    response.status(500).json({
      message: "A little detail internal server error: " + err.message,
    });
  }
};

module.exports = {
  getAllEmployeesOfDulezzubakery,
  createEmployeeToDulezzuabakery,
  updateEmployeeDataOfDulezzuabakery,
  deleteEmployeeDataOfDulezzuabakery,
};
