import React from "react";
import { Container, Spinner } from "react-bootstrap";
import Image from "react-bootstrap/Image";
const PantallaDeCarga = () => {
  return (
    <Container
      fluid
      className="text-center d-flex justify-content-center align-items-center vh-100 bg-neutral-950"
    >
      <div>
        <Image
          src="/11-removebg-preview.png"
          fluid
          className="breathing-image mt-5"
        />
        <Spinner animation="border" />
      </div>
    </Container>
  );
};

export default PantallaDeCarga;
