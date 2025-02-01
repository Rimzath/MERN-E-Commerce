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
    <div className="products-page">
      <div className="container my-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="h4">Our Products</h2> {/* Smaller heading */}
          <Link to="/cart" className="btn btn-dark btn-sm">
            🛒 Cart ({cart.length})
          </Link>
        </div>

        <Link to="/create" className="btn btn-success btn-sm mb-3">
          Add Product +
        </Link>

        {/* Grid Layout for Products - 5 columns */}
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-3">
          {products.map((product) => (
            <div key={product._id} className="col">
              <div className="card h-100 shadow-sm">
                {/* Product Image */}
                <img
                  src={`http://localhost:3001/uploads/${product.image}`}
                  alt={product.productName}
                  className="card-img-top product-image"
                />

                {/* Product Details */}
                <div className="card-body p-2">
                  <h6 className="card-title mb-1">{product.productName}</h6>{" "}
                  {/* Smaller heading */}
                  <p className="card-text text-muted small mb-1">
                    {product.description}
                  </p>{" "}
                  {/* Smaller text */}
                  <h6 className="text-primary small mb-1">
                    ${product.price}
                  </h6>{" "}
                  {/* Smaller text */}
                  <p className="text-secondary small mb-2">
                    Available: {product.quantity}
                  </p>{" "}
                  {/* Smaller text */}
                  {/* Buttons */}
                  <div className="d-flex justify-content-between align-items-center">
                    <Link
                      to={`/update/${product._id}`}
                      className="btn btn-warning btn-sm"
                    >
                      Edit
                    </Link>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(product._id)}
                    >
                      Delete
                    </button>
                  </div>
                  <button
                    className="btn btn-primary btn-sm w-100 mt-2"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
