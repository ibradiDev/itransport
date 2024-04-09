import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  document.title = "iTransport - home";

  return (
    <div className="bg-light mt-1">
      <div className="bg-light ">
        <div className="bg-light position-relative">
          <div className="overlay"></div>

          <img
            src="assets/images/city.jpg"
            className="img-fluid shadow"
            width="100%"
            alt="City_streets"
            title=""
          />
          <div className="md:hidden col-md-12 col-10 position-absolute top-50 start-50 translate-middle text-white">
            <h1 className="text-center">
              <i className="text-bg-primary px-2 rounded-4">iTransport</i>
            </h1>
            <h1 className="text-center text-white">
              Les services de{" "}
              <span className="text-bg-danger px-1 rounded-4">
                <i>Qualité</i>
              </span>{" "}
              au coeur du transport
            </h1>
          </div>
        </div>

        <div className="block-13 d-flex justify-content-center text-black  text-center py-4">
          <div className="">
            <h2 className="" style={{ fontFamily: "Monoton, Arial" }}>
              APPELLEZ-NOUS &nbsp; MAINTENANT:
            </h2>

            <div className="mb-2 d-flex bg-light border-danger  border-top-0 border-end-0 rounded-4 justify-content-center">
              <div className="bg-body-secondary rounded-4 col-md-2 p-3">
                <h3>
                  <i className="fa fa-phone text-primary telephone1">
                    <sup>1</sup>
                  </i>{" "}
                </h3>
              </div>
              <div
                className="bg-body-secondary rounded-4 p-3"
                style={{ fontFamily: "Lobster, Monoton, Arial" }}
              >
                <h3 className="mb-2 nav-item">
                  <Link
                    to={"tel:+2250555391499"}
                    className="nav-link"
                    target="_blank"
                    title="Cliquer pour appeler"
                  >
                    <span>+225 05 55 39 14 99</span>
                  </Link>
                </h3>
              </div>
              {/* <i className="fa fa-phone telephone-handle"></i> */}
            </div>

            <div className="mt-2 d-flex bg-light border-danger  border-top-0 border-end-0 rounded-4 justify-content-center">
              <div className="bg-body-secondary rounded-4 col-md-2 p-3">
                <h3>
                  <i className="fa fa-phone text-primary telephone2">
                    <sup>2</sup>
                  </i>{" "}
                </h3>
              </div>
              <div
                className="bg-body-secondary rounded-4 p-3"
                style={{ fontFamily: "Lobster, Monoton, Arial" }}
              >
                <h3 className="mb-2 nav-item">
                  <Link
                    to={"tel:+2250102959569"}
                    className="nav-link"
                    target="_blank"
                    title="Cliquer pour appeler"
                  >
                    <span>+225 01 02 95 95 69</span>
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <>SERVICES TIMES*/}
      <div className="bg-light mt-3">
        <div className="container-fluid">
          <div className="row mb-auto">
            <div className="col-md-12 text-center">
              <h1 className="font-weight-bold text-black">
                Créneaux de service
              </h1>
            </div>
          </div>
          <div className="row justify-content-center mb-2 ">
            <div className="col-md-4 text-center p-3 p-md-5 bg-white">
              <div className="mb-4 rounded-5">
                <img
                  src="assets/images/24h_service.jpg"
                  alt=""
                  className="mx-auto img-fluid"
                />
              </div>
              <div className="">
                <h3 className="font-weight-light h5">Service Journalier</h3>
                <p>
                  Faites-vous accompagner tout au long de votre journée par nos
                  chauffeurs qualifiés
                </p>
              </div>
            </div>

            <div className="col-md-4 text-center p-3 p-md-5 bg-white">
              <div className="mb-4 rounded-5">
                <img
                  src="assets/images/week.jpg"
                  alt=""
                  className="mx-auto img-fluid "
                />
              </div>
              <div className="">
                <h3 className="font-weight-light h5">Service Hebdomadaire</h3>
                <p>
                  Profitez de notre service pendant une semaine ou plus sans
                  interruption
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center p-3 p-md-5 bg-white">
              <div className="mb-4 rounded-5">
                <img
                  src="assets/images/month.jpg"
                  alt=""
                  className="mx-auto img-fluid"
                />
              </div>
              <div className="">
                <h3 className="font-weight-light h5">Service Mensuel</h3>
                <p>
                  Aventurez-vous avec <i>iTransport</i> pour un bon service d'un
                  ou plusieurs mois
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </> CARDS DES TEMPS DE SERVICE */}

      {/* <>SERVICES TYPES */}
      <div className="bg-light block-13 my-3">
        <div className="container-fluid">
          <div className="row mb-auto">
            <div className="col-md-12 text-center">
              <h1 className="font-weight-bold text-black">Types de service</h1>
            </div>
          </div>
          <div className="row justify-content-center rounded-4 mb-2 ">
            <div className="col-md-4 text-center p-3 p-md-5 bg-white">
              <div className="mb-4  rounded-5">
                <img
                  src="assets/images/taxi.jpg"
                  alt=""
                  className="mx-auto img-fluid rounded"
                />
              </div>
              <div className="">
                <h3 className="font-weight-light h5">
                  <u>Faites-vous conduire</u>
                </h3>
                <p>
                  Offrez-vous un service fiable et confortable pour vos
                  déplacements avec nos chauffeurs expérimentés.
                </p>
              </div>
            </div>

            <div className="col-md-4 text-center p-3 p-md-5 bg-white">
              <div className="mb-4 rounded-5">
                <img
                  src="assets/images/driver_logo.jpg"
                  alt=""
                  className="mx-auto img-fluid rounded"
                />
              </div>
              <div className="">
                <h3 className="font-weight-light h5">
                  <u>Chauffeurs à la demande</u>
                </h3>
                <p>
                  Vous voulez embaucher un chauffeur? Ne cherchez pas loin.
                  <br />
                  <i className="text-primary bg-body-secondary rounded">
                    iTransport
                  </i>{" "}
                  vous trouve des chauffeurs qualifiés pour votre conduite
                  personnelle ou tout autre service.
                </p>
              </div>
            </div>

            <div className="col-md-4 text-center p-3 p-md-5 bg-white">
              <div className="mb-4 rounded-5">
                <img
                  src="assets/images/itransport_goods.png"
                  alt=""
                  className="mx-auto img-fluid rounded"
                />
              </div>
              <div className="">
                <h3 className="font-weight-light h5">
                  <u>Transport de Marchandises</u>
                </h3>
                <p>
                  Faites confiance à notre service de transport de marchandises
                  pour une livraison sécurisée dans des delais remarquables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </>SERVICES TYPES*/}
      <div className="block-13 d-flex justify-content-center text-black  text-center py-4">
        <div className="">
          <h2 className="" style={{ fontFamily: "Monoton, Arial" }}>
            APPELLEZ-NOUS &nbsp; MAINTENANT:
          </h2>

          <div className="mb-2 d-flex bg-light border-danger  border-top-0 border-end-0 rounded-4 justify-content-center">
            <div className="bg-body-secondary rounded-4 col-md-2 p-3">
              <h3>
                <i className="fa fa-phone text-primary telephone1">
                  <sup>1</sup>
                </i>{" "}
              </h3>
            </div>
            <div
              className="bg-body-secondary rounded-4 p-3"
              style={{ fontFamily: "Lobster, Monoton, Arial" }}
            >
              <h3 className="mb-2 nav-item">
                <Link
                  to={"tel:+2250555391499"}
                  className="nav-link"
                  target="_blank"
                  title="Cliquer pour appeler"
                >
                  <span>+225 05 55 39 14 99</span>
                </Link>
              </h3>
            </div>
            {/* <i className="fa fa-phone telephone-handle"></i> */}
          </div>

          <div className="mt-2 d-flex bg-light border-danger  border-top-0 border-end-0 rounded-4 justify-content-center">
            <div className="bg-body-secondary rounded-4 col-md-2 p-3">
              <h3>
                <i className="fa fa-phone text-primary telephone2">
                  <sup>2</sup>
                </i>{" "}
              </h3>
            </div>
            <div
              className="bg-body-secondary rounded-4 p-3"
              style={{ fontFamily: "Lobster, Monoton, Arial" }}
            >
              <h3 className="mb-2 nav-item">
                <Link
                  to={"tel:+2250102959569"}
                  className="nav-link"
                  target="_blank"
                  title="Cliquer pour appeler"
                >
                  <span>+225 01 02 95 95 69</span>
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
