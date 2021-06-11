import logo from "./logo.svg";
import "./App.css";
import Saludar from "./componentes/Saludar";

function App() {
 const user = {
  nombre: "Betania Aguilar",
  edad: 50,
  color: "Azul",
 };
 const saludarFn = (name) => {
  alert("saludos " + name);
 };
 return (
  <div className="App">
   <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <Saludar userInfo={user} saludarFn={saludarFn} />
   </header>
  </div>
 );
}

export default App;
