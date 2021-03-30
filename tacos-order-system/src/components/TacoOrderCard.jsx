import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { tacosBaseURL, orderBaseURL, config } from "../services/index";
import { useEffect, useState } from "react";

export default function TacoOrderCard({ orderTacos }) {
  // console.log(Object.keys(orderTacos));
  // console.log(JSON.stringify(orderTacos));

  const [orderNumber, setOrderNumber] = useState({});

  async function sendOrder(submittedOrder) {
    const stringObject = JSON.stringify(submittedOrder);
    await axios.post(
      orderBaseURL,
      { fields: { orderid: stringObject } },
      config
    );
  }

  useEffect(() => {
    retrieveOrder();
  }, []);

  async function retrieveOrder() {
    let response = await axios.get(orderBaseURL, config);
    console.log(response);
    // setOrderNumber(response.data.records);
  }

  const orderTotal = Object.keys(orderTacos).reduce((acc, key) => {
    const quantity = orderTacos[key].quantity;
    const price = orderTacos[key].fields.price;
    return acc + quantity * Number(price);
  }, 0);

  return (
    <div className="order-page-container">
      <div className="order-taco-submit-container">
        <h2>{`Order Total: $${orderTotal}.00 `}</h2>
        <div className="order-taco-submit-button">
          <button
            className="order-taco-submit-inner-button"
            type="submit"
            onClick={() => sendOrder({ orderTacos })}
          >
            Submit Order
          </button>
        </div>
      </div>
      <div className="order-tacos-container">
        {Object.keys(orderTacos).map((key) => {
          const taco = orderTacos[key].fields;
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
                    {`Quantity: ${orderTacos[key].quantity}`}
                  </div>
                  <br></br>
                  <div className="order-taco-text-price">
                    {`Subtotal: $${taco.price * orderTacos[key].quantity}.00`}
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
// <div className="cart-taco-container" key={props.orderTacos.id}>
//   <div className="cart-taco-image-container">
//     <img
//       className="cart-taco-image"
//       src={props.orderTacos.fields.image}
//       alt="taco"
//     />
//     <br></br>
//     {props.orderTacos.fields.title}
//     <br></br>
//     {props.orderTacos.fields.price}
//     <br></br>
//     {props.orderTacos.quantity}
//     <br></br>
//     {props.orderTacos.fields.description}
//     {/* <button onClick={() => handleClick(taco)} type="submit"> */}
//     {/* Add To Cart
//       </button> */}
//   </div>
// </div>
