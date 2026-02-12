const mongoose = require("mongoose");

const EmployeesDulezzuabakery = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  staffRole: { type: String, required: true },
  hireDate: { type: String, required: true },
  salaryPerMonth: { type: Number, required: true },
  phoneNumber: { type: String, required: true },
});

module.exports = mongoose.model("Employees", EmployeesDulezzuabakery);
