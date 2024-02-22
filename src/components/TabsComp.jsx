import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
} from "@material-tailwind/react";
import { Col, Row } from "react-bootstrap";

const data = [
  {
    label: "Ifaun",
    value: "Ifaun",
    desc: `IFAUN - Instituto de Medicina: En colaboración con expertos en el campo médico, hemos desarrollado el proyecto IFAUN, un instituto virtual dedicado a la enseñanza de diversas materias relacionadas con la carrera de medicina. Desde anatomía hasta clínica médica, nuestros cursos están diseñados para ofrecer una experiencia educativa completa y actualizada. Con recursos interactivos, clases grabadas y seguimiento del progreso del estudiante, IFAUN es el recurso ideal para estudiantes y profesionales en busca de un aprendizaje dinámico y colaborativo en el campo de la medicina.`,
    img: [
      "/proyectos/Ifaun1.png",
      "/proyectos/Ifaun2.png",
      "/proyectos/Ifaun3.png",
    ],
  },
  {
    label: "Chevronar",
    value: "Chevronar",
    desc: `Chevronar - Repuestos Mecánicos para Automóviles: Presentamos Chevronar, tu destino en línea para la compra de repuestos mecánicos de alta calidad para automóviles. Desde frenos hasta filtros, ofrecemos una amplia gama de productos para mantener tu vehículo en óptimas condiciones. Con nosotros, encontrarás piezas confiables, facilidad de navegación y un servicio al cliente excepcional. Simplifica tus reparaciones y mantenimiento automotriz con nuestros servicios`,
    img: [
      "/proyectos/Chevronar1.png",
      "/proyectos/Chevronar2.png",
      "/proyectos/Chevronar3.png",
    ],
  },
  {
    label: "San Valero",
    value: "San Valero",
    desc: `San Valero - Soluciones en Gabinetes Eléctricos e Instalaciones: Bienvenido a San Valero, tu destino en línea para soluciones eléctricas confiables y de calidad. Ofrecemos una amplia selección de gabinetes eléctricos y productos relacionados para satisfacer tus necesidades de instalación eléctrica. Desde tableros de control hasta componentes de automatización, aquí encontrarás todo lo necesario para tus proyectos eléctricos. Simplifica tus compras y asegura la eficiencia de tus instalaciones con nosotros.`,
    img: [
      "/proyectos/SanValero1.png",
      "/proyectos/SanValero2.png",
      "/proyectos/SanValero3.png",
    ],
  },
];

const TabsComp = () => {
  const [active, setActive] = useState("/proyectos/Ifaun1.png");
  const [activeTab, setActiveTab] = useState("Ifaun");

  const tabChange = (value) => {
    setActiveTab(value);

    if (value === "Ifaun") setActive("/proyectos/Ifaun1.png");
    else if (value === "Chevronar") setActive("/proyectos/Chevronar1.png");
    else if (value === "San Valero") setActive("/proyectos/SanValero1.png");
  };

  return (
    <div className="my-5 w-full">
      <Typography
        variant="h3"
        className="mx-auto w-full !text-gray-400 max-w-4xl text-center mb-4"
      >
        Nuestros proyectos
      </Typography>
      <Tabs value={activeTab}>
        <TabsHeader
          className="text-gray-900 rounded-none border-b border-blue-gray-50 bg-transparent p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => tabChange(value)}
              className={activeTab === value ? "text-gray-50" : "text-gray-400"}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          <Row>
            {data.map(({ value, desc, img }) => (
              <Col key={value} sm={12}>
                <TabPanel value={value}>
                  <div className="color-card p-3 rounded-lg">
                    <Row>
                      <Col lg={6} sm={12} className="mt-2">
                        <div>
                          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl text-center">
                            {value}
                          </h2>
                          <p className="mt-4 text-gray-500 text-justify">
                            {desc}
                          </p>
                        </div>
                      </Col>

                      <Col lg={6} sm={12}>
                        <div className="grid gap-4">
                          <div>
                            <img
                              className="h-auto img-fluid rounded-lg object-cover object-center md:h-[480px]"
                              src={active}
                              alt=""
                            />
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            {img &&
                              img.map((image, index) => (
                                <div key={index}>
                                  <img
                                    onClick={() => setActive(image)}
                                    src={image}
                                    className="w-full cursor-pointer rounded-lg object-cover object-center"
                                    alt={`gallery-image-${index}`}
                                  />
                                </div>
                              ))}
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </TabPanel>
              </Col>
            ))}
          </Row>
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default TabsComp;
