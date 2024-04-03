import { Button } from "@material-tailwind/react";
import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <Container
      fluid
      className="bg-[url('http://imgfz.com/i/F3PqbDZ.png')] bg-cover bg-center lg:h-screen h-96 d-flex align-items-center justify-center"
    >
      <div className="text-center">
        <img
          src="/error.png"
          alt="Error 404"
          className="mx-auto tamaño-img min-h-full"
        />
        <Link className="text-dark" to={"/"}>
          <Button
            variant="outlined"
            size="sm"
            className="rounded-full bg-white "
          >
            Volver al inicio
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Error404;
