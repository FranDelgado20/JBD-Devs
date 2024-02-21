// import { Card, CardBody, Tooltip, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import {
  Typography,
  Button,
  Accordion,
  AccordionHeader,
  AccordionBody,
  CardBody,
  CardHeader,
  Card,
} from "@material-tailwind/react";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import CardComp from "../components/CardComp";
import { Link } from "react-router-dom";
import TabsComp from "../components/TabsComp";
import AccordionComp from "../components/AccordionComp";
import MarcasComp from "../components/MarcasComp";
// import { useState } from 'react';

const members = [
  {
    img: `/jaime2.png`,
    name: "Santiago Jaime",
    github: "https://github.com/SantiJaime",
  },
  {
    img: `/budemejor.png`,
    name: "Tomás Budeguer",
    github: "https://github.com/TomasBudeguer",
  },
  {
    img: `/dlg.png`,
    name: "Francisco Delgado",
    github: "https://github.com/FranDelgado20",
  },
];
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}
const HomePage = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Container fluid>
        <section className="min-h-screen py-8 px-8 lg:py-28">
          <div className="container mx-auto">
            <div className="mb-16 text-center lg:mb-28">
              <Typography variant="h2" className="!text-gray-500 ">
                ¡Conozca a nuestro equipo!
              </Typography>
              <Typography
                variant="h1"
                className="my-2 !text-2xl lg:!text-4xl !text-gray-500"
              >
                JBD Devs
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto w-full !text-gray-400 max-w-4xl text-justify tamaño-cel"
              >
                Somos un equipo apasionado de desarrolladores web dedicados a
                hacer realidad tus ideas digitales. Con una combinación única de
                creatividad, experiencia y compromiso, estamos aquí para llevar
                tus proyectos al siguiente nivel. En JBD Devs, no solo creamos
                sitios web, creamos experiencias digitales cautivadoras. Desde
                el diseño hasta la implementación, nos esforzamos por brindar
                soluciones innovadoras y funcionales que destaquen en el vasto
                mundo en línea. Nuestra misión es simple: transformar tus
                conceptos en realidad digital. Ya sea que necesites una elegante
                página de presentación, una tienda en línea robusta o una
                aplicación web personalizada, estamos listos para trabajar
                contigo para hacer que tu visión cobre vida. Con un enfoque
                centrado en el cliente y una pasión por la excelencia técnica,
                nos comprometemos a proporcionar resultados excepcionales en
                cada proyecto que emprendemos. Tu satisfacción y éxito son
                nuestra prioridad número uno. ¡Únete a nosotros en el viaje
                hacia la excelencia digital! Estamos emocionados de colaborar
                contigo y llevar tus ideas al mundo en línea.
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto w-full !text-gray-400 max-w-4xl"
              >
                ¡JBD Devs - Donde la creatividad encuentra la tecnología!
              </Typography>
            </div>
            <Row>
              {members.map((props, key) => (
                <CardComp key={key} {...props} />
              ))}
            </Row>
          </div>
        </section>
        <Container fluid>
          <AccordionComp />
        </Container>
        <Container fluid>
          <TabsComp />
        </Container>
        <Container fluid>
          <MarcasComp />
        </Container>
      </Container>
    </>
  );
};

export default HomePage;
