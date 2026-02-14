const mongoose = require("mongoose");

// Schema for Inventory - DulezzuaBakery Management System (DMS)
const InventorySchemaDMS = new mongoose.Schema({
  itemName: { type: String, required: true },
  category: { type: String, required: true },
  quantity: { type: Number, required: true },
  unit: { type: String, required: true },
  supplier: { type: String, required: true },
  priceByUnit: { type: Number, required: true },
  minStockrequire: { type: Number, required: true },
  lastUpdated: { type: Date, default: Date.now },
});

module.exports = mongoose.model("inventory", InventorySchemaDMS);
