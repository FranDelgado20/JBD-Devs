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
// import { useState } from 'react';

const members = [
  {
    img: `/jaime2.png`,
    name: "Santiago Jaime",
    github: "https://github.com/SantiJaime",
  },
  {
    img: `/bude.png`,
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
          {/* <div className="relative isolate overflow-hidden color-card px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <svg
                className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-500 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                    width={200}
                    height={200}
                    x="50%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M100 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <svg x="50%" y={-1} className="overflow-visible fill-gray-500">
                  <path
                    d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                    strokeWidth={0}
                  />
                </svg>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
                />
              </svg>
            </div>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:max-w-lg">
                 
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-400 sm:text-4xl">
                    ¡Queremos trabajar con vos
                  </h1>
                </div>
              </div>
              <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                <img
                  className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                  src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                  alt=""
                />
              </div>
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                
                  <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg -mt-20">
                    <Accordion
                      open={open === 1}
                      icon={<Icon id={1} open={open} />}
                      className="mb-2"
                    >
                      <AccordionHeader
                        className="fs-4 p-0 text-gray-400"
                        onClick={() => handleOpen(1)}
                      >
                        ¿Tienes una idea en mente?
                      </AccordionHeader>
                      <AccordionBody className="py-2 text-gray-200">
                        ¡Nos encanta escuchar nuevas ideas y convertirlas en
                        realidad! En JBD Devs, estamos aquí para ayudarte a
                        hacer realidad tus sueños digitales. Ya sea que tengas
                        una idea brillante para un sitio web innovador, una
                        aplicación móvil revolucionaria o simplemente una visión
                        que deseas explorar, ¡estamos listos para escucharte!
                      </AccordionBody>
                    </Accordion>
                    <Accordion
                      open={open === 2}
                      icon={<Icon id={2} open={open} />}
                      className="my-3"
                    >
                      <AccordionHeader
                        className="fs-4 p-0 text-gray-400"
                        onClick={() => handleOpen(2)}
                      >
                        ¿Listo para dar el primer paso?
                      </AccordionHeader>
                      <AccordionBody className="py-2 text-gray-300">
                        ¡Nos encantaría conocer más sobre tu idea! No importa si
                        es solo un esbozo en una servilleta o una visión clara y
                        detallada, estamos aquí para ayudarte a darle vida.
                      </AccordionBody>
                    </Accordion>
                    <Accordion
                      open={open === 3}
                      icon={<Icon id={3} open={open} />}
                      className="mt-2"
                    >
                      <AccordionHeader
                        className="fs-4 p-0 text-gray-400"
                        onClick={() => handleOpen(3)}
                      >
                        ¡Hagamos que suceda!
                      </AccordionHeader>
                      <div className="flex align-items-center">
                        <AccordionBody className="text-gray-200 py-2">
                          ¡No esperes más! Ponte en contacto con nosotros hoy
                          mismo y descubre cómo podemos colaborar para hacer
                          realidad tus ambiciones digitales.
                          <Link className=" ms-3 no-underline" to={"/contact"}>
                            <Button
                              variant="outlined"
                              size="sm"
                              className="rounded-full bg-white "
                            >
                              Contáctanos
                            </Button>
                          </Link>
                          <hr />
                        </AccordionBody>
                      </div>
                    </Accordion>
                  </div>
                
              </div>
            </div>
          </div> */}
          <AccordionComp/>
        </Container>
        {/* <Container fluid className="w-100  flex justify-center text-gray-400">
          
          <Card className=" flex-row rounded">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-2/5 shrink-0 "
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody className="color-card">
            <Typography
                variant="h3"
                className="mx-auto w-full text-center !text-gray-400 max-w-4xl"
              >
              ¡Queremos trabajar con vos!
              </Typography>
              <Accordion
                open={open === 1}
                icon={<Icon id={1} open={open} />}
                className="mb-2"
              >
                <AccordionHeader
                  className="fs-4 p-0 text-gray-400"
                  onClick={() => handleOpen(1)}
                >
                  ¿Tienes una idea en mente?
                </AccordionHeader>
                <AccordionBody className="py-2 text-gray-200">
                  ¡Nos encanta escuchar nuevas ideas y convertirlas en realidad!
                  En JBD Devs, estamos aquí para ayudarte a hacer realidad tus
                  sueños digitales. Ya sea que tengas una idea brillante para un
                  sitio web innovador, una aplicación móvil revolucionaria o
                  simplemente una visión que deseas explorar, ¡estamos listos
                  para escucharte!
                </AccordionBody>
              </Accordion>
              <Accordion
                open={open === 2}
                icon={<Icon id={2} open={open} />}
                className="my-3"
              >
                <AccordionHeader
                  className="fs-4 p-0 text-gray-400"
                  onClick={() => handleOpen(2)}
                >
                  ¿Listo para dar el primer paso?
                </AccordionHeader>
                <AccordionBody className="py-2 text-gray-300">
                  ¡Nos encantaría conocer más sobre tu idea! No importa si es
                  solo un esbozo en una servilleta o una visión clara y
                  detallada, estamos aquí para ayudarte a darle vida.
                </AccordionBody>
              </Accordion>
              <Accordion
                open={open === 3}
                icon={<Icon id={3} open={open} />}
                className="mt-2"
              >
                <AccordionHeader
                  className="fs-4 p-0 text-gray-400"
                  onClick={() => handleOpen(3)}
                >
                  ¡Hagamos que suceda!
                </AccordionHeader>
                <div className="flex align-items-center">
                  <AccordionBody className="text-gray-200 py-2">
                    ¡No esperes más! Ponte en contacto con nosotros hoy mismo y
                    descubre cómo podemos colaborar para hacer realidad tus
                    ambiciones digitales.
                    <Link className=" ms-3 no-underline" to={"/contact"}>
                      <Button
                        variant="outlined"
                        size="sm"
                        className="rounded-full bg-white "
                      >
                        Contáctanos
                      </Button>
                    </Link>
                    <hr />
                    
                  </AccordionBody>
                </div>
              </Accordion>
              <div className="  py-24 sm:py-32">
         
          </div>
            </CardBody>
          </Card>
          
        </Container> */}
        <Container fluid>
          <TabsComp />
        </Container>
        <Container fluid>
          <div className="  py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-center text-lg font-semibold leading-8 text-gray-400">
                Tecnologías utilizadas
              </h2>
              <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                <img
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="https://logos-world.net/wp-content/uploads/2023/08/React-Symbol.png"
                  alt="Transistor"
                  width={158}
                  height={48}
                />
                <img
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="/tailwind-removebg-preview.png"
                  alt="Reform"
                  width={158}
                  height={48}
                />
                <img
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                  src="https://react-bootstrap.netlify.app/img/logo.svg"
                  alt="Tuple"
                  width={158}
                  height={48}
                />
                <img
                  className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bootstrap-5-logo-icon.png"
                  alt="SavvyCal"
                  width={158}
                  height={48}
                />
                <img
                  className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                  src="https://www.material-tailwind.com/image/logo-mt.png"
                  alt="Statamic"
                  width={158}
                  height={48}
                />
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default HomePage;
