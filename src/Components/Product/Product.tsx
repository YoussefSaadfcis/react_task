// import React from "react";
import { Link } from "react-router-dom";

import "./Product.css";
const Product = () => {
  return (
    <div className="products">
      <div className="products-header">NEW IN</div>
      <div className="carts">
        <div className="cart">
          <Link to="/product/1">
            <img
              className="product-image"
              src="src/assets/products/p1.jpg"
            ></img>

            <p className="product-name">product 1</p>
            <p className="product-price">$1.200.00</p>
          </Link>
        </div>

        <div className="cart">
          <Link to="/product/2">
            <img
              className="product-image"
              src="src/assets/products/p2.jpg"
            ></img>

            <p className="product-name">product 1</p>
            <p className="product-price">$1.200.00</p>
          </Link>
        </div>

        <div className="cart">
          <Link to="/product/3">
            <img
              className="product-image"
              src="src/assets/products/p3.jpg"
            ></img>

            <p className="product-name">product 1</p>
            <p className="product-price">$1.200.00</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
