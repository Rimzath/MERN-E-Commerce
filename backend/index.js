const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://rimzath123:rimzath123@mern.iuldi.mongodb.net/?retryWrites=true&w=majority&appName=MERN",
  console.log("Conneted to mongodb")
);

app.listen(3001, () => {
  console.log("Server listining on 3001");
});
