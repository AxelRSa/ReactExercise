import logo from "./logo.svg";
import "./App.css";
import Saludar from "./componentes/Saludar";

function App() {
 // const userName = "Axel Rizo";
 // const edad = 26;

 const user = {
  nombre: "Betania Aguilar",
  edad: 50,
  color: "Azul",
 };

 return (
  <div className="App">
   <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    {/* Meter variables de forma normal */}
    {/* <Saludar name="Betania Aguilar" edad="25" /> */}
    {/* Meter variables a través de variables */}
    {/* <Saludar name={userName} edad={edad} /> */}
    {/* Meter variables a través de objeto */}
    <Saludar userinfo={user} />
   </header>
  </div>
 );
}

export default App;
