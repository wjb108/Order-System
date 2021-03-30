import axios from "axios";
import "./App.css";
import { tacosBaseURL, config } from "./services/index";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import { Route } from "react-router-dom";
import TacoOrderCard from "./components/TacoOrderCard";
import Receipt from "./components/Receipt";

function App() {
  const [tacos, setTacos] = useState([]);
  const [cart, setCart] = useState({});
  const [count, setCount] = useState(0);

  useEffect(() => {
    getTacoData();
  }, []);

  async function getTacoData() {
    let response = await axios.get(tacosBaseURL, config);
    setTacos(response.data.records);
  }

  function handleClick(taco) {
    setCount((prevState) => {
      return prevState + 1;
    });
    setCart((prevState) => {
      const prevTaco = prevState[taco.id]
        ? { ...prevState[taco.id] }
        : { ...taco, quantity: 0 };
      prevTaco.quantity++;
      return { ...prevState, [taco.id]: prevTaco };
    });
  }

  return (
    <div className="App">
      <Route>
        <Navbar count={count} />
      </Route>
      <Route path="/cart">
        <TacoOrderCard orderTacos={cart} />
      </Route>
      <Route path="/receipt">
        <Receipt />
      </Route>
      <Route exact path="/">
        <div className="tacos-container">
          {tacos.map((taco) => {
            return (
              <div className="taco-container" key={taco.id}>
                <div className="taco-image-container">
                  <img
                    className="taco-image"
                    src={taco.fields.image}
                    alt="taco"
                  />
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
                  <button onClick={() => handleClick(taco)} type="submit">
                    Add To Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Route>
    </div>
  );
}

export default App;
