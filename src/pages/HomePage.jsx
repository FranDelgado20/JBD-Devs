import { Card, CardBody, Tooltip, Typography } from "@material-tailwind/react";
import React from "react";
import { Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";
const HomePage = () => {
  return (
    <>
      <Container fluid>
        
        <Row className="flex justify-center">
          <Card className="w-full max-w-[48rem]   flex-row text-center  ">
            <CardBody className="w-100">
              <Typography variant="h6" color="gray" className="mb-4 uppercase">
                El equipo de JBD Devs.
              </Typography>
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-2"
              ></Typography>
              <Typography color="gray" className="mb-8 font-normal">
                Like so many organizations these days, Autodesk is a company in
                transition. It was until recently a traditional boxed software
                company selling licenses. Yet its own business model disruption
                is only part of the story
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
              <Typography variant="h2" color="gray" className="mt-4 uppercase">
                ¿Tenes un proyecto en mente?
              </Typography>
            </CardBody>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
