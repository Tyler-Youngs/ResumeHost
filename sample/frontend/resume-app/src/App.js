import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home';
import Resume from './Resume';
import Info from './Info';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Resume Website</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Resume">Tyler</Nav.Link>
              <Nav.Link href="/Resume">Frank</Nav.Link>
              <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Info">Resume Website</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Info">Project 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Info">Project 3</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
