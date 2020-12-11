/* eslint-disable no-unused-vars */
require("./db");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

let MovieRouter = require("./controllers/movie.Controller");
var corsOptions = {
  origin: "http://localhost:3000",
};
const app = express();
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Server is connected at 8080"));

app.use("/", MovieRouter);
