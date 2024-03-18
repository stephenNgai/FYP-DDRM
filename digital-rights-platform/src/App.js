import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const App = () => {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">OpenSea</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Stats</Nav.Link>
              <Nav.Link href="#link">Create</Nav.Link>
              <NavDropdown title="All" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Art</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Gaming</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Memberships
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">PFPs</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Music</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">
                  Photography
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7">Sports</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.8">
                  Trading Cards
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.9">Utility</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.10">
                  Virtual Worlds
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#home">Login</Nav.Link>
              <Nav.Link href="#link">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="main-content">{/* Add your main content here */}</div>
    </div>
  );
};

export default App;
