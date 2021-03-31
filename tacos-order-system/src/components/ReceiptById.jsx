import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { orderBaseURL, config } from "../services/index";
import { useParams } from "react-router-dom";

export default function ReceiptById() {
  const { id } = useParams();

  const [order, setOrder] = useState({});

  useEffect(() => {
    retrieveOrder();
  }, []);

  async function retrieveOrder() {
    let response = await axios.get(orderBaseURL + "/" + id, config);
    console.log(response.data);
    const orderResponse = response.data.fields.orderid;
    const orderInfo = JSON.parse(orderResponse).orderTacos;
    setOrder(orderInfo);
  }

  return (
    <div className="order-taco-container">
      <div className="order-taco-text-container">
        <div className="order-taco-text">
          <br></br>
          <div className="order-taco-text-title">{`Order Id: ${id}`}</div>
          <br></br>
          <div className="order-tacos-container">
            {Object.keys(order).map((key) => {
              const taco = order[key].fields;
              return (
                <div className="order-taco-container">
                  <div className="order-taco-image-container">
                    <img
                      className="order-taco-image"
                      src={taco.image}
                      alt="taco"
                    />
                  </div>
                  <div className="order-taco-text-container">
                    <div className="order-taco-text">
                      <br></br>
                      <div className="order-taco-text-title">
                        {`Name: ${taco.title}`}
                      </div>
                      <br></br>
                      <div className="order-taco-text-quantity">
                        {`Quantity: ${order[key].quantity}`}
                      </div>
                      <br></br>
                      <div className="order-taco-text-price">
                        {`Subtotal: $${taco.price * order[key].quantity}.00`}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
