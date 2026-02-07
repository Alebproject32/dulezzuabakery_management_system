// Here it is the Headquarters of all actions inside of Project "DulezzuaBakery Management System"
const Inventory = require("../models/inventory");

// This is my first Endpoint "GET" as I learned along this course
const getAllArticles = async (request, response) => {
  // Here I will catch errors from execution
  try {
    const article = await Inventory.find();
    response.setHeader("Content-Type", "application/json");
    response.status(200).json(article);
  } catch (err) {
    response.status(500).json({
      message: "Do you see the error in your inventory?" + err.message,
    });
  }
};

// Endpoint "POST" here I will create a new article
const createItemArticle = async (request, response) => {
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
    return response.status(201).json(result);
  } catch (err) {
    return response.status(400).json({
      message: "I think your Article was not created: " + err.message,
    });
  }
};

// Endpoint "PUT"
const updateArticle = async (request, response) => {
  try {
    const articleId = request.params.id;
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
      { new: true },
    );
    if (!result) {
      return response.status(404).json({
        message: "Make some space, I can't find what I'm looking for",
      });
    }
    response.status(204).send();
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
  try {
    const articleId = request.params.id;
    const result = await Inventory.findByIdAndDelete(articleId);
    if (!result) {
      return response.status(404).json({
        message: "I´m so sorry but I can´t find your article to delete.",
      });
    }
    response.status(204).send();
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
