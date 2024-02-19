// import React from 'react'

// const ContactPage = () => {
//   return (
//     <>
//     {/* <div className="container mx-auto ">

//       <figure className="bg-slate-100 rounded-xl p-8 w-80 dark:bg-slate-800 shadow-2xl " >
//         <img
//           className="w-32 h-32 rounded-full mx-auto"
//           src="/yo-removebg-preview.png"
//           alt=""

//           />
//         <div className="pt-6 text-center space-y-4">
//           <blockquote>
//             <p className="text-lg font-medium text-orange-600 ">
//               “Me llamo mejai y formo parte de JBD DEVS y HACETE CULIA PICHON.”
//             </p>
//           </blockquote>
//           <figcaption className="font-medium">
//             <div className="text-sky-500 dark:text-sky-400">Santiago Jaime</div>
//             <div className="text-slate-700 dark:text-slate-500">
//               Tafi Viejo, Tucumán
//             </div>
//           </figcaption>
//         </div>
//       </figure>
//           </div> */}
//     </>
//   )
// }

// export default ContactPage

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import { Col, Row, Container } from "react-bootstrap";

export function ContactPage() {
  return (
    <Container fluid className="text-white">
      <Row className="justify-content-around mb-5">
        <Col lg={3} md={4} sm={12} className="mt-5">
          <Card className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center">
            <CardHeader className="absolute inset-0 m-0 h-full w-full rounded-none bg-neutral-900 bg-cover bg-center">
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-14 px-6 md:px-12">
              <Typography
                variant="h6"
                color="white"
                className="mb-6 font-medium leading-[1.5]"
              >
                Soy estudiante de Medicina de la UNT y estoy cursando el 4°año
                de la carrera. Decidí adentrarme dentro del mundo de la
                Programación Web ya que me parece un campo de estudio muy amplio
                e interesante y que aportara muchas aptitudes a mi vida laboral
                debido al gran avance de la tecnología en estos últimos años.
              </Typography>
              <Typography variant="h5" className="mb-4 text-gray-400">
                Francisco Delgado
              </Typography>
              <div className="d-flex justify-center">
                <Avatar
                  size="xl"
                  variant="circular"
                  alt="dlg"
                  className="border-2 border-white"
                  src="/dlg.png"
                />
              </div>
            </CardBody>
          </Card>
        </Col>

        <Col lg={3} md={4} sm={12} className="mt-5">
          <Card className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center border">
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
              <Typography variant="h5" className=" text-gray-400">
                Francisco Delgado
              </Typography>
              <Avatar
                size="xl"
                variant="circular"
                alt="tania andrew"
                className="border-2 border-white bg-black mx-auto"
                src="/dlg.png"
              />
            </CardBody>
          </Card>
        </Col>

        <Col lg={3} md={4} sm={12} className="mt-5">
          <Card className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center">
            <CardHeader className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center">
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-14 px-6 md:px-12">
              <Typography
                variant="h2"
                color="white"
                className="mb-6 font-medium leading-[1.5]"
              >
                How we design and code open-source projects?
              </Typography>
              <Typography variant="h5" className="mb-4 text-gray-400">
                Tania Andrew
              </Typography>
              <Avatar
                size="xl"
                variant="circular"
                alt="tania andrew"
                className="border-2 border-white"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactPage;
