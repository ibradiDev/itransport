import React from "react";

const NotFound = () => {
  return (
    <div className="p-0 mx-5 h-50">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="">
          <img
            src="assets/images/errors/error404.png"
            className="w-50"
            alt="Page 404"
          />
        </div>
        <span className="block text-sm text-neutral-800 text-uppercase sm:text-base dark:text-neutral-200 tracking-wider font-medium">
          Désolé! cette page n'existe pas.
        </span>
        <div className="d-flex justify-content-center pt-8">
          <a
            className="nc-Button relative text-uppercase h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6 ttnc-ButtonPrimary disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
            rel="noopener noreferrer"
            href="/"
          >
            RETOUR A L'ACCUEIL
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
