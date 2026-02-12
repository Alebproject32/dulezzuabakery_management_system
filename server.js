const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./db/connect");
//const inventoryRoutes = require("./routes/inventory"); Last routes
//const ordersRoutes = require("./routes/orders"); Last routes
//const suppliesRoutes = require("./routes/supplies"); LAst routes
//const employeesRoutes = require("./routes/employees"); Last routes
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
const passport = require("passport");
const session = require("express-session");
require("./middleware/passport");

const app = express();
const port = process.env.PORT || 8080;

// This is my Middleware
app.use(bodyParser.json());

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  }),
);

// I am using here to initialize my session with Passport
app.use(passport.initialize());
app.use(passport.session());

// Immediate connection to my database
connectDB();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// New routes to controller all access in my API DulezzuaBakery
app.use("/", require("./routes/index"));

// My Last inventory it´s found here
//app.use("/inventory", inventoryRoutes);
//app.use("/orders", ordersRoutes);
//app.use("/supplies", suppliesRoutes);
//app.use("/employees", employeesRoutes);

app.get("/", (request, response) =>
  // This is my message in my API. I would like to appear in my frontend when I clic on boton "Execute"
  response.send("¡DulezzuaBakery Management System API is running, Amazing!"),
);

app.listen(port, () => {
  console.log(`I can see the server is running on port ${port}`);
});

module.exports = app;
