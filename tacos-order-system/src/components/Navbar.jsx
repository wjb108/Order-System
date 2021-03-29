import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div className="cart-container">
      <Link to="/cart">
        <div className="cart-image-container">
          <h1>{props.count}</h1>
          <img
            className="cart-image"
            src="https://www.flaticon.com/svg/vstatic/svg/263/263142.svg?token=exp=1616876057~hmac=185b848123922a559da60352d4eefe8c"
            alt="cart"
          />
        </div>
      </Link>
    </div>
  );
}
