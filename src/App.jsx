import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import NavbarComp from "./components/NavbarComp";
import HomePage from "./pages/HomePage";
import NavbarTail from "./components/NavbarTail";
import FooterComp from "./components/FooterComp";
import RoutesViews from "./routes/RoutesViews";
const App = () => {
  return (
    <>
      <Router>
        <div className="App">
          <div>
            <NavbarTail />
            {/* <NavbarComp/> */}
          </div>
          <main className="mainSection">
            <RoutesViews />
          </main>
          <div>
            <FooterComp />
          </div>
        </div>
      </Router>
    </>
  );
};

export default App;
