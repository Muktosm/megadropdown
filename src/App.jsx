import { useState } from "react";
import "./index.css";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";


function App() {
  const [count, setCount] = useState(0);

  return <>
   <Navbar/>
  </>;
}

export default App;
