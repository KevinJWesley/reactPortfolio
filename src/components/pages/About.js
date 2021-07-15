import React from "react";
import "./styles/About.css";
import { Container, Row } from "react-bootstrap";

function About() {
  return (
    <>
      <Container className="container">
        <Row>
          <h1 className="title">About Me</h1>
        </Row>

        <Row>
          <div className="text">
            <p>
              Web development student. Interested in design and music
              technology.
            </p>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default About;
