export default function ReceiptItem(props) {
  const { order, id } = props;

  const orderTotal = Object.keys(order).reduce((acc, key) => {
    const quantity = order[key].quantity;
    const price = order[key].fields.price;
    return acc + quantity * Number(price);
  }, 0);

  return (
    <div className="receipt-taco-container">
      <div className="receipt-taco-text-container">
        <div className="receipt-taco-text">
          <br></br>
          <b>
            <div className="receipt-taco-text-title">{`Order Id: ${id}`}</div>
          </b>
          <br></br>
          <div className="receipt-tacos-container">
            {Object.keys(order).map((key) => {
              const taco = order[key].fields;
              return (
                <div className="receipt-taco-containerv1">
                  <div className="receipt-taco-text-containerv2">
                    <div className="receipt-taco-text">
                      <br></br>
                      <div className="receipt-taco-text-title">
                        {`Name: ${taco.title}`}
                      </div>
                      <br></br>
                      <div className="receipt-taco-text-quantity">
                        {`Quantity: ${order[key].quantity}`}
                      </div>
                      <br></br>
                      <div className="receipt-taco-text-price">
                        {`Subtotal: $${taco.price * order[key].quantity}.00`}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="receipt-taco-submit-container">
              <h3>{`Order Total: $${orderTotal}.00 `}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
