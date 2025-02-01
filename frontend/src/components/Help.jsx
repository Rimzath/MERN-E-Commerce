import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Help = () => {
  return (
    <div className="container mt-5">
      <Navbar />
      <h2 className="text-center mb-4">Help & Support</h2>
      <div className="accordion" id="faqAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq1"
            >
              How do I place an order?
            </button>
          </h2>
          <div id="faq1" className="accordion-collapse collapse show">
            <div className="accordion-body">
              To place an order, simply browse our products, add items to your
              cart, and proceed to checkout.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq2"
            >
              What payment methods are accepted?
            </button>
          </h2>
          <div id="faq2" className="accordion-collapse collapse">
            <div className="accordion-body">
              We accept credit/debit cards, PayPal, and other secure payment
              methods.
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#faq3"
            >
              How can I track my order?
            </button>
          </h2>
          <div id="faq3" className="accordion-collapse collapse">
            <div className="accordion-body">
              You can track your order using the tracking link sent to your
              email after purchase.
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h4>Contact Us</h4>
        <p>
          If you need further assistance, feel free to contact our support team.
        </p>
        <ul className="list-group">
          <li className="list-group-item">
            📧 Email: <a href="mailto:support@myshop.com">support@myshop.com</a>
          </li>
          <li className="list-group-item">📞 Phone: +94-778-0823</li>
          <li className="list-group-item">
            📍 Address: 123 Main Street, City, Colombo.
          </li>
        </ul>
      </div>
      <Footer />;
    </div>
  );
};

export default Help;
