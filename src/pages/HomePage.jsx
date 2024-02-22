// import { Card, CardBody, Tooltip, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Typography, Breadcrumbs } from "@material-tailwind/react";
import CardComp from "../components/CardComp";
import TabsComp from "../components/TabsComp";
import AccordionComp from "../components/AccordionComp";
import MarcasComp from "../components/MarcasComp";

const members = [
  {
    img: `/nosotros/jaime.png`,
    name: "Santiago Jaime",
    github: "https://github.com/SantiJaime",
  },
  {
    img: `/nosotros/bude.png`,
    name: "Tomás Budeguer",
    github: "https://github.com/TomasBudeguer",
  },
  {
    img: `/nosotros/dlg.png`,
    name: "Francisco Delgado",
    github: "https://github.com/FranDelgado20",
  },
];

const HomePage = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Container fluid>
        <section className="min-h-screen py-8 px-8 lg:py-28">
          <div className="d-flex justify-center">
            <Breadcrumbs
              className="rounded-full bg-gradient-to-tr color-card justify-center p-2"
              separator={<span className="text-white ">/</span>}
            >
              <a
                href="#cardsMembers"
                className="rounded-full bg-white px-3 py-1 font-medium text-gray-900 no-underline bread"
              >
                Nosotros
              </a>
              <a
                href="#union"
                className="rounded-full bg-white px-3 py-1 font-medium text-gray-900 no-underline bread"
              >
                Juntos
              </a>
              <a
                href="#proyectos"
                className="rounded-full bg-white px-3 py-1 font-medium text-gray-900 no-underline bread"
              >
                Proyectos
              </a>
            </Breadcrumbs>
          </div>

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

            <Row id="cardsMembers">
              {members.map((props, key) => (
                <CardComp key={key} {...props} />
              ))}
            </Row>
          </div>
        </section>
        <div id="union">
          <AccordionComp />
        </div>
        <div id="proyectos">
          <TabsComp />
        </div>
        <MarcasComp />
      </Container>
    </>
  );
};

export default HomePage;
