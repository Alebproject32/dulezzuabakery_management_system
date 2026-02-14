// Here it is the Headquarters of all actions inside of Project "DulezzuaBakery Management System"
const Inventory = require("../models/inventory");

// This is my first Endpoint "GET" as I learned along this course
const getAllArticles = async (request, response) => {
  // #swagger.tags = ['Inventory']
  // #swagger.summary = 'Get all articles'
  // Here I will catch errors from execution
  try {
    const article = await Inventory.find();
    response.setHeader("Content-Type", "application/json");
    // #swagger.responses[200] = { description: 'Success operation' }
    response.status(200).json(article);
  } catch (err) {
    response.status(500).json({
      message: "Do you see the error in your inventory?" + err.message,
    });
  }
};

// Endpoint "POST" here I will create a new article
const createItemArticle = async (request, response) => {
  // #swagger.tags = ['Inventory']
  // #swagger.summary = 'Create new item'
  /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Add new item',
        required: true,
        schema: { $ref: '#/definitions/Inventory' }
  } */
  try {
    const newArticle = new Inventory({
      itemName: request.body.itemName,
      category: request.body.category,
      quantity: request.body.quantity,
      unit: request.body.unit,
      supplier: request.body.supplier,
      priceByUnit: request.body.priceByUnit,
      minStockrequire: request.body.minStockrequire,
    });

    const result = await newArticle.save();
    // #swagger.responses[201] = { description: 'Amazing' }
    return response.status(201).json(result);
  } catch (err) {
    return response.status(400).json({
      message: "I think your Article was not created: " + err.message,
    });
  }
};

// Endpoint "PUT"
const updateArticle = async (request, response) => {
  // #swagger.tags = ['Inventory']
  // #swagger.summary = 'Update item'
  /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Update existing item',
        required: true,
        schema: { $ref: '#/definitions/Inventory' }
  } */
  try {
    const articleId = request.params.id.trim(); // Added trim for stability
    const updateMyArticleData = {
      itemName: request.body.itemName,
      category: request.body.category,
      quantity: request.body.quantity,
      unit: request.body.unit,
      supplier: request.body.supplier,
      priceByUnit: request.body.priceByUnit,
      minStockrequire: request.body.minStockrequire,
    };
    const result = await Inventory.findByIdAndUpdate(
      articleId,
      updateMyArticleData,
      { new: true, runValidators: true },
    );
    if (!result) {
      // #swagger.responses[404] = { description: 'Not found' }
      return response.status(404).json({
        message: "Make some space, I can't find what I'm looking for",
      });
    }
    // #swagger.responses[200] = { description: 'Good Work in this ocassion' }
    response.status(200).json(result); // Changed to 200 so the message "Good Work" is actually visible
  } catch (err) {
    response.status(500).json({
      message:
        "It´s not possible to update because I find an error in your code." +
        err.message,
    });
  }
};

// My Endpoint of "DELETE"
const deleteArticle = async (request, response) => {
  // #swagger.tags = ['Inventory']
  // #swagger.summary = 'Delete item'
  try {
    const articleId = request.params.id.trim();
    const result = await Inventory.findByIdAndDelete(articleId);
    if (!result) {
      // #swagger.responses[404] = { description: 'Not found' }
      return response.status(404).json({
        message: "I´m so sorry but I can´t find your article to delete.",
      });
    }
    // #swagger.responses[200] = { description: 'Very Good' }
    response.status(200).json({ message: "Very Good: Article deleted." }); // Changed to 200 to show the success message
  } catch (err) {
    response.status(500).json({
      message: "I have an error to delete the article: " + err.message,
    });
  }
};

module.exports = {
  getAllArticles,
  createItemArticle,
  updateArticle,
  deleteArticle,
};
