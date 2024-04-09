import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";

import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCc6li_k3mpL2aecFJR8rV5Xn_oWaN_Z0c",
  authDomain: "itransport-ci.firebaseapp.com",
  projectId: "itransport-ci",
  storageBucket: "itransport-ci.appspot.com",
  messagingSenderId: "790964066480",
  appId: "1:790964066480:web:1e416fdf3044b911d00375",
  measurementId: "G-9Q6WV1R4T5",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// setAnalyticsCollectionEnabled(analytics, true);
// analytics.app.automaticDataCollectionEnabled = true;

const db = getFirestore(app);

export const addNewMsg = async (msgData) => {
  let contactInfo = document.getElementById("contactInfo");
  await addDoc(collection(db, "messages"), msgData)
    .then((_docRef) => {
      console.info("Done!");
      contactInfo.classList.remove("d-none");
      contactInfo.classList.add("alert-success");
      contactInfo.innerHTML =
        "Merci de nous contacter! votre requête sera bientôt traitée";
      document.getElementById("contactForm").reset();
    })
    .catch((_err) => {
      console.error("Failed!");
      contactInfo.classList.remove("d-none");
      contactInfo.classList.add("alert-danger");
      contactInfo.innerHTML = "Oups! une erreur est survenue";
    });
  setTimeout(() => contactInfo.classList.add("d-none"), 3000);
};

export const addToNewsletters = async (email) => {
  let subscriptionInfo = document.getElementById("subscriptionInfo");
  await addDoc(collection(db, "newsletters"), email)
    .then((_docRef) => {
      console.info("Done!");
      subscriptionInfo.classList.remove("d-none");
      subscriptionInfo.classList.add("alert-success");
      subscriptionInfo.innerHTML =
        "Bravo! vous êtes inscrit à notre newsletter";
      document.getElementById("subscriptionForm").reset();
    })
    .catch((_err) => {
      console.error("Failed!");
      subscriptionInfo.classList.remove("d-none");
      subscriptionInfo.classList.add("alert-danger");
      subscriptionInfo.innerHTML = "Oups! une erreur est survenue";
    });
  setTimeout(() => subscriptionInfo.classList.add("d-none"), 3000);
};

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
