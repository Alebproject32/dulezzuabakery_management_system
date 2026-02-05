// Here it is the Headquarters of all actions inside of Project "DulezzuaBakery Management System"
const Inventory = require("../models/inventory");

// This is my first Endpoint "GET" as I learned along this course
const getAllArticles = async (require, response) => {
  // Here I will catch errors from execution
  try {
    const items = await Inventory.find();
    response.status(200).json(items);
  } catch (err) {
    response.status(500).json({ message: err.message });
  }
};

// Endpoint "POST" here I will create a new article
const createItemArticle = async (require, response) => {
  const item = new Inventory({
    itemName: require.body.itemName,
    category: require.body.category,
    quantity: require.body.quantity,
    unit: require.body.unit,
    supplier: require.body.supplier,
    priceByUnit: require.body.priceByUnit,
    minStockrequire: require.body.minStockrequire,
  });

  try {
    const newItem = await item.save();
    response.status(201).json(newItem);
  } catch (err) {
    response.status(400).json({ message: err.message });
  }
};

module.exports = { getAllArticles, createItemArticle };
