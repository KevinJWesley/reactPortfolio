import React from "react";
import "./styles/About.css";
import { Container, Row } from "react-bootstrap";

function About() {
  return (
    <>
      <Container className="aboutContainer">
        <Row xs={1}>
          <h1 className="aboutTitle">About Me</h1>
        </Row>

        <Row>
          <div className="aboutText">
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
