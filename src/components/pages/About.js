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
              I am a full stack web developer. Interested in design, music and
              technology.
            </p>
          </div>
        </Row>
      </Container>
    </>
  );
}

// add skills and photo.  New boxes??

export default About;
