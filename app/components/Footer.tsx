import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Col, Container, Navbar, NavbarBrand, Row } from 'react-bootstrap'

export const Footer = (): JSX.Element => (
  <Container fluid>
    <Row>
      <Col className="text-center">
        Copyright © Snow Rabbit Inc. All rights reserved?
      </Col>
    </Row>
  </Container>
)

export default Footer
