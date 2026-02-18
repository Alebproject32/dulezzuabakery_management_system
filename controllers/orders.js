const Orders = require("../models/orders");
const { validationResult } = require("express-validator");

//First endpoint GET
const getAllOrdersByMyClients = async (request, response) => {
  // #swagger.tags = ['Orders']
  // #swagger.summary = 'Get all orders'
  try {
    const ordersByClient = await Orders.find();
    // #swagger.responses[200] = { description: 'Success operation' }
    response.status(200).json(ordersByClient);
  } catch (err) {
    response.status(500).json({
      message:
        "Wait! Something went wrong retrieving the orders: " + err.message,
    });
  }
};

// Second endpoint POST
const createOrderByMyClients = async (request, response) => {
  // #swagger.tags = ['Orders']
  // #swagger.summary = 'Create new item'

  // This is my validation error
  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({
      message: "Validation failed for this new order. Check your data.",
      errors: errors.array(),
    });
  }
  /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Add new item',
        required: true,
        schema: { $ref: '#/definitions/Order' }
  } */
  try {
    const newOrderByMyClient = new Orders({
      customerName: request.body.customerName,
      customerEmail: request.body.customerEmail,
      deliveryDate: request.body.deliveryDate,
      totalAmount: request.body.totalAmount,
      orderStatus: request.body.orderStatus,
      paymentMethod: request.body.paymentMethod,
      article: request.body.articleId,
      notes: request.body.notes,
    });

    const savedOrderByMyClient = await newOrderByMyClient.save();
    // #swagger.responses[201] = { description: 'Magnificient budy' }
    response.status(201).json(savedOrderByMyClient);
  } catch (err) {
    response
      .status(400)
      .json({ message: "I think your Order was not created: " + err.message });
  }
};

// Third endpoint PUT to update any information in my orders of DulezzuaBakery Management System
const updateOrderByMyClient = async (request, response) => {
  // #swagger.tags = ['Orders']
  // #swagger.summary = 'Update existing order'

  const errors = validationResult(request);
  if (!errors.isEmpty()) {
    return response.status(400).json({
      message: "Mayday! Validation failed for the order update.",
      errors: errors.array(),
    });
  }
  /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Update existing item',
        required: true,
        schema: { $ref: '#/definitions/Order' }
  } */
  try {
    const orderId = request.params.id.trim(); // Trim added for security
    const updatedOrderByMyClient = {
      customerName: request.body.customerName,
      customerEmail: request.body.customerEmail,
      deliveryDate: request.body.deliveryDate,
      totalAmount: request.body.totalAmount,
      orderStatus: request.body.orderStatus,
      paymentMethod: request.body.paymentMethod,
      article: request.body.articleId,
      notes: request.body.notes,
    };
    const result = await Orders.findByIdAndUpdate(
      orderId,
      updatedOrderByMyClient,
      { new: true, runValidators: true },
    );
    if (!result)
      return response
        .status(404)
        .json({ message: "Your order was missing because I can´t find it." });

    // Changed to 200 so you can see "Success operation here" in Swagger
    // #swagger.responses[200] = { description: 'Success operation here' }
    response.status(200).json(result);
  } catch (err) {
    response
      .status(500)
      .json({ message: "Internal error updating the order: " + err.message });
  }
};

// Fourth endpoint DELETE of any orders in dulezzuaBakery Management System
const deleteOrderByMyClient = async (request, response) => {
  // #swagger.tags = ['Orders']
  // #swagger.summary = 'Delete order'
  try {
    const deletedOrderByMyClient = await Orders.findByIdAndDelete(
      request.params.id.trim(),
    );
    if (!deletedOrderByMyClient)
      return response.status(404).json({
        message:
          "In this occassion It´s not possible to find your order partner.",
      });

    // Changed to 200 so Swagger shows "All is under control"
    // #swagger.responses[200] = { description: 'All is under control' }
    response
      .status(200)
      .json({ message: "All is under control: Order deleted." });
  } catch (err) {
    response
      .status(500)
      .json({ message: "Mayday! Error deleting the order: " + err.message });
  }
};

module.exports = {
  getAllOrdersByMyClients,
  createOrderByMyClients,
  updateOrderByMyClient,
  deleteOrderByMyClient,
};
