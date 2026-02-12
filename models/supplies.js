const mongoose = require("mongoose");

const SuppliesToBreadsAndCakes = new mongoose.Schema({
  itemName: { type: String, required: true },
  usage: { type: String, required: true },
  quantity: { type: Number, required: true },
  unit: { type: String, required: true },
  supplierName: { type: String, required: true },
  lastReorderDate: { type: String, required: true },
  isDurable: { type: Boolean, required: true },
});

module.exports = mongoose.model("Supplies", SuppliesToBreadsAndCakes);
