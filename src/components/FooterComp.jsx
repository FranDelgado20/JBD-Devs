import { Col, Container, Row } from "react-bootstrap";
import React from "react";

const FooterComp = () => {
  return (
    <Container fluid className="bg-neutral-900 py-2 ">
      <Row className=" text-neutral-100  align-items-center ">
        <Col sm={6} className="flex justify-center">
          <img src="/11-removebg-preview.png" alt="logo" className="w-48" />
        </Col>
        <Col sm={6} className="flex justify-center my-4">
          <i className="bi bi-linkedin fs-2 mx-3 "></i>
          <i className="bi bi-github fs-2 mx-3 "></i>
          <i className="bi bi-github fs-2 mx-3"></i>
          <i className="bi bi-github fs-2 mx-3"></i>
        </Col>
      </Row>
      <p className="text-center text-neutral-100 mb-0 ">
        © 2024 Your Company, Inc. All rights reserved.
      </p>
    </Container>
  );
};

export default FooterComp;
