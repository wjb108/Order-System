import { Link } from "react-router-dom";
import cart from "./shopping-cart.png";

export default function Navbar(props) {
  return (
    <div className="nav-cart-container">
      <div className="nav-orders-list">
        <Link to="/">
          <div className="nav-home-text">Menu</div>
        </Link>
        <Link to="/receipt">
          <div className="nav-orders-list-text">Kitchen View</div>
        </Link>
      </div>
      <Link to="/cart">
        <div className="nav-container">
          <div className="cart-count">
            <h2 className="cart-count-text">{props.count}</h2>
          </div>
          <div className="cart-image-container">
            <img className="cart-image" src={cart} alt="cart" />
          </div>
        </div>
      </Link>
    </div>
  );
}
