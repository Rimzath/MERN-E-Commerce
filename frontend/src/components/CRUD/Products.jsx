import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetchProducts();
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
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

  // Handle Add to Cart
  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
  };

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="tab vw-100 w-50 bg-white rounded p-3">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Home Page</h2>
          <Link to="../cart" className="btn btn-dark">
            🛒 Cart ({cart.length})
          </Link>
        </div>

        <Link to="/create" className="btn btn-success my-3">
          Add +
        </Link>

        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity Available</th>
              <th colSpan="3">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr key={product._id}>
                  <td>{product.productName}</td>
                  <td>{product.description}</td>
                  <td>${product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <Link
                      to={`/update/${product._id}`}
                      className="btn btn-success"
                    >
                      Update
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
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
