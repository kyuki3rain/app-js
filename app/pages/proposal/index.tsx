import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Footer, Header, Title } from "../../components";
import { Proposal } from "../../type";

const Index: React.FC = () => {
  const [proposal, setProposal] = useState<Proposal>({
    title: "",
    body: "",
  });
  return (
    <>
      <Header></Header>
      <Container className="my-5">
        <Row>
          <Col>
            <Title>雪うさぎの企画書</Title>
          </Col>
        </Row>
        <Row>
          <Col md={3}>
            <Card></Card>
          </Col>
          <Col md={9}>
            <Form>
              <Form.Group controlId="proposalForm.ControlTytle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  placeholder="タイトル"
                  value={proposal.title}
                  onChange={(event) =>
                    setProposal({ ...proposal, title: event.target.value })
                  }
                />
              </Form.Group>
              <Form.Group controlId="proposalForm.ControlBody">
                <Form.Label>Body</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="本文"
                  value={proposal.body}
                  onChange={(event) =>
                    setProposal({ ...proposal, body: event.target.value })
                  }
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Save
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Index;
