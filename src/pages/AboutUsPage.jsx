import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Button,
  Tooltip,
  CardFooter,
} from "@material-tailwind/react";

const AboutUsPage = () => {
  return (
    <Container fluid className="my-4 text-white">
      {/* <Row className="justify-content-around mb-5">
      </Row> */}
      {/* <Col lg={3} md={4} sm={12} className="mt-5">
          <Card className="relative grid h-[40rem] w-full max-w-[28rem] align-items-center justify-center overflow-hidden text-center border">
            <CardHeader className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://img.freepik.com/vector-gratis/fondo-abstracto-negro-vector_1340-8573.jpg?w=1480&t=st=1708315430~exp=1708316030~hmac=a46ad2db8b6991cd27327246ded462985bb1236539e35f95b5560bdc0d1605d2')] bg-cover bg-center">
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-10 px-6 md:px-12">
              <Typography
                variant="h6"
                color="white"
                className=" font-medium leading-[1.5]"
              >
               Hola! Soy Santiago Agustín Jaime y tengo 20 años. En el año
                  2021 hice el ingreso a la carrera de Medicina, quedando afuera
                  por un punto. Luego, en el año 2022 decidí optar por irme a
                  otra carrera la cual tenía cosas que me interesaban:
                  Ingeniería en Sistemas, puesto que me encanta todo lo
                  relacionado a la computación. Sin embargo, al cursar durante
                  todo ese año me di cuenta que la mayoría de materias me
                  disgustaban, excepto una: programación. Tras realizar el curso
                  de FullStack en Rolling Code, hoy quiero dedicarme a esta
                  entretenida y desafiante rama del mundo de la tecnología
              </Typography>
              <Typography variant="h4" className=" text-gray-400">
              Santiago Agustín Jaime
              </Typography>
              <Avatar
                size="xl"
                variant="circular"
                alt="tania andrew"
                className=" w-44 mx-auto"
                src="/jaime.png"
              />
            </CardBody>
          </Card>
        </Col>
        <Col lg={3} md={4} sm={12} className="mt-5">
          <Card className="relative grid h-[40rem] w-full max-w-[28rem] align-items-center justify-center overflow-hidden text-center border">
            <CardHeader className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://img.freepik.com/vector-gratis/fondo-abstracto-negro-vector_1340-8573.jpg?w=1480&t=st=1708315430~exp=1708316030~hmac=a46ad2db8b6991cd27327246ded462985bb1236539e35f95b5560bdc0d1605d2')] bg-cover bg-center">
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-10 px-6 md:px-12">
              <Typography
                variant="h6"
                color="white"
                className=" font-medium leading-[1.5]"
              >
              VAMO LO SANTO
              </Typography>
              <Typography variant="h4" className=" text-gray-400">
              Tomás Agustín Budeguer
              </Typography>
              <Avatar
                size="xl"
                variant="circular"
                alt="tania andrew"
                className=" w-44 mx-auto"
                src="/bude.png"
              />
            </CardBody>
          </Card>
        </Col>
        <Col lg={3} md={4} sm={12} className="mt-5">
          <Card className="relative grid h-[40rem] w-full max-w-[28rem] align-items-center justify-center overflow-hidden text-center border">
            <CardHeader className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://img.freepik.com/vector-gratis/fondo-abstracto-negro-vector_1340-8573.jpg?w=1480&t=st=1708315430~exp=1708316030~hmac=a46ad2db8b6991cd27327246ded462985bb1236539e35f95b5560bdc0d1605d2')] bg-cover bg-center">
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-10 px-6 md:px-12">
              <Typography
                variant="h6"
                color="white"
                className=" font-medium leading-[1.5]"
              >
                Soy estudiante de Medicina de la UNT y estoy cursando el 4°año
                de la carrera. Decidí adentrarme dentro del mundo de la
                Programación Web ya que me parece un campo de estudio muy amplio
                e interesante y que aportara muchas aptitudes a mi vida laboral
                debido al gran avance de la tecnología en estos últimos años.
              </Typography>
              <Typography variant="h4" className=" text-gray-400">
                Francisco Delgado
              </Typography>
              <Avatar
                size="xl"
                variant="circular"
                alt="tania andrew"
                className=" w-44 mx-auto"
                src="/dlg.png"
              />
            </CardBody>
          </Card>
        </Col> */}
<Row className="flex justify-center">

      <Card className="w-full max-w-[48rem]   flex-row text-center  ">
        <CardBody className="w-100">
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            El equipo de JBD Devs.
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            Like so many organizations these days, Autodesk is a company in
            transition. It was until recently a traditional boxed software
            company selling licenses. Yet its own business model disruption is
            only part of the story
          </Typography>
          <a href="#" className=" justify-center flex">
            <div className="flex ">
              <Tooltip content="Santiago Jaime">
                <img
                  className="rounded-full w-20"
                  alt="tania andrew"
                  src="/jaime.png"
                  />
              </Tooltip>
              <Tooltip content="Tomás Budeguer">
                <img
                  className="rounded-full w-20 mx-10"
                  alt="tania andrew"
                  src="/bude.png"
                  />
              </Tooltip>
              <Tooltip content="Francisco Delgado">
                <img
                  className="rounded-full w-20 img-fluid"
                  alt="tania andrew"
                  src="/dlg.png"
                  />
              </Tooltip>
            </div>
          </a>
        </CardBody>
      </Card>
                  </Row>
    </Container>
  );
};

export default AboutUsPage;
