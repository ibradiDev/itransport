import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addToNewsletters } from "../App";

const Footer = () => {
  const [email, setEmail] = useState({ email: "" });

  const handleEmailChange = (e) => {
    setEmail({ email: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      addToNewsletters(email);
      document.getElementById("subscriptionForm").reset();
    } catch (err) {
      console.error("Error:", err);
    }
  };
  return (
    <>
      {/* DEBUT MODAL */}
      <div
        className="modal fade"
        id="successModal"
        tabIndex="-1"
        aria-labelledby="successModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div className="alert alert-success text-center">
                Succès d'envoi
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FIN MODAL */}
      <footer className="footer section-sm bg-black mt-2 rounded-top-4">
        <div className="container py-4">
          <div className="row justify-content-between">
            <div className="col-lg-2 col-md-4 col-5 mb-4">
              <div className="">
                <h6 className="mb-4 text-secondary text-uppercase">
                  LOCALITES
                </h6>
                <ul className="list-unstyled">
                  <li className="mb-2 nav-item">
                    <div className="nav-link text-white">
                      <img
                        className="pb-1 pe-1"
                        src="assets/images/ivory-coast.png"
                        width="17px"
                        height="16px"
                        alt=""
                      />
                      <span>Côte d'Ivoire</span>
                    </div>
                    <ul className="text-secondary">
                      <li className="nav-item">
                        <Link
                          to={"https://g.co/kgs/SgQHPej"}
                          target="_blank"
                          className="nav-link"
                        >
                          Abidjan
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to={"https://g.co/kgs/YrrAk8s"}
                          target="_blank"
                          className="nav-link"
                        >
                          Toumodi
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link
                          to={"https://g.co/kgs/FnyK6Y8"}
                          target="_blank"
                          className="nav-link"
                        >
                          Yamoussoukro
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-7 mb-4">
              <div className="">
                <h6 className="mb-4 text-secondary text-uppercase">CONTACTS</h6>
                <ul className="list-unstyled">
                  <li className="mb-2 nav-item">
                    <Link
                      to={"tel:+2250555391499"}
                      className="nav-link text-white"
                      target="_blank"
                    >
                      <i className="fa fa-phone text-primary"></i>{" "}
                      <span>+225 0555391499</span>
                    </Link>
                  </li>
                  <li className="mb-2 nav-item">
                    <Link
                      to={"https://wa.me/2250555391499"}
                      target="_blank"
                      className="nav-link text-white"
                    >
                      <i className="fab fa-whatsapp text-success"></i>{" "}
                      <span>+225 0555391499</span>
                    </Link>
                  </li>

                  <li className="mb-2 nav-item">
                    <Link
                      to={"mailto:itrans@gmail.com"}
                      className="nav-link text-white"
                    >
                      <i className="fas fa-mail-bulk text-warning"></i>{" "}
                      <span>itransport@gmail.com</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-8">
              <h5 className="mb-4">
                <Link to={"/"}>
                  <img
                    src="assets/images/logos/itransport_logo_white_tr.png"
                    alt="logo"
                    width="155rem"
                  />
                  {/* <i>LOGO</i> */}
                </Link>
              </h5>

              <div className="pe-0 pe-xl-5">
                <form
                  onSubmit={handleSubmit}
                  method="post"
                  id="subscriptionForm"
                >
                  <div
                    id="subscriptionInfo"
                    className="alert d-none text-center"
                  ></div>

                  <div className="input-group mb-3 rounded-4">
                    <input
                      type="email"
                      onChange={handleEmailChange}
                      name="email"
                      className="form-control shadow-none bg-white border-end-0"
                      placeholder="Email address"
                    />
                    <span className="input-group-text border-0 p-0">
                      <button
                        className="input-group-text rounded-3 border-3 bg-primary"
                        type="button"
                        aria-label="Subscribe for Newsletter"
                        onClick={handleSubmit}
                      >
                        <i className="text-white fas fa-arrow-right"></i>
                      </button>
                    </span>
                  </div>
                </form>
              </div>
              <p className="text-secondary mb-0">
                Inscrivez vous à notre interface afin de recevoir nos actualités
                les plus pertinentes
              </p>
            </div>
          </div>

          <hr style={{ color: "white" }} />
          <div className="row align-items-center text-center justify-content-center text-md-start">
            <div className="col-lg-4 col-md-6 mt-4 mt-lg-0 text-secondary">
              <small>Copyright © 2023-2024 - Tous droits reservés.</small>
            </div>
            <div className="col-lg-4 col-md-6 text-md-end mt-4 mt-md-0">
              <ul className="list-unstyled list-inline mb-0 social-icons">
                <li className="list-inline-item me-3">
                  <a
                    title="Explorer Facebook Profile"
                    className="text-secondary"
                    href="https://facebook.com/"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item me-3">
                  <a
                    title="Explorer Twitter Profile"
                    className="text-secondary"
                    href="https://twitter.com/"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item me-3">
                  <a
                    title="Explorer Instagram Profile"
                    className="text-secondary"
                    href="https://instagram.com/"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
