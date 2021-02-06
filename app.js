const environment = require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const product = require("./routes/product.route"); // Imports routes for the products

const app = express();

let mongoDB = process.env.DEV_DB_URL;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/products", product);

let port = 1234;

app.listen(port, () => {
  console.log("Server is up and running on port numner " + port);
});
