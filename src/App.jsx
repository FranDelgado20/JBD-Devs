import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesViews from "./routes/RoutesViews";
import "aos/dist/aos.css";
import Aos from "aos";
import PantallaDeCarga from "./components/PantallaDeCarga"; // Asegúrate de que la ruta sea correcta
import NavbarTail from "./components/NavbarTail";
import FooterComp from "./components/FooterComp";

const App = () => {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCargando(false);
    }, 3000);

    Aos.init({ duration: 1800, once: true });
  }, []);

  return (
    <>
      <Router>
        {cargando ? (
          <PantallaDeCarga />
        ) : (
          <div className="App">
            <NavbarTail />
            <main className="mainSection bg-neutral-950">
              <RoutesViews />
            </main>
            <FooterComp />
          </div>
        )}
      </Router>
    </>
  );
};

export default App;
