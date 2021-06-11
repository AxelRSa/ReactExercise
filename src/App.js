import logo from "./logo.svg";
import Saludar from "./componentes/Saludar";
// hook para crear estados
import React, { useState } from "react";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button, Accordion, Card, Alert } from "react-bootstrap";
import { ReactComponent as ReactIcon } from "./assets/react.svg";

function App() {
 const [stateCar, SetStateCar] = useState(false);

 const encenderApagar = () => {
  // SetStateCar(!stateCar);
  SetStateCar((prevValue) => !prevValue);
 };

 return (
  <div className="App">
   <header className="App-header">
    <h1>React Bootstrap</h1>
    <img className="App-logo" src={logo} />
    <h3>El coche está: {stateCar ? "Encendido" : "Apagado"} </h3>
    <button onClick={encenderApagar}>Encender / Apagar</button>
   </header>
  </div>
 );
}

export default App;
