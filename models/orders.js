const mongoose = require("mongoose");

const OrderByMyClient = new mongoose.Schema({
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  orderDate: { type: Date, default: Date.now },
  deliveryDate: { type: Date, required: true },
  totalAmount: { type: Number, required: true },
  orderStatus: { type: String, required: true },
  paymentMethod: { type: String, required: true },
  article: [
    {
      productId: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  notes: { type: String },
});

module.exports = mongoose.model("Order", OrderByMyClient);
