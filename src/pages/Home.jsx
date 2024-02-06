import React from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";

const Home = () => {
  document.title = "iTransport - home";

  return (
    <Container>
      <div className="position-relative my-3 py-2">
        <video
          className="rounded"
          height="auto"
          width="100%"
          autoPlay
          muted
          loop
          style={{ filter: "blur(6px)" }}
        >
          <source src="assets/videos/traffic.mp4" type="video/mp4" />
          Votre navigateur n'accepte pas les balises videos.
        </video>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "white",
            // backgroundColor: "black",
            textAlign: "center",
            fontWeight: "bold",
            padding: "15px",
            borderRadius: "8px",
          }}
        >
          <h1>
            Bienvenue chez{" "}
            <i className="text-bg-primary py-1 px-2 rounded">iTransport</i>
          </h1>
          <p>
            Bénéficiez des services de{" "}
            <span className="text-bg-danger p-1 rounded">"Qualité"</span> au
            coeur du transport
          </p>
        </div>
      </div>
      <div className="header-expand my-2">
        <Image
          className="rounded-top"
          src="assets/images/numero.jpg"
          height="100%"
          width="100%"
          alt="call_number"
        />
      </div>
      <Carousel fade>
        <Carousel.Item>
          <Image
            style={{ filter: "blur(8px)" }}
            src="assets/images/taxi.jpg"
            width={"100%"}
            height={"500rem"}
            text="Second slide"
          />
          <Carousel.Caption>
            <h1>Conduite de Clients</h1>
            <p>
              Offrez-vous un service de conduite de clients fiable et
              confortable avec nos chauffeurs expérimentés.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            style={{ filter: "blur(8px)" }}
            src="assets/images/image3.jpg"
            width={"100%"}
            height={"500rem"}
            text="Third slide"
          />
          <Carousel.Caption>
            <h1>Transport de Marchandises</h1>
            <p>
              Faites confiance à notre service de transport de marchandises pour
              des livraisons sécurisées et ponctuelles.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            style={{ filter: "blur(8px)" }}
            src="assets/images/image1.jpg"
            width={"100%"}
            height={"500rem"}
            text="First slide"
          />
          <Carousel.Caption>
            <h1>Chauffeurs à la demande</h1>
            <p>
              Vous voulez embaucher un chauffeur? Ne cherchez pas loin.
              <br />
              <b>iTransport</b> peut vous trouver des chauffeurs qualifiés pour
              votre conduite personnelle ou tout autre service.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

const Container = styled.div`
  /* Styles responsifs pour la vidéo */
  @media (max-width: 767px) {
    .position-relative video {
      height: auto;
      max-width: 100%;
      width: 100%;
    }
  }

  margin-top: 1rem;
  .background-slider {
    /* Le reste du code reste inchangé */
  }
`;

export default Home;
