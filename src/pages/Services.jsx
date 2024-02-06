// Services.jsx

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Services = () => {
  document.title = "iTransport - services";
  return (
    <Container>
      <h2>Nos Services</h2>

      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Conduite de Clients</Card.Title>
              <Card.Text>
                Offrez un service de conduite de clients fiable et confortable
                avec nos chauffeurs expérimentés.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Transport de Marchandises</Card.Title>
              <Card.Text>
                Faites confiance à notre service de transport de marchandises
                pour des livraisons sécurisées et ponctuelles.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Ajoutez d'autres services ici */}
    </Container>
  );
};

export default Services;
