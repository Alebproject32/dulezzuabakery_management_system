// In this place will point the path of all functions
const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/inventory");

router.get("/", inventoryController.getAllArticles);
router.post("/", inventoryController.createItemArticle);

module.exports = router;
