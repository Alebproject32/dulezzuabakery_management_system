const mongoose = require("mongoose");

// Schema for Supplies - Ingredients and tools for Breads and Cakes
const SuppliesToBreadsAndCakes = new mongoose.Schema(
  {
    itemName: { type: String, required: true },
    usage: { type: String, required: true },
    quantity: { type: Number, required: true },
    unit: { type: String, required: true },
    supplierName: { type: String, required: true },
    // Changing to Date type is usually better for sorting/filtering,
    // but keeping String is fine if I prefer manual entry
    lastReorderDate: { type: String, required: true },
    isDurable: { type: Boolean, required: true },
  },
  {
    timestamps: true, // the same modification I made before
  },
);

module.exports = mongoose.model("Supplies", SuppliesToBreadsAndCakes);
