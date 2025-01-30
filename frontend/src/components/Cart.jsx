import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Calculate total price
  const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

  // Handle Remove Item
  const handleRemoveItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Handle Clear Cart
  const handleClearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="d-flex vh-100 bg-light justify-content-center align-items-center">
      <div className="tab vw-100 w-50 bg-white rounded p-3">
        <h2>🛒 Cart</h2>
        <Link to="/home" className="btn btn-primary my-3">
          ← Back to Home
        </Link>

        {cart.length === 0 ? (
          <h4>Your cart is empty.</h4>
        ) : (
          <>
            <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product, index) => (
                  <tr key={index}>
                    <td>{product.productName}</td>
                    <td>${product.price}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleRemoveItem(index)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
            <button className="btn btn-danger" onClick={handleClearCart}>
              Clear Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
