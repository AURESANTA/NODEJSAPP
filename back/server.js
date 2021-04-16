const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const createRoutes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://asantana:asantana@immo.0hyjs.mongodb.net/immo?retryWrites=true&w=majority");

createRoutes(app);

app.listen(3000, () => {
  console.log("Server is working");
});
