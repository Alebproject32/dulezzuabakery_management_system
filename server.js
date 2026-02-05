const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./db/connect");
const app = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.json());

connectDB();

app.get("/", (require, response) =>
  // This is my header in my API I would like to appear in my frontend
  response.send("¡DulezzuaBakery Management System API is running, Amazing!"),
);

app.listen(port, () => {
  console.log(`I can see the server is running on port ${port}`);
});
