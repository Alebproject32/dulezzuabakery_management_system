// Here it is the Headquarters of all actions inside of Project "DulezzuaBakery Management System"
const Inventory = require("../models/inventory");

// This is my first Endpoint "GET" as I learned along this course
const getAllArticles = async (require, response) => {
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
const createItemArticle = async (require, response) => {
  try {
    const newArticle = new Inventory({
      itemName: require.body.itemName,
      category: require.body.category,
      quantity: require.body.quantity,
      unit: require.body.unit,
      supplier: require.body.supplier,
      priceByUnit: require.body.priceByUnit,
      minStockrequire: require.body.minStockrequire,
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
const updateArticle = async (require, response) => {
  try {
    const articleId = require.params.id;
    const updateMyArticleData = {
      itemName: require.body.itemName,
      category: require.body.category,
      quantity: require.body.quantity,
      unit: require.body.unit,
      supplier: require.body.supplier,
      priceByUnit: require.body.priceByUnit,
      minStockrequire: require.body.minStockrequire,
    };
    const response = await Inventory.findByIdAndUpdate(
      articleId,
      updateMyArticleData,
      { new: true },
    );
    if (!response) {
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
const deleteArticle = async (require, response) => {
  try {
    const articleId = require.params.id;
    const response = await Inventory.findByIdAndDelete(articleId);
    if (!response) {
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
