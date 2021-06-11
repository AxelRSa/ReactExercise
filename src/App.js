import logo from "./logo.svg";
import "./App.css";
import Saludar from "./componentes/Saludar";

function App() {
 return (
  <div className="App">
   <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <Saludar name="Axel Rizo"  edad="500"/>
    <Saludar name="Betania Aguilar" edad="25" />
   </header>
  </div>
 );
}

export default App;
