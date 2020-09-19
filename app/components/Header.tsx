import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
  Form,
  Button,
} from 'react-bootstrap'

export const Header = (): JSX.Element => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="/">雪うさぎのもちづき</Navbar.Brand>
      <Nav className="justify-content-end">
        <Nav.Link>menu</Nav.Link>
        <Nav.Link>menu</Nav.Link>
        <Nav.Link>menu</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
)

export default Header
