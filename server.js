const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./db/connect");
const inventoryRoutes = require("./routes/inventory");
const ordersRoutes = require("./routes/orders");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();
const port = process.env.PORT || 8080;

// This is my Middleware
app.use(bodyParser.json());

// Immediate connection to my database
connectDB();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// My inventory it´s found here
app.use("/inventory", inventoryRoutes);
app.use("/orders", ordersRoutes);

app.get("/", (require, response) =>
  // This is my message in my API. I would like to appear in my frontend when I clic on boton "Execute"
  response.send("¡DulezzuaBakery Management System API is running, Amazing!"),
);

app.listen(port, () => {
  console.log(`I can see the server is running on port ${port}`);
});
