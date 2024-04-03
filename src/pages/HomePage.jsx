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
  const [primerParr, setPrimerParr] = useState(true);

  const cambiarParrUno = () => setPrimerParr(true);
  const cambiarParrDos = () => setPrimerParr(false);

  return (
      <Container fluid>
        <section className="min-h-screen py-8 px-8">
          <div className="d-flex justify-center" data-aos="zoom-in">
            <Breadcrumbs
              className="rounded-full bg-gradient-to-tr color-card justify-center p-2"
              separator={<span className="text-white ">/</span>}
            >
              <a
                href="#cardsMembers"
                className="rounded-full bg-neutral-100 px-3 py-1 font-medium text-gray-900 no-underline bread transition hover:bg-neutral-700 hover:text-neutral-100"
              >
                Nosotros
              </a>
              <a
                href="#union"
                className="rounded-full bg-neutral-100 px-3 py-1 font-medium text-gray-900 no-underline bread transition hover:bg-neutral-700 hover:text-neutral-100"
              >
                Juntos
              </a>
              <a
                href="#proyectos"
                className="rounded-full bg-neutral-100 px-3 py-1 font-medium text-gray-900 no-underline bread transition hover:bg-neutral-700 hover:text-neutral-100"
              >
                Proyectos
              </a>
            </Breadcrumbs>
          </div>

          <div className="container mx-auto">
            <div className="mb-8 text-center lg:mb-28" data-aos="zoom-in-down">
              <h2 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-gray-600 md:text-5xl lg:text-6xl lg:max-w-7xl">
                ¡Conozca a nuestro equipo!
              </h2>
              <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-gray-600 md:text-5xl lg:text-5xl lg:max-w-7xl">
                JBD Devs
              </h1>
              {primerParr ? (
                <Typography
                  variant="lead"
                  className="mx-auto w-full font-bold !text-gray-400 max-w-4xl text-justify tamaño-cel"
                >
                  Somos un equipo apasionado de desarrolladores web dedicados a
                  hacer realidad tus ideas digitales. Con una combinación única
                  de creatividad, experiencia y compromiso, estamos aquí para
                  llevar tus proyectos al siguiente nivel. En JBD Devs, no solo
                  creamos sitios web, creamos experiencias digitales
                  cautivadoras. Desde el diseño hasta la implementación, nos
                  esforzamos por brindar soluciones innovadoras y funcionales
                  que destaquen en el vasto mundo en línea. Nuestra misión es
                  simple: transformar tus conceptos en realidad digital.
                </Typography>
              ) : (
                <Typography
                  variant="lead"
                  className="mx-auto w-full font-bold !text-gray-400 max-w-4xl text-justify tamaño-cel"
                >
                  Ya sea que necesites una elegante página de presentación, una
                  tienda en línea robusta o una aplicación web personalizada,
                  estamos listos para trabajar contigo para hacer que tu visión
                  cobre vida. Con un enfoque centrado en el cliente y una pasión
                  por la excelencia técnica, nos comprometemos a proporcionar
                  resultados excepcionales en cada proyecto que emprendemos. Tu
                  satisfacción y éxito son nuestra prioridad número uno. ¡Únete
                  a nosotros en el viaje hacia la excelencia digital! Estamos
                  emocionados de colaborar contigo y llevar tus ideas al mundo
                  en línea.
                </Typography>
              )}
              <h1 className="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-gray-400 md:text-5xl lg:text-2xl lg:max-w-7xl mb-3">
                ¡JBD Devs - Donde la creatividad encuentra la tecnología!
              </h1>
              {primerParr ? (
                <nav aria-label="Breadcrumb" className="flex justify-center">
                  <ol className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600">
                    <li className="flex items-center">
                      <button
                        onClick={cambiarParrUno}
                        className=" flex h-10 items-center gap-1.5 bg-gray-100 px-4 transition text-neutral-900  -ms-8 hover:text-neutral-900 "
                      >
                        <span className=" text-s font-bold"> JBD </span>
                      </button>
                    </li>

                    <li className="relative flex items-center">
                      <span className="absolute inset-y-0 -start-px h-10 w-4 bg-gray-100 [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180"></span>

                      <button
                        onClick={cambiarParrDos}
                        className="flex text- h-10 items-center bg-neutral-950 pe-4 ps-8 text-s font-bold transition text-neutral-100 hover:text-neutral-400"
                      >
                        Devs
                      </button>
                    </li>
                  </ol>
                </nav>
              ) : (
                <nav aria-label="Breadcrumb" className="flex justify-center">
                  <ol className="flex overflow-hidden rounded-lg border border-gray-200 text-gray-600">
                    <li className="flex items-center ">
                      <button
                        onClick={cambiarParrUno}
                        className=" flex h-10 items-center gap-1.5 px-4 transition -ms-8 bg-neutral-950 text-neutral-100  hover:text-neutral-400 "
                      >
                        <span className=" text-s font-bold"> JBD </span>
                      </button>
                    </li>

                    <li className="relative flex items-center">
                      <span className="absolute inset-y-0 -start-px h-10 w-4 bg-neutral-950  [clip-path:_polygon(0_0,_0%_100%,_100%_50%)] rtl:rotate-180 transition"></span>

                      <button
                        onClick={cambiarParrDos}
                        className="flex  h-10 items-center bg-gray-100 pe-4 ps-8 text-s font-bold transition   hover:text-neutral-100 text-black"
                      >
                        Devs
                      </button>
                    </li>
                  </ol>
                </nav>
              )}
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
  );
};

export default HomePage;
