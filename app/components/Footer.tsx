import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Container, Navbar, NavbarBrand } from 'react-bootstrap'

export const Footer = (): JSX.Element => (
  <Navbar className="navbar-dark bg-dark box-shadow">
    <Container className="d-flex justify-content-between">
      <NavbarBrand className="d-flex align-items-center">
        <h6>Copyright © YM Inc. All rights reserved?</h6>
      </NavbarBrand>
    </Container>
  </Navbar>
)

export default Footer
