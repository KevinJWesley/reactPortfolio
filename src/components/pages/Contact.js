import React from "react";
import "./styles/Contact.css";
import { Container, Row } from "react-bootstrap";

function Contact() {
  return (
    <>
      <Container className="contactContainer">
        <Row>
          <h1 className="contactTitle">Contact</h1>
        </Row>
        <Row>
          <div className="contactText">
            <p>
              <a href="mailto:kevin.john.wesley@gmail.com">Email</a>
            </p>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
