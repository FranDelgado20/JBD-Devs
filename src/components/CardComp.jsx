import {
  Avatar,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { Col } from "react-bootstrap";

const CardComp = ({ img, name, github }) => {
  return (
    <>

    
    {name === "Santiago Jaime" ? <>
    <Col lg={4} className="">
      <div className="rounded-lg color-card"  data-aos="zoom-in">
        <CardBody className="text-center mx-auto my-3 ">
          <Avatar
            src={img}
            alt={name}
            className="mx-auto mb-6 object-top rounded-full w-44 tamaño-img-cel "
          />
          <Typography
            variant="h5"
            color="blue-gray"
            className="!font-medium text-lg text-gray-400 "
          >
            {name}
          </Typography>

          <div>
            <a
              className="text-slate-50 hover:text-slate-500 transition"
              href={github}
              target="_blank"
            >
              <i className="bi bi-github fs-1"></i>
            </a>
          </div>
        </CardBody>
      </div>
    </Col>
    </> : name === "Francisco Delgado" ? <>
    <Col lg={4} className="">
      <div className="rounded-lg color-card"  data-aos="zoom-in">
        <CardBody className="text-center mx-auto my-3 ">
          <Avatar
            src={img}
            alt={name}
            className="mx-auto mb-6 object-top rounded-full w-44 tamaño-img-cel "
          />
          <Typography
            variant="h5"
            color="blue-gray"
            className="!font-medium text-lg text-gray-400 "
          >
            {name}
          </Typography>

          <div>
            <a
              className="text-slate-50 hover:text-slate-500 transition"
              href={github}
              target="_blank"
            >
              <i className="bi bi-github fs-1"></i>
            </a>
          </div>
        </CardBody>
      </div>
    </Col>
    </> : <>
    <Col lg={4} className="">
      <div className="rounded-lg color-card"  data-aos="zoom-in">
        <CardBody className="text-center mx-auto my-3 ">
          <Avatar
            src={img}
            alt={name}
            className="mx-auto mb-6 object-top rounded-full w-44 tamaño-img-cel "
          />
          <Typography
            variant="h5"
            color="blue-gray"
            className="!font-medium text-lg text-gray-400 "
          >
            {name}
          </Typography>

          <div>
            <a
              className="text-slate-50 hover:text-slate-500 transition"
              href={github}
              target="_blank"
            >
              <i className="bi bi-github fs-1"></i>
            </a>
          </div>
        </CardBody>
      </div>
    </Col>
    </>}
    </>
  );
};

export default CardComp;
