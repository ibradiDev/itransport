import React from "react";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  document.title = "iTransport - home";

  return (
    <Container className="bg-light mx-1">
      <div className="bg-light block-13">
        <div className="container">
          <div className="row justify-content-between">
            <div className="rounded col-md-6">
              <Image
                src="assets/images/city.jpg"
                className="rounded block-13 img-fluid shadow "
                alt="City"
              />
            </div>
            <div className="col-md-6 d-flex align-items-center py-3 rounded">
              <div className="text-center">
                <h1>
                  Bienvenue chez{" "}
                  <i className="text-bg-primary px-2 rounded-4">iTransport</i>
                </h1>
                <h3>
                  Bénéficiez des services de{" "}
                  <span className="text-bg-danger px-1 rounded-4">Qualité</span>{" "}
                  au coeur du transport
                </h3>
                {/* <h1>APPELEZ-NOUS MAINTENANT:<br /> +225 0556143361</h1> */}
              </div>
            </div>
          </div>
        </div>

        <div className="block-13 d-flex justify-content-center text-muted text-center py-4">
          <div className="">
          <h1 className="">APPELLEZ-NOUS MAINTENANT:</h1>
          <h1 className="mb-2 nav-item">
            <Link
              to={"tel:+2250555391499"}
              className="nav-link"
              target="_blank"
            >
              <i className="fa fa-phone text-primary"><sup>1</sup></i>{" "}
              <span>+225 0555391499</span>
            </Link>
          </h1>
          <h1 className="mb-2 nav-item">
            <Link
              to={"tel:+2250105959569"}
              className="nav-link"
              target="_blank"
            >
              <i className="fa fa-phone text-primary"><sup>2</sup></i>{" "}
              <span>+225 0105959569</span>
            </Link>
          </h1>
          </div>
        </div>
      </div>

      <div className="bg-light block-13 mt-3">
        <div className="container shadow rounded-5">
          <div className="row mb-auto">
            <div className="col-md-12 text-center">
              <h2 className="font-weight-bold text-black"></h2>
            </div>
          </div>
          <div className="row justify-content-center rounded-4 mb-2 ">
            <div className="col-md-4 text-center p-3 p-md-5 bg-white rounded-5">
              <div className="mb-4 shadow rounded-5">
                <Image
                  src="assets/images/24h_service.png"
                  alt=""
                  className="mx-auto img-fluid"
                />
              </div>
              <div className="">
                <h3 className="font-weight-light h5">Service Journalier</h3>
                <p>
                  Faites-vous accompgner tout au long de votre journée par nos
                  chauffeurs qualifiés
                </p>
              </div>
            </div>

            <div className="col-md-4 text-center p-3 p-md-5 bg-white rounded-5">
              <div className="mb-4 shadow rounded-5">
                <Image
                  src="assets/images/week_1.jpg"
                  alt=""
                  className="mx-auto img-fluid "
                />
              </div>
              <div className="">
                <h3 className="font-weight-light h5">Service Hebdomadaire</h3>
                <p>
                  Profitez de notre service pendant une semaine sans
                  interruption
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center p-3 p-md-5 bg-white rounded-5">
              <div className="mb-4 shadow rounded-5">
                <Image
                  src="assets/images/mensual.jpg"
                  alt=""
                  className="mx-auto img-fluid"
                />
              </div>
              <div className="">
                <h3 className="font-weight-light h5">Service Mensuel</h3>
                <p>
                  Aventurez-vous avec iTransport pour un bon service pendant un
                  ou plusieurs mois
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container bg-white my-3 block-13 rounded-5">
        <Carousel fade>
          <Carousel.Item>
            <Image
              className="rounded-circle"
              style={{ filter: "blur(8px)" }}
              src="assets/images/taxi.jpg"
              width={"100%"}
              height={"500rem"}
              text="Second slide"
            />
            <Carousel.Caption className="mb-3">
              <h1>
                <b>Conduite de Clients</b>
              </h1>
              <p>
                <b>
                  Offrez-vous un service de conduite de clients fiable et
                  confortable avec nos chauffeurs expérimentés.
                </b>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="rounded-circle"
              style={{ filter: "blur(8px)" }}
              src="assets/images/truck_1.jpg"
              width={"100%"}
              height={"500rem"}
              text="Third slide"
            />
            <Carousel.Caption>
              <h1>
                <b>Transport de Marchandises</b>
              </h1>
              <p>
                <b>
                  Faites confiance à notre service de transport de marchandises
                  pour des livraisons sécurisées et ponctuelles.
                </b>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="rounded-circle"
              style={{ filter: "blur(8px)" }}
              src="assets/images/voiture.jpg"
              width={"100%"}
              height={"500rem"}
              text="First slide"
            />
            <Carousel.Caption className="mb-3">
              <h1>
                <b>Chauffeurs à la demande</b>
              </h1>
              <p>
                <b>
                  Vous voulez embaucher un chauffeur? Ne cherchez pas loin.
                  <br />
                  <i className="text-primary bg-body-secondary rounded">
                    iTransport
                  </i>{" "}
                  vous trouve des chauffeurs qualifiés pour votre conduite
                  personnelle ou tout autre service.
                </b>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
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
