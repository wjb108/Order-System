import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="nav-cart-container">
      <div className="nav-orders-list">
        <Link to="/receipt">
          <div className="nav-orders-list-text">
            See What Others Are Ordering
          </div>
        </Link>
      </div>
      <Link to="/cart">
        <div className="nav-container">
          <div className="cart-count">
            <h2 className="cart-count-text">{props.count}</h2>
          </div>
          <div className="cart-image-container">
            <img
              className="cart-image"
              src="https://www.flaticon.com/svg/vstatic/svg/263/263142.svg?token=exp=1616876057~hmac=185b848123922a559da60352d4eefe8c"
              alt="cart"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
