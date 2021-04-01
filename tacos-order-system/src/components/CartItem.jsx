export default function CartItem(props) {
  const { item, handleClick } = props;
  const taco = item.fields;
  return (
    <div className="order-taco-container">
      <div className="order-taco-image-container">
        <img className="order-taco-image" src={taco.image} alt="taco" />
      </div>
      <div className="order-taco-text-container">
        <div className="order-taco-text">
          <br></br>
          <div className="order-taco-text-title">{`Name: ${taco.title}`}</div>
          <br></br>
          <div className="order-taco-text-quantity">
            {`Quantity: ${item.quantity} `}
            <button
              className="order-taco-text-quantity-button"
              onClick={() => handleClick(item)}
              type="submit"
            >
              +
            </button>
            <button
              className="order-taco-text-quantity-button"
              onClick={() => handleClick(item, false)}
              type="submit"
            >
              -
            </button>
          </div>
          <br></br>
          <div className="order-taco-text-price">
            {`Subtotal: $${taco.price * item.quantity}.00`}
          </div>
        </div>
      </div>
    </div>
  );
}
