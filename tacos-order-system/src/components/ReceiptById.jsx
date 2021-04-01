import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { orderBaseURL, config } from "../services/index";
import { useParams } from "react-router-dom";
import ReceiptItem from "../components/ReceiptItem";

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
    <div className="receipt-by-id-cart-container">
      <ReceiptItem order={order} id={id} />
    </div>
  );
}
