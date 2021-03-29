import React from "react";
import { Link } from "react-router-dom";

export default function TacoOrderCard(props) {
  return (
    <div className="cart-container">
      <Link to="/new"></Link>
      {props.orderTacos.map((taco) => {
        return (
          <div className="taco-container" key={taco.id}>
            <div className="taco-image-container">
              <img className="taco-image" src={taco.fields.image} alt="taco" />
              <br></br>
              {taco.fields.title}
              <br></br>
              {taco.fields.price}
              <br></br>
              {taco.fields.quantity}
              <br></br>
              {taco.fields.description}
              {/* <button onClick={() => handleClick(taco)} type="submit"> */}
              {/* Add To Cart
              </button> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}
