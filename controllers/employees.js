const Employees = require("../models/employees");

const getAllEmployeesOfDulezzubakery = async (request, response) => {
  try {
    const result = await Employees.find();
    response.status(200).json(result);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

const createEmployeeToDulezzuabakery = async (request, response) => {
  try {
    const newEmployee = new Employees(request.body);
    const savedEmployee = await newEmployee.save();
    response.status(201).json(savedEmployee);
  } catch (err) {
    response.status(400).json({ message: err.message });
  }
};

const updateEmployeeDataOfDulezzuabakery = async (request, response) => {
  try {
    const idemployee = request.params.id;
    const result = await Employees.findByIdAndUpdate(idemployee, request.body, {
      new: true,
    });
    if (!result)
      return response
        .status(404)
        .json({ message: "Stop, This Employee doesn`t exist." });
    response.status(204).send();
  } catch (err) {
    response.status(400).json({ message: err.message });
  }
};

const deleteEmployeeDataOfDulezzuabakery = async (request, response) => {
  try {
    const result = await Employees.findByIdAndDelete(request.params.id);
    if (!result)
      return response
        .status(404)
        .json({ message: "Impossible to delete data of Employee." });
    response.status(204).send();
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllEmployeesOfDulezzubakery,
  createEmployeeToDulezzuabakery,
  updateEmployeeDataOfDulezzuabakery,
  deleteEmployeeDataOfDulezzuabakery,
};
