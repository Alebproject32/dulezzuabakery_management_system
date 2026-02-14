const mongoose = require("mongoose");

// Schema definition for DulezzuaBakery staff
const EmployeesDulezzuabakery = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // This avoid the duplicate emails
    staffRole: { type: String, required: true },
    hireDate: { type: String, required: true },
    salaryPerMonth: { type: Number, required: true },
    phoneNumber: { type: String, required: true },
  },
  {
    // Automatically manages createdAt and updatedAt fields
    timestamps: true,
    collection: "Employees", // Explicitly naming of the collection
  },
);

module.exports = mongoose.model("Employees", EmployeesDulezzuabakery);
