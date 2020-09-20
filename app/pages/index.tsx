import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Header, Footer } from "../components";

export default () => (
  <>
    <Header></Header>
    <Container>
      <Row>
        <Col>改修中</Col>
      </Row>
    </Container>
    <Footer></Footer>
  </>
);
