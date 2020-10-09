import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Footer, Header, Title } from "../../components";
import { Proposal } from "../../type";
import * as MongoDB from "mongodb";
import axios from "axios";

const Instance = axios.create({
  headers: { "Content-Type": "application/json" },
  responseType: "json",
});

const updateProposal = (proposal: Proposal) => {
  Instance.post("/api/proposal/create", {
    proposal: proposal,
  }).then((res) => {
    console.log(res.data);
  });
};

const getProposalList = (setProposals, setReaload) => {
  Instance.post("/api/proposal/list").then((res) => {
    setProposals(res.data);
    setReaload(false);
  });
};

const Page: React.FC = () => {
  const [proposal, setProposal] = useState<Proposal>({
    title: "",
    body: "",
    _id: null,
  });
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [reload, setReaload] = useState<boolean>(true);

  if (reload) {
    getProposalList(setProposals, setReaload);
  }

  console.log(proposals);

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
            <Button
              onClick={() => setProposal({ _id: null, title: "", body: "" })}
            >
              new
            </Button>
            {proposals.map((prop) => (
              <Card
                onClick={() =>
                  setProposal({
                    _id: prop._id,
                    title: prop.title,
                    body: prop.body,
                  })
                }
                bg={prop._id == proposal._id ? "primary" : "white"}
                className="my-1"
                text={prop._id == proposal._id ? "white" : "dark"}
              >
                <Card.Body>
                  <Card.Title>{prop.title}</Card.Title>
                  <Card.Text>{prop.body}</Card.Text>
                </Card.Body>
              </Card>
            ))}
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
              <Button
                variant="primary"
                type="submit"
                onClick={() => {
                  updateProposal(proposal);
                  setReaload(true);
                }}
              >
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

export default Page;
