const { response } = require("express");
const Order = require("../models/orders");

//First endpoint GET
const getAllOrdersByMyClients = async (request, response) => {
  try {
    const ordersByClient = await Order.find();
    response.status(200).json(ordersByClient);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

// Second endpoint POST
const createOrderByMyClients = async (request, response) => {
  try {
    const newOrderByMyClient = new Order(request.body);
    const savedOrderByMyClient = await newOrderByMyClient.save();
    response.status(201).json(savedOrderByMyClient);
  } catch (err) {
    response.status(400).json({ message: err.message });
  }
};

// Third endpoint PUT to update any information in my orders of DulezzuaBakery Management System
const updateOrderByMyClient = async (request, response) => {
  try {
    const updatedOrderByMyClient = await Order.findByIdAndUpdate(
      request.params.id,
      request.body,
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
const deleteOrderByMyClient = async (request, response) => {
  try {
    const deletedOrderByMyClient = await Order.findByIdAndDelete(
      request.params.id,
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
