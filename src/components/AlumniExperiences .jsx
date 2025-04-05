import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import  "../App.css";



const AlumniExperiences = () => {
  return (
    <section id="alumni-experiences">
      <Container>
        <h2 className="text-center">Alumni Experiences</h2>
        <Row className="justify-content-center">
          <Col  md={4} sm={12}>
            <Card className="experience-card">
              <Card.Body >
                <Card.Text  >
                  <p style={{color:"black"}}>"The alumni events have been a fantastic way to reconnect
                  with old friends and make new connections. It's like a big
                  family reunion every time!"</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card className="experience-card">
              <Card.Body  >
                <Card.Text  >
                <p style={{color:"black"}}>"Being a part of this alumni network has opened many doors for
                  me professionally and personally. The support and
                  opportunities are invaluable."</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12}>
            <Card className="experience-card">
              <Card.Body  >
                <Card.Text >
                <p style={{color:"black"}}> "I love the diversity of events organized by the alumni
                  network. From career workshops to casual meetups, there's
                  always something that brings us together."</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AlumniExperiences;
