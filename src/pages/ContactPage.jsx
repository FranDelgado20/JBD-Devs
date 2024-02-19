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
        </Col>

      
      </Row>
    </Container>
  );
}

export default ContactPage;
