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
      <div className="container my-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="display-5">Our Products</h1>
          <Link to="/cart" className="btn btn-dark btn-lg">
            🛒 Cart ({cart.length})
          </Link>
        </div>

        <Link to="/create" className="btn btn-success btn-lg mb-4">
          Add Product +
        </Link>

        {/* Grid Layout for Products */}
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
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
                <div className="card-body">
                  <h5 className="card-title">{product.productName}</h5>
                  <p className="card-text text-muted">{product.description}</p>
                  <h6 className="text-primary">${product.price}</h6>
                  <p className="text-secondary">
                    Available: {product.quantity}
                  </p>

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
                    className="btn btn-primary w-100 mt-3"
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
