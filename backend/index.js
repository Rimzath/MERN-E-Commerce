const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const FormDataModel = require("./models/formdata");
const ProductModel = require("./models/Products");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://rimzath123:rimzath123@mern.iuldi.mongodb.net/?retryWrites=true&w=majority&appName=MERN"
);

app.post("/register", (req, res) => {
  // To post / insert data into database

  const { email, password } = req.body;
  FormDataModel.findOne({ email: email }).then((user) => {
    if (user) {
      res.json("Already registered");
    } else {
      FormDataModel.create(req.body)
        .then((log_reg_form) => res.json(log_reg_form))
        .catch((err) => res.json(err));
    }
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  FormDataModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json({
          success: true,
          user: { email: user.email, userType: user.userType },
        });
      } else {
        res.json({ success: false, message: "Wrong password" });
      }
    } else {
      res.json({ success: false, message: "No records found!" });
    }
  });
});

app.get("/", (req, res) => {
  ProductModel.find({})
    .then((products) => res.json(products))
    .catch((err) => res.json(err));
});

app.post("/create", (req, res) => {
  ProductModel.create(req.body)
    .then((Products) => res.json(Products))
    .catch((err) => res.json(err));
});

app.get("/getProducts/:id", (req, res) => {
  const id = req.params.id;
  ProductModel.findById({ _id: id })
    .then((products) => res.json(products))
    .catch((err) => res.json(err));
});

app.put("/updateProducts/:id", (req, res) => {
  const id = req.params.id;
  ProductModel.findByIdAndUpdate(
    { _id: id },
    {
      productName: req.body.productName,
      description: req.body.description,
      price: req.body.price,
      quantity: req.body.quantity,
    }
  )
    .then((products) => res.json(products))
    .catch((err) => res.json(err));
});

app.delete("/deleteproducts/:id", (req, res) => {
  const id = req.params.id;
  ProductModel.findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server listining at port http://localhost:3001");
});
