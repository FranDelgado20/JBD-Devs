import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavbarTail from "./components/NavbarTail";
import FooterComp from "./components/FooterComp";
import RoutesViews from "./routes/RoutesViews";
import "aos/dist/aos.css";
import Aos from "aos";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1800, once: true });
  }, []);
  return (
    <>
      <Router>
        <div className="App">
          <NavbarTail />
          <main className="mainSection bg-neutral-950	">
            <RoutesViews />
          </main>
          <FooterComp />
        </div>
      </Router>
    </>
  );
};

export default App;
