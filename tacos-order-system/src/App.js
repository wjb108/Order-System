import axios from 'axios';
import './App.css';
import {baseURL, config} from "./services/index"
import {useEffect, useState} from "react"
import TacosList from "./components/TacosList"
import {Navbar} from "./components/Navbar"
import { Route } from "react-router-dom"

function App() {

  const [tacos, setTacos] =useState([])

  useEffect(() => {
    getTacoData()
  }, [])

  async function getTacoData() {
    let response = await axios.get(baseURL, config)
    setTacos(response.data.records)
    console.log(response.data.records);
  }
  return (
    <div className="App">
      <Route exact path="/"></Route>
      {tacos.map((taco) => {
        return (
        <div key={taco.id} id={taco.id}>
          {taco.fields.title}
          {taco.fields.price}
          {taco.fields.description}
        </div>
        )
      })}
      {/* <TacosList></TacosList> */}
    </div>
  );
}

export default App;
