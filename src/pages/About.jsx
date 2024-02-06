import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  document.title = "iTransport - about";
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <h1>À propos de iTransport</h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h2>Notre Service</h2>
          <p>
            iTransport offre des services de transport de personnes et de
            marchandises, connectant des chauffeurs fiables avec des clients à
            travers le monde. Notre application propose une solution simple,
            sécurisée et efficace pour répondre à vos besoins de déplacement.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h2>Notre Engagement</h2>
          <p>
            Notre mission est de faciliter le transport en fournissant une
            plateforme intuitive et sécurisée. Nous croyons en une communication
            transparente et efficace, garantissant une expérience client
            optimale. La sécurité et la fiabilité sont au cœur de notre
            démarche.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <h2>Notre Équipe</h2>
          <p>
            iTransport a été fondé par [Nom du Fondateur] et [Nom du
            Co-fondateur], apportant avec eux [Nombre d'années] d'expérience
            dans le secteur du transport. Bien que faisant maintenant partie de
            [Nom de la Société Mère], iTransport reste dédié à son objectif
            initial : être un leader mondial dans le domaine des solutions de
            transport innovantes.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
