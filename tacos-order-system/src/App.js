import axios from "axios";
import "./App.css";
import { baseURL, config } from "./services/index";
import { useEffect, useState } from "react";
import TacosList from "./components/TacosList";
import Navbar from "./components/Navbar.jsx"
import { Route } from "react-router-dom";
import TacoOrderCard from "./components/TacoOrderCard";


function App() {
  const [tacos, setTacos] = useState([]);
  const [cart, setCart] = useState({});
  const [count, setCount] = useState(0);

  useEffect(() => {
    getTacoData();
  }, []);

  async function getTacoData() {
    let response = await axios.get(baseURL, config);
    setTacos(response.data.records);
    console.log(response.data.records);
  }
  function handleClick(taco) {
    // console.log(event.target)
    // console.log(setCount(event.target + 1))
    // setCount(event.target.value + 1)
    setCount((prevState) => {
      return prevState + 1
    })
    setCart((prevState) => {
      const prevTaco = prevState[taco.id]? { ...prevState[taco.id] } : { ...taco, quantity: 0 }
      prevTaco.quantity++ 
      // return { ...prevState, [taco.id]: {...taco, quantity: prevTaco? prevTaco.quantity +1 : 1 } }
      return { ...prevState, [taco.id]: prevTaco }
    })
  }
  return (
    <div className="App">
      <Route>
        <Navbar count={count}/>
      </Route>
      <Route exact path="/cart">
        <TacoOrderCard orderTacos={cart}/>
      </Route>
      <Route exact path="/">
        {tacos.map((taco) => {
          return (
            <div className="taco-container" key={taco.id}>
              <div className="taco-image-container">
                <img className="taco-image" src={taco.fields.image} alt="taco"/>
                <br></br>
                {taco.fields.title}
                <br></br>
                {taco.fields.price}
                <br></br>
                {taco.fields.quantity}
                <br></br>
                {taco.fields.description}
                <button onClick={() => handleClick(taco)} type="submit">Add To Cart</button>
                {/* {cart.filter((item) => {
                  return item.id === taco.id
                }).length} */}
              </div>
            </div>
          );
        })}
      </Route>
      {/* <TacosList></TacosList> */}
    </div>
  )
}

export default App;
