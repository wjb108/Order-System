import axios from "axios";
import "./App.css";
import { baseURL, config } from "./services/index";
import { useEffect, useState } from "react";
import TacosList from "./components/TacosList";
import Navbar from "./components/Navbar.jsx"
import { Route } from "react-router-dom";


function App() {
  const [tacos, setTacos] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    getTacoData();
  }, []);

  async function getTacoData() {
    let response = await axios.get(baseURL, config);
    setTacos(response.data.records);
    console.log(response.data.records);
  }
  function handleClick(event) {
    console.log(event.target)
    console.log(setCount(event.target + 1))
  }
  return (
    <div className="App">
      <Route>
        <Navbar count={count}/>
      </Route>
      <Route exact path="/">
        {tacos.map((taco) => {
          return (
            <div className="taco-container" key={taco.id}>
              <div className="taco-image-container">
                <img className="taco-image" src={taco.fields.image} />
                <br></br>
                {taco.fields.title}
                <br></br>
                {taco.fields.price}
                <br></br>
                {taco.fields.description}
                <button onClick={handleClick} type="submit">Add To Cart</button>
              </div>
            </div>
          );
        })}
      </Route>
      {/* <TacosList></TacosList> */}
    </div>
  );
}

export default App;
