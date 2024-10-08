const express = require("express");
const connectDB = require("./db");

const Role = require("./models/Role");
const Address = require("./models/Address");
const Category = require("./models/Category");
const User = require("./models/User");
const Agent = require("./models/Agent");
const Property = require("./models/Property");
const Booking = require("./models/Booking");
const bodyParser = require("body-parser");
const userRoute = require("./routes/userRoute");
const propertyRoute = require("./routes/propertyRoutes");
const bookingRoute = require("./routes/bookingRoute");
const app = express();

const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 5000;

connectDB();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
// Enable CORS
app.use(cors());

app.get("/", (req, res) => {
  res.json("API SERVER FOR NextGen Realty");
});

const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);

// app.use('/api', userRoute);
app.use("/api", propertyRoute);
app.use("/api", bookingRoute);
app.use("/api", userRoute);

// userRoute(app); // route for user

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port} `);
});
