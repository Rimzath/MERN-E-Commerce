import React from "react";
import { useState } from "react";

const CreateProducts = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="formupd vw-100 bg-white rounded p-3">
        <form>
          <h2>Add Product</h2>
          <div className="mb-2">
            <label htmlFor="">Product Name</label>
            <input
              type="text"
              placeholder="Enter Product Name"
              className="form-control"
              id="inpProductName"
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Description</label>
            <input
              type="text"
              placeholder="Enter Description"
              className="form-control"
              id="inpDescription"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Price</label>
            <input
              type="number"
              placeholder="Enter Price"
              className="form-control"
              id="inpPrice"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Quantity</label>
            <input
              type="number"
              placeholder="Enter Quantity"
              className="form-control"
              id="inpQuantity"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="flexContainer">
            <button className="btnSubm btn btn-success" id="btnRecor">
              Submit
            </button>
            <button className="btn btn-danger" id="btnCancelAdd">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProducts;
