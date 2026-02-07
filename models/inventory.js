const mongoose = require("mongoose");
const { type } = require("node:os");

const InventorySchemaDMS = new mongoose.Schema({
  itemName: { type: String, required: true },
  category: { type: String, required: true },
  quantity: { type: Number, required: true },
  unit: { type: String, required: true },
  supplier: { type: String, requires: true },
  priceByUnit: { type: Number, required: true },
  minStockrequire: { type: Number, required: true },
  lastUpdated: { type: Date, default: Date.now },
});

module.exports = mongoose.model("inventory", InventorySchemaDMS);
