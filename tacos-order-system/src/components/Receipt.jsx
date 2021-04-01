import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { orderBaseURL, config } from "../services/index";
import ReceiptItem from "./ReceiptItem";

export default function Receipt() {
  const [orderNumber, setOrderNumber] = useState({});

  useEffect(() => {
    retrieveOrder();
  }, []);

  async function retrieveOrder() {
    let response = await axios.get(orderBaseURL, config);
    setOrderNumber(response.data.records);
  }

  return (
    <div className="receipt-cart-container">
      <Link to="/receipt"></Link>
      <div className="receipt-tacos-container">
        {Object.keys(orderNumber).map((key) => {
          const orderId = orderNumber[key].id;
          const orderInfo = orderNumber[key].fields.orderid;
          const orderInfoString = JSON.parse(orderInfo).orderTacos;
          return <ReceiptItem order={orderInfoString} key={key} id={orderId} />;
        })}
      </div>
    </div>
  );
}
