import axios from "axios";
import "./App.css";
import { tacosBaseURL, config } from "./services/index";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import { Route } from "react-router-dom";
import TacoOrderCard from "./components/TacoOrderCard";
import Receipt from "./components/Receipt";
import MenuItem from "./components/MenuItem";
import ReceiptById from "./components/ReceiptById";

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

  function handleClick(taco, add = true) {
    if (add) {
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
    } else {
      if (count !== 0) {
        setCount((prevState) => {
          return prevState - 1;
        }); 
      }
      if (cart[taco.id].quantity !== 0) {
        setCart((prevState) => {
          const prevTaco = prevState[taco.id]
            ? { ...prevState[taco.id] }
            : { ...taco, quantity: 0 };
          prevTaco.quantity--;
          return { ...prevState, [taco.id]: prevTaco };
        });
      }
    }
  }

  return (
    <div className="App">
      <Route>
        <Navbar count={count} />
      </Route>
      <Route path="/cart">
        <TacoOrderCard orderTacos={cart} handleClick={handleClick} />
      </Route>
      <Route exact path="/receipt">
        <Receipt />
      </Route>
      <Route path="/receipt/:id">
        <ReceiptById />
      </Route>
      <Route exact path="/">
        <div className="tacos-container">
          {tacos.map((taco) => <MenuItem taco={taco} key={taco.id} handleClick={handleClick}/> )}
        </div>
      </Route>
    </div>
  );
}

export default App;
