const mongoose = require("mongoose");

const FormDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const FormDataModel = mongoose.model("E-Commerce-MERN ", FormDataSchema);

module.exports = FormDataModel;
