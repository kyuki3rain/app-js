import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { NavbarBrand, Container, Col, Navbar } from 'react-bootstrap'

export const Header = (): JSX.Element => (
  <Navbar className="navbar-dark bg-dark box-shadow">
    <Container className="d-flex justify-content-between">
      <NavbarBrand className="d-flex align-items-center">
        <h4>Common Budgets</h4>
      </NavbarBrand>
    </Container>
  </Navbar>
)

export default Header
