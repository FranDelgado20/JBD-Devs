import {
  
  Button,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
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
const AccordionComp = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="relative isolate overflow-hidden color-card px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <Row>
        <div
          className="absolute inset-0 -z-10 overflow-hidden"
          data-aos="zoom-out"
        >
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
        <Col lg={6} className="flex justify-center" data-aos="zoom-in">
          <div className="lg:max-w-lg">
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-400 sm:text-4xl">
              ¡Queremos trabajar con vos!
            </h1>

            <div className="mt-5">
              <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg ">
                <Accordion
                  open={open === 1}
                  icon={<Icon id={1} open={open} />}
                  className="mb-2"
                >
                  <AccordionHeader
                    className="border-none fs-4 p-0 text-gray-400"
                    onClick={() => handleOpen(1)}
                  >
                    ¿Tienes una idea en mente?
                  </AccordionHeader>
                  <AccordionBody className="py-2 text-gray-200">
                    ¡Nos encanta escuchar nuevas ideas y convertirlas en
                    realidad! En JBD Devs, estamos aquí para ayudarte a hacer
                    realidad tus sueños digitales. Ya sea que tengas una idea
                    brillante para un sitio web innovador, una aplicación móvil
                    revolucionaria o simplemente una visión que deseas explorar,
                    ¡estamos listos para escucharte!
                  </AccordionBody>
                </Accordion>
                <Accordion
                  open={open === 2}
                  icon={<Icon id={2} open={open} />}
                  className="my-3"
                >
                  <AccordionHeader
                    className=" border-none fs-4 p-0 text-gray-400 text-start"
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
                    className="border-none fs-4 p-0 text-gray-400"
                    onClick={() => handleOpen(3)}
                  >
                    ¡Hagamos que suceda!
                  </AccordionHeader>
                  <div className="flex align-items-center">
                    <AccordionBody className="text-gray-200 py-2">
                      ¡No esperes más! Ponte en contacto con nosotros hoy mismo
                      y descubre cómo podemos colaborar para hacer realidad tus
                      ambiciones digitales.
                      <Link className="  no-underline" to={"/contact"}>
                        <Button
                          variant="outlined"
                          size="sm"
                          className="rounded-full bg-white mt-3"
                        >
                          Contáctanos
                        </Button>
                      </Link>
                     
                    </AccordionBody>
                  </div>
                </Accordion>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="" data-aos="zoom-in-left">
            <img
              className="w-[48rem] max-w-none rounded-xl tamanio-cel sm:w-[57rem] shadow-neutral-800 shadow-2xl img-fluid"
              src="/modelo.png"
              alt=""
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AccordionComp;
