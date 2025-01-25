import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  // Fetch products from the server
  const fetchProducts = () => {
    axios
      .get("http://localhost:3001")
      .then((result) => {
        setProduct(result.data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  };

  // Handle delete functionality
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      axios
        .delete(`http://localhost:3001/deleteproducts/${id}`)
        .then(() => {
          console.log("Product deleted successfully");
          setProduct(products.filter((product) => product._id !== id)); // Update the state
        })
        .catch((err) => console.error("Error deleting product:", err));
    }
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="tab vw-100 w-50 bg-white rounded p-3">
        <div>
          <h2>Home Page</h2>
        </div>

        <Link to="/create" className="btn btn-success">
          Add +
        </Link>

        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity Available</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product._id}>
                  <td>{product.productName}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <Link
                      to={`/update/${product._id}`}
                      className="btnEdit btn btn-success"
                    >
                      Update
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      id="btnDelete"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
