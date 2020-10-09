import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Row, Col, Image, Jumbotron, Button } from "react-bootstrap";
import { Header, Footer, Title } from "../components";

const Index: React.FC = () => (
  <>
    <Header></Header>
    <Jumbotron>
      <Container fluid="lg" className="my-5">
        <Row className="justify-content-center align-items-center">
          <Col xs={8} md={4}>
            <Image src="/icon.jpg" fluid></Image>
          </Col>
          <Col xs={10} md={{ span: 6, offset: 2 }}>
            <Title>雪うさぎのプロフィール</Title>
            <p>
              大学通い始めて３年のしがないプログラマもどきです。
              <br />
              半年ほどとあるベンチャーでインターンしてます。
              <br />
              使用言語は主にTypescriptやそのReact系フレームワークなど。
              <br />
              1年前くらいまでC++、C#あたりを、業務ではRuby on
              Railsを使ってます。
            </p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
    <Container className="my-5">
      <Row className="justify-content-center mt-5">
        <Col>
          <Title>餅</Title>
        </Col>
      </Row>
      <Row>
        <Col xs={10} md={3}>
          <h3>制作物(改修中)</h3>
          <p>
            作ったものリストです。 <br />
            充実すればいいな。
          </p>
          <Button variant="secondary" href="/production">
            ページへ »
          </Button>
        </Col>
        <Col xs={10} md={3}>
          <h3>制作記録(改修中)</h3>
          <p>
            日記です。
            <br />
            Markdownで書けるようにしたい。
          </p>
          <p>
            <Button variant="secondary" href="/diary">
              ページへ »
            </Button>
          </p>
        </Col>
        <Col xs={10} md={3}>
          <h3>予定表(改修中)</h3>
          <p>
            やることリストです。
            <br />
            ほぼGithubのIssueです。連携したい。
          </p>
          <p>
            <Button variant="secondary" href="/plan">
              ページへ »
            </Button>
          </p>
        </Col>
        <Col xs={10} md={3}>
          <h3>企画書(改修中)</h3>
          <p>
            いつかやりたいことリストです。
            <br />
            やりたいだけなので基本やりません。
          </p>
          <p>
            <Button variant="secondary" href="/proposal">
              ページへ »
            </Button>
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col>
          <Title>月</Title>
        </Col>
      </Row>
      <Row>
        <Col xs={8} md={4}>
          <h3>オキニmusic(改修中)</h3>
          <p>
            お気に入りの曲が聞けます。
            <br />
            Youtubeの再生リストと連携したい。
          </p>
          <p>
            <Button variant="secondary">ページへ »</Button>
          </p>
        </Col>
        <Col xs={8} md={4}>
          <h3>推語り(改修中)</h3>
          <p>
            Vtuberが好きです。
            <br />
            語って行きたい。
          </p>
          <p>
            <Button variant="secondary">ページへ »</Button>
          </p>
        </Col>
        <Col xs={8} md={4}>
          <h3>？？？</h3>
          <p>
            ？？？？？？？？？？？
            <br />
            ？？？？？？？？？？？
          </p>
          <p>
            <Button variant="secondary">ページへ »</Button>
          </p>
        </Col>
      </Row>
    </Container>
    <Footer></Footer>
  </>
);

export default Index;
