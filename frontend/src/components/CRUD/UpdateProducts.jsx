import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateProducts() {
  const { id } = useParams(); // Capture the product ID from the URL
  const [productName, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const navigate = useNavigate();

  // Populate the form fields with existing product data
  useEffect(() => {
    const urlGetProduct = `http://localhost:3001/getProducts/${id}`;
    axios
      .get(urlGetProduct)
      .then((result) => {
        console.log(result);
        setName(result.data.productName);
        setDescription(result.data.description);
        setPrice(result.data.price);
        setQuantity(result.data.quantity);
      })
      .catch((err) => console.error("Error fetching product data:", err));
  }, [id]);

  const updateProduct = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3001/updateProducts/${id}`, {
        productName,
        description,
        price,
        quantity,
      })
      .then((result) => {
        console.log("Product updated successfully:", result);
        navigate("/home");
      })
      .catch((err) => console.error("Error updating product:", err));
  };

  const handleCancel = () => {
    navigate("/home");
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="formupd vw-100 bg-white rounded p-3">
        <form onSubmit={updateProduct}>
          <h2>Update Product</h2>
          <div className="mb-2">
            <label htmlFor="input-name-update">Product Name</label>
            <input
              type="text"
              placeholder="Enter Product Name"
              className="form-control"
              id="input-name-update"
              value={productName}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="input-description-update">Description</label>
            <input
              type="text"
              placeholder="Enter Description"
              className="form-control"
              id="input-description-update"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="input-price-update">Price</label>
            <input
              type="number"
              placeholder="Enter Price"
              className="form-control"
              id="input-price-update"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="input-quantity-update">Quantity</label>
            <input
              type="number"
              placeholder="Enter Quantity"
              className="form-control"
              id="input-quantity-update"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className="flexContainer">
            <button className="btn btn-success btnSubmUpd">Update</button>
            <button
              onClick={handleCancel}
              className="btn btn-danger"
              id="btnCancelUpd"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateProducts;
