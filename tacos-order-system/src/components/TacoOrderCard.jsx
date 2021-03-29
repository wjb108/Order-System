import React from "react";
import { Link } from "react-router-dom";

export default function TacoOrderCard({ orderTacos }) {
  // console.log(Object.keys(orderTacos));
  return (
    <div className="order-cart-container">
      {Object.keys(orderTacos).map((key) => {
        const taco = orderTacos[key].fields;
        return (
          <div>
            <br></br>
            <img src={taco.image} />
            <br></br>
            {taco.title}
            <br></br>
            {taco.price}
            <br></br>
            {orderTacos[key].quantity}
            <br></br>
            {taco.description}
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
