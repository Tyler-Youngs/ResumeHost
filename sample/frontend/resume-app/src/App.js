import './App.css';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Home';
import FrankResume from './FrankResume';
import TylerResume from './TylerResume';
import PatchNotes from './PatchNotes';
import Info from './Info';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg" className="Navbar-Custom">
          <Navbar.Brand href="/">Resume Website</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Tyler">Tyler</Nav.Link>
              <Nav.Link href="/Frank">Frank</Nav.Link>
              <Nav.Link href="/Patch-Notes">Patch Notes</Nav.Link>
              <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Info">Resume Website</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Info">Project 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Info">Project 3</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Tyler" element={<TylerResume />} />
        <Route path="/Frank" element={<FrankResume />} />
        <Route path="/Patch-Notes" element={<PatchNotes />} />
        <Route path="/Info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
