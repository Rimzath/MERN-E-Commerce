const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");
const FormDataModel = require("./models/formdata");
const ProductModel = require("./models/Products");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

// MongoDB Connection
mongoose.connect(
  "mongodb+srv://rimzath123:rimzath123@mern.iuldi.mongodb.net/?retryWrites=true&w=majority&appName=MERN"
);

// Multer Configuration for Image Upload
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage });

// User Registration
app.post("/register", (req, res) => {
  const { email, password } = req.body;
  FormDataModel.findOne({ email }).then((user) => {
    if (user) {
      res.json("Already registered");
    } else {
      FormDataModel.create(req.body)
        .then((log_reg_form) => res.json(log_reg_form))
        .catch((err) => res.json(err));
    }
  });
});

// User Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  FormDataModel.findOne({ email }).then((user) => {
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

// Fetch all users
app.get("/home", (req, res) => {
  FormDataModel.find({})
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

// Fetch all products
app.get("/", (req, res) => {
  ProductModel.find({})
    .then((products) => res.json(products))
    .catch((err) => res.json(err));
});

// Create Product with Image Upload
app.post("/create", upload.single("image"), (req, res) => {
  const { productName, description, price, quantity } = req.body;
  const imagePath = req.file ? req.file.filename : "";

  ProductModel.create({
    productName,
    description,
    price,
    quantity,
    image: imagePath,
  })
    .then((product) => res.json(product))
    .catch((err) => res.json(err));
});

// Fetch Single Product
app.get("/getProducts/:id", (req, res) => {
  ProductModel.findById(req.params.id)
    .then((product) => res.json(product))
    .catch((err) => res.json(err));
});

// Update Product with Optional Image Upload
app.put("/updateProducts/:id", upload.single("image"), (req, res) => {
  const { productName, description, price, quantity } = req.body;
  const imagePath = req.file ? `/uploads/${req.file.filename}` : req.body.image; // Keep old image if none uploaded

  ProductModel.findByIdAndUpdate(
    req.params.id,
    { productName, description, price, quantity, image: imagePath },
    { new: true }
  )
    .then((product) => res.json(product))
    .catch((err) => res.json(err));
});

// Delete Product
app.delete("/deleteproducts/:id", (req, res) => {
  ProductModel.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: "Product deleted successfully!" }))
    .catch((err) => res.json(err));
});

// Start Server
app.listen(3001, () => {
  console.log("Server listening at http://localhost:3001");
});
