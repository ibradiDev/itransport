import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  document.title = "iTransport - contact";
  return (
    <div className="container-fluid">
      <div className="mb-5">
        <h1 className="my-5 d-flex align-items-center fw-bold justify-content-center">
          Contact
        </h1>
        <div className="container py-3 px-0">
          <div className="row justify-content-between">
            <div className="col-lg-4">
              <div className="mb-4">
                <h3 className="text-uppercase font-weight-bold fs-6 text-dark">
                  🗺 ADDRESSE
                </h3>
                <span className="d-block mt-2 text-muted">
                  Retrouvez-nous en Côte d'Ivoire dans les villes d'
                  <i>Abidjan</i> ,<i>Yamoussoukro</i> et <i>Toumodi</i>.
                </span>
              </div>
              <div className="mb-4">
                <h3 className="text-uppercase font-weight-bold fs-6 text-dark">
                  💌 E-MAIL
                </h3>
                <span className="d-block mt-2 text-muted">
                  support@itransport.com
                </span>
              </div>
              <div className="mb-4">
                <h3 className="text-uppercase font-weight-bold fs-6 text-dark">
                  ☎ TELEPHONE
                </h3>
                <span className="d-block mt-2 text-muted">
                  +225 05-55-39-14-99
                </span>
              </div>
              <div>
                <h3 className="text-uppercase font-weight-bold fs-6 text-dark">
                  🌏 RESEAU SOCIAUX
                </h3>
                <nav className="d-flex col-5 justify-content-between fs-4 text-muted mt-2">
                  <Link
                    className="d-block text-muted"
                    to="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Facebook"
                  >
                    <i className="fab fa-facebook"></i>
                  </Link>
                  <Link
                    className="d-block text-muted"
                    to="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Twitter"
                  >
                    <i className="fab fa-twitter"></i>
                  </Link>
                  <Link
                    className="d-block text-muted"
                    to="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Youtube"
                  >
                    <i className="fab fa-youtube"></i>
                  </Link>
                  <Link
                    className="d-block text-muted"
                    to="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>
                </nav>
              </div>
            </div>
            <div className="col-lg-6">
              <form action="#" method="post">
                <div className="mb-3">
                  <label
                    htmlFor="fullName"
                    className="form-label fw-medium  text-sm font-weight-bold text-dark"
                  >
                    Nom & Prénom
                  </label>
                  <input
                    id="fullName"
                    className="form-control w-100 rounded-4 text-sm h-11"
                    placeholder="(ex): John Doe"
                    type="text"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="form-label fw-medium  text-sm font-weight-bold text-dark"
                  >
                    Adresse E-mail
                  </label>
                  <input
                    id="email"
                    className="form-control w-100 rounded-4 text-sm h-11"
                    placeholder="(ex): example@example.com"
                    type="email"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="message"
                    className="form-label fw-medium  text-sm font-weight-bold text-dark"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="form-control w-100 rounded-4 text-sm"
                    rows={6}
                    placeholder="Entrez le contenu de votre message"
                    defaultValue={""}
                  />
                </div>
                <div>
                  <button
                    className="btn btn-primary rounded-5 text-sm sm:text-base font-weight-bold px-4 py-2"
                    type="submit"
                  >
                    Envoyer <i className="fab fa-telegram-plane ml-2"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
