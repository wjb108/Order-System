import axios from "axios";
import { useHistory } from "react-router-dom";
import { orderBaseURL, config } from "../services/index";
import CartItem from "../components/CartItem";

export default function TacoOrderCard(props) {
  const { orderTacos, handleClick } = props;

  // console.log(Object.keys(orderTacos));
  // console.log(JSON.stringify(orderTacos));

  const history = useHistory();

  async function sendOrder(submittedOrder) {
    const stringObject = JSON.stringify(submittedOrder);
    const sendOrderAirtable = await axios.post(
      orderBaseURL,
      { fields: { orderid: stringObject } },
      config
    );
    history.push("/receipt/" + sendOrderAirtable.data.id);
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
        {Object.keys(orderTacos).map((key) => (
          <CartItem
            item={orderTacos[key]}
            handleClick={handleClick}
            key={key}
          />
        ))}
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
