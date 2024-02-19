import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import AboutUsPage from "../pages/AboutUsPage";
import Error404 from "../pages/Error404";
const RoutesViews = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/aboutus" element={<AboutUsPage />} />
      <Route path="/error404" element={<Error404 />} />
    </Routes>
  );
};

export default RoutesViews;
