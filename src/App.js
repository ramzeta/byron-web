import logo from './images/logo.svg';
import './App.css';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from "./images/car.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link href="/home">Inicio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Tecnologias</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Contacto</Nav.Link>
          </Nav.Item>
          <Nav.Item>
          <Nav.Link eventKey="link-2">Sobre Nosotros</Nav.Link>
          </Nav.Item>
        </Nav>
      </header>
      <body>
        <div style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'no-repeat',
          width:'auto'
        }}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </body>
      <footer>

      </footer>
    </div>
  );
}

export default App;
