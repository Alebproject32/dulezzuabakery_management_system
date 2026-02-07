const { response } = require("express");
const Order = require("../models/orders");

//First endpoint GET
const getAllOrdersByMyClients = async (require, response) => {
  try {
    const ordersByClient = await Order.find();
    response.status(200).json(ordersByClient);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

// Second endpoint POST
const createOrderByMyClients = async (require, response) => {
  try {
    const newOrderByMyClient = new Order(require.body);
    const savedOrderByMyClient = await newOrderByMyClient.save();
    response.status(201).json(savedOrderByMyClient);
  } catch (err) {
    response.status(400).json({ message: err.message });
  }
};

// Third endpoint PUT to update any information in my orders of DulezzuaBakery Management System
const updateOrderByMyClient = async (require, response) => {
  try {
    const updatedOrderByMyClient = await Order.findByIdAndUpdate(
      require.params.id,
      require.body,
      { new: true },
    );
    if (!updatedOrderByMyClient)
      return response
        .status(404)
        .json({ message: "Your order was missing because I can´t find it." });
    response.status(204).send();
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

// Fourth endpoint DELETE of any orders in dulezzuaBakery Management System
const deleteOrderByMyClient = async (require, response) => {
  try {
    const deletedOrderByMyClient = await Order.findByIdAndDelete(
      require.params.id,
    );
    if (!deletedOrderByMyClient)
      return response.status(404).json({
        message:
          "In this occassion It´s not possible to find your order partner.",
      });
    response.status(204).send();
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllOrdersByMyClients,
  createOrderByMyClients,
  updateOrderByMyClient,
  deleteOrderByMyClient,
};
