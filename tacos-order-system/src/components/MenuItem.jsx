export default function MenuItem(props) {
  const { taco, handleClick } = props;
  return (
    <div className="taco-container" key={taco.id}>
      <div className="taco-image-container">
        <img className="taco-image" src={taco.fields.image} alt="taco" />
      </div>
      <div className="taco-text-container">
        <br></br>
        {taco.fields.title}
        <br></br>
        <br></br>
        {`$${taco.fields.price}.00`}
        <br></br>
        {taco.fields.quantity}
        <br></br>
        {taco.fields.description}
        <br></br>
        <br></br>
        <button
          className="taco-text-container-button"
          onClick={() => handleClick(taco)}
          type="submit"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
