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
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./server.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
