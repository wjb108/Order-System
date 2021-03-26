import axios from 'axios';
import './App.css';
import {baseURL, config} from "./services/index"
import {useEffect} from "react"

function App() {

  useEffect(() => {
    getTacoData()
  }, [])

  async function getTacoData() {
    let response = await axios.get(baseURL, config)
    console.log(response.data.records);
  }
  return (
    <div className="App">
  
    </div>
  );
}

export default App;
