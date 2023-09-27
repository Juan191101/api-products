const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRoute = require("./routes/user");
const productRoute = require ("./routes/product")

// settings
const app = express();
const port = process.env.PORT || 3002;

// middlewares
app.use(express.json());
app.use("/api", userRoute);
app.use("/product", productRoute);


// routes
app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

// server listening
app.listen(port, () => console.log("Server listening to", port));
