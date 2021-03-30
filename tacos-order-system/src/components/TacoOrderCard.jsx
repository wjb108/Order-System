import React from "react";
import { Link } from "react-router-dom";

export default function TacoOrderCard({ orderTacos }) {
  // console.log(Object.keys(orderTacos));
  return (
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
                  {`Price: $${taco.price}.00`}
                </div>
              </div>
            </div>
          </div>
        );
      })}
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
