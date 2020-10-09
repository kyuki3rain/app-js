import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

export const Header: React.FC = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="/">雪うさぎの餅月</Navbar.Brand>
      <Nav className="justify-content-end">
        <Nav.Link>menu</Nav.Link>
        <Nav.Link>menu</Nav.Link>
        <Nav.Link>menu</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

export default Header;
