import { Link } from "react-router-dom";

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
            <img
              className="cart-image"
              src="https://www.flaticon.com/svg/vstatic/svg/263/263142.svg?token=exp=1617314097~hmac=28ed15a6a180c20e14cd536f23f0cd8d"
              alt="cart"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
