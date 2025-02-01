import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateProducts = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("quantity", quantity);
    if (image) {
      formData.append("image", image);
    }

    try {
      const result = await axios.post(
        "http://localhost:3001/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(result);
      navigate("/home");
    } catch (err) {
      console.error(err);
    }
  };

  const handleCancel = () => {
    navigate("/home");
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="formupd vw-100 bg-white rounded p-3">
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <h2>Add Product</h2>
          <div className="mb-2">
            <label>Product Name</label>
            <input
              type="text"
              placeholder="Enter Product Name"
              className="form-control"
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label>Description</label>
            <input
              type="text"
              placeholder="Enter Description"
              className="form-control"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label>Price</label>
            <input
              type="number"
              placeholder="Enter Price"
              className="form-control"
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label>Quantity</label>
            <input
              type="number"
              placeholder="Enter Quantity"
              className="form-control"
              onChange={(e) => setQuantity(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label>Upload Image</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <div className="flexContainer">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="btn btn-danger"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProducts;
