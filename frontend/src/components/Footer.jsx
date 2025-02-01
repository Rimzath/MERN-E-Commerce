import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <h5 className="mb-3">About Us</h5>
            <p className="small">
              We are a leading e-commerce platform offering the best products at
              affordable prices. Shop with us for a seamless experience!
            </p>
          </div>
          <div className="col-md-3 text-center text-md-start">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white text-decoration-none small">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-white text-decoration-none small"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="/cart"
                  className="text-white text-decoration-none small"
                >
                  Cart
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-white text-decoration-none small"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 text-center text-md-start">
            <h5 className="mb-3">Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://facebook.com"
                  className="text-white text-decoration-none small"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  className="text-white text-decoration-none small"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  className="text-white text-decoration-none small"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  className="text-white text-decoration-none small"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="bg-light" />
        <div className="text-center small">
          &copy; {new Date().getFullYear()} MERN Project. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
