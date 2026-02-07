// Amazing, here it is my Brain of all files in my project
// to communicate with my API or Frontend
const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "DulezzuaBakery Management System API",
    description:
      "This is my final project of course CSE341 and calling Management System for DulezzuaBakery - Inventory and Orders",
  },
  host: "dulezzuabakery-management-system.onrender.com",
  schemes: ["https"],
  definitions: {
    Inventory: {
      itemName: "wheat flour",
      category: "raw material",
      quantity: 50,
      unit: "kg",
      supplier: "Molinos del Sol",
      priceByUnit: 1.5,
      minStockrequire: 10,
    },
    Order: {
      customerName: "Juan Perez",
      customerEmail: "juan@example.com",
      deliveryDate: "2026-02-15",
      totalAmount: 25.0,
      orderStatus: "Pending",
      paymentMethod: "Credit Card",
      article: [{ articleId: "Article_ID", quantity: 2 }],
      notes: "Deliver in the afternoon",
    },
  },
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./server.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
