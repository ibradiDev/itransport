import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow rounded-bottom-4 position-sticky sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand text-uppercase" to={"/"}>
            {/* <i>LOGO</i> */}
            <img
              src="assets/images/logos/itransport_logo_red_tr.png"
              alt="logo"
              width="155rem"
              height="auto"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/*  <!-- Left Side Of Navbar --> */}
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link row text-center" to={"/"}>
                  {/* <i className="fa fa-home"></i> */}
                  <span>Accueil</span>
                </Link>
              </li>

              {/* <li id="ourServices" className="nav-item">
                <Link className="nav-link row text-center" to={"our-services"}>
                  <i className="fa fa-car"></i>
                  <span> Nos Services</span>
                </Link>
              </li> */}

              <li id="contactUs" className="nav-item">
                <Link to={"contact-us"} className="nav-link row text-center">
                  {/* <i className="fa fa-address-book"></i> */}
                  <span>Nous Contacter</span>
                </Link>
              </li>

              <li id="aboutUs" className="nav-item">
                <Link to={"about-us"} className="nav-link row text-center">
                  {/* <i className="fas fa-street-view"></i> */}
                  <span>A propos</span>
                </Link>
              </li>
            </ul>

            {/* <!-- Right Side Of Navbar --> */}
            <ul className="navbar-nav text-center mt-1 ms-auto">
              <li className="nav-item">
                {/* <button
                  type="button"
                  id="modalPrinter"
                  data-bs-toggle="modal"
                  data-bs-target="#driverModal"
                  className="btn btn-outline-danger rounded-4"
                  onMouseOver={() => {
                    document
                      .getElementById("modalPrinter")
                      .classList.add("text-white");
                  }}
                  onMouseLeave={() => {
                    document
                      .getElementById("modalPrinter")
                      .classList.remove("text-white");
                  }}
                >
                  Trouvez un conducteur
                  <i className="ms-1 fa fa-wheelchair me-1"></i>
                </button> */}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* MODAL DE CARTE DE VISITE */}
      {/*   <div
        className="modal fade"
        id="driverModal"
        tabIndex="-1"
        aria-labelledby="driverModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                id="modalScrollableTitle"
                style={{ fontWeight: "900" }}
              >
                Prestaire de service <span className="text-danger"></span>
              </h5>
              <button
                type="button"
                className="btn btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div>
                <div className="d-flex justify-content-between">
                  <h5 className="text-end col-4">
                    <i className="fa fa-user"></i>
                  </h5>
                  <h5 className="text-primary col-7 text-start">ISSA</h5>
                </div>
                <div className="d-flex justify-content-between">
                  <h5 className="text-end col-4">
                    <i className="fa fa-phone"></i>
                  </h5>
                  <a
                    href={"tel:+2250555391499"}
                    className="text-primary nav-link col-7 text-start"
                  >
                    <h5>+225 0555391499</h5>
                  </a>
                </div>
                <div className="d-flex justify-content-between">
                  <h5 className="text-end col-4">
                    <i className="fab fa-whatsapp"></i>
                  </h5>
                  <a
                    href={"https://wa.me/2250555391499"}
                    className="text-primary nav-link col-7 text-start"
                  >
                    <h5>+225 0555391499</h5>
                  </a>
                </div>
                <div className="d-flex justify-content-between">
                  <h5 className="text-end col-4">
                    <i className="fab fa-servicestack"></i>
                  </h5>
                  <h5 className="text-primary col-7 text-start">Conducteur</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Header;
