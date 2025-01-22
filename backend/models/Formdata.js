const mongoose = require("mongoose");

const FormDataSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  userType: String,
});

const FormDataModel = mongoose.model("users", FormDataSchema);

module.exports = FormDataModel;
