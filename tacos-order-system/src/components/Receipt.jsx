import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { orderBaseURL, config } from "../services/index";

export default function Receipt() {
  const [orderNumber, setOrderNumber] = useState({});

  useEffect(() => {
    retrieveOrder();
  }, []);

  async function retrieveOrder() {
    let response = await axios.get(orderBaseURL, config);
    console.log(response.data.records);
    setOrderNumber(response.data.records);
  }

  return (
    <div className="receipt-cart-container">
      <Link to="/receipt">hello</Link>
      <div className="order-tacos-container">
        {Object.keys(orderNumber).map((key) => {
          const taco = orderNumber[key].fields;
          return (
            <div className="order-taco-container">
              <div className="order-taco-image-container">
                <img className="order-taco-image" src={taco.image} alt="taco" />
              </div>
              <div className="order-taco-text-container">
                <div className="order-taco-text">
                  <br></br>
                  <div className="order-taco-text-title">
                    {`Name: ${taco.title}`}
                  </div>
                  <br></br>
                  <div className="order-taco-text-quantity">
                    {`Quantity: ${orderNumber[key].quantity}`}
                  </div>
                  <br></br>
                  <div className="order-taco-text-price">
                    {`Subtotal: $${taco.price * orderNumber[key].quantity}.00`}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
