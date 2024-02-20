import {
  Avatar,
  Card,
  CardBody,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { Col } from "react-bootstrap";

const CardComp = ({ img, name }) => {
  return (
    <Col lg={4} className="">
      <div className="rounded-lg  color-card "  shadow={false}>
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
         
          <div className=" ">
          <button>

            <i className="bi bi-github text-white fs-1"></i>
          </button>
            
          
          </div>
        </CardBody>
      </div>
    </Col>
  );
};

export default CardComp;
