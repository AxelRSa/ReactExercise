import logo from "./logo.svg";
import Saludar from "./componentes/Saludar";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Button, Accordion, Card, Alert } from "react-bootstrap";

function App() {
 return (
  <div className="App">
   <h1>React Bootstrap</h1>
   <Button
    variant="primary"
    onClick={() => {
     console.log("hola");
    }}
   >
    Primary
   </Button>
   <Accordion defaultActiveKey="0">
    <Card>
     <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
       Abrir
      </Accordion.Toggle>
     </Card.Header>
     <Accordion.Collapse eventKey="0">
      <Card.Body>Hola, amigo</Card.Body>
     </Accordion.Collapse>
    </Card>
    <Card>
     <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
       Click me!
      </Accordion.Toggle>
     </Card.Header>
     <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm another body</Card.Body>
     </Accordion.Collapse>
    </Card>
   </Accordion>
   <Alert variant="primary">Hola</Alert>
  </div>
 );
}

export default App;
