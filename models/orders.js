const mongoose = require("mongoose");

// Schema for Orders - Tracking customer purchases in DulezzuaBakery
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
      // Using Schema.Types.ObjectId would allow you to link directly to the Inventory model
      articleId: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  notes: { type: String },
});

module.exports = mongoose.model("Order", OrderByMyClient);
