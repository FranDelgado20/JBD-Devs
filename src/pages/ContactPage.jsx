// import {
//   Card,
//   CardHeader,
//   CardBody,
//   Typography,
//   Avatar,
// } from "@material-tailwind/react";
// import { Col, Row, Container } from "react-bootstrap";

// export function ContactPage() {
//   return (
//     <Container fluid className="text-white">
//       <Row className="justify-content-around mb-5">
//         <Col lg={3} md={4} sm={12} className="mt-5">
//           <Card className="relative grid h-[40rem] w-full max-w-[28rem] align-items-center justify-center overflow-hidden text-center border">
//             <CardHeader className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://img.freepik.com/vector-gratis/fondo-abstracto-negro-vector_1340-8573.jpg?w=1480&t=st=1708315430~exp=1708316030~hmac=a46ad2db8b6991cd27327246ded462985bb1236539e35f95b5560bdc0d1605d2')] bg-cover bg-center">
//               <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
//             </CardHeader>
//             <CardBody className="relative py-10 px-6 md:px-12">
//               <Typography
//                 variant="h6"
//                 color="white"
//                 className=" font-medium leading-[1.5]"
//               >
//                 Soy estudiante de Medicina de la UNT y estoy cursando el 4°año
//                 de la carrera. Decidí adentrarme dentro del mundo de la
//                 Programación Web ya que me parece un campo de estudio muy amplio
//                 e interesante y que aportara muchas aptitudes a mi vida laboral
//                 debido al gran avance de la tecnología en estos últimos años.
//               </Typography>
//               <Typography variant="h4" className=" text-gray-400">
//                 Francisco Delgado
//               </Typography>
//               <Avatar
//                 size="xl"
//                 variant="circular"
//                 alt="tania andrew"
//                 className=" w-44 mx-auto"
//                 src="/dlg.png"
//               />
//             </CardBody>
//           </Card>
//         </Col>

//       </Row>
//     </Container>
//   );
// }

// export default ContactPage;
import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Formik } from "formik";
import { errorComment } from "../utils/validationSchema";
import { useCountries } from "use-react-countries";
import {
  Input,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const ContactPage = () => {
  const { countries } = useCountries();

  const countriesToShow = [
    "Argentina",
    "Brazil",
    "Chile",
    "Spain",
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Ecuador",
    "Peru",
    "Colombia",
    "Mexico",
    "Uruguay",
  ];

  const filteredCountries = countries.filter((country) =>
    countriesToShow.includes(country.name)
  );

  const argentinaIndex = filteredCountries.findIndex(
    (country) => country.name === "Argentina"
  );

  const [country, setCountry] = useState(
    argentinaIndex !== -1 ? argentinaIndex : 0
  );

  const { name, flags, countryCallingCode } = filteredCountries[country];

  const sendComment = async ({ nombre, email, tel, msg }) => {
    try {
      if (isNaN(tel) || !tel) tel = "No asignado";
      else tel = countryCallingCode + tel;

      const templateParams = {
        from_name: nombre,
        from_email: email,
        from_tel: tel,
        message: msg,
      };
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );
      Swal.fire({
        icon: "success",
        title: "Mensaje enviado correctamente",
        text: "Nos pondremos en contacto lo más pronto posible",
        showConfirmButton: false,
        timer: 2500,
        background: "#15181a",
        color: "#FFFF",
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "No se pudo enviar el mensaje",
        text: "Inténtalo nuevamente en unos instantes",
        showConfirmButton: false,
        timer: 2500,
        background: "#15181a",
        color: "#FFFF",
      });
    }
  };

  return (
    <Container className="my-4">
      <Row>
        <Col md={6} sm={12} data-aos="fade-right">
          <figcaption className="font-medium mt-24">
            <div className="dark:text-slate-300 fs-3">
              Tu consulta no molesta
            </div>
            <p className="text-slate-700 dark:text-slate-500">
              Rellena el formulario, y próximamente uno de nosotros se pondrá en
              contacto. También puedes escribirnos a través de nuestro correo
              electrónico
            </p>
          </figcaption>
          <div className="d-flex justify-center mt-4" data-aos="fade-right">
            <a
              href="mailto:jbddevs@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="w-75 bg-gray-800 rounded p-2 no-underline text-white border hover:bg-gray-700 transition"
            >
              <div className="rounded-3">
                <div className="text-center">
                  <Row className="flex-column">
                    <Col>
                      <i className="bi bi-envelope fs-2"></i>{" "}
                    </Col>
                    <Col>
                      <div className="fs-6 ">jbddevs@gmail.com</div>
                    </Col>
                  </Row>
                </div>
              </div>
            </a>
          </div>
        </Col>
        <Col md={6} sm={12}>
          <Formik
            initialValues={{
              email: "",
              nombre: "",
              tel: "",
              msg: "",
            }}
            onSubmit={(values) => sendComment(values)}
            validationSchema={errorComment}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => (
              <form className="max-w-md mx-auto mt-24" data-aos="fade-left">
                <div className="relative z-0 w-full mb-4 group input-container">
                  <input
                    data-aos="fade-left"
                    type="email"
                    name="email"
                    id="floating_email"
                    value={values.email}
                    onChange={handleChange}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-neutral-50 focus:outline-none focus:ring-0 focus:border-neutral-50 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_email"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:dark:text-neutral-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Correo electrónico
                  </label>
                  <small className="text-danger">
                    {errors.email && touched.email && errors.email}
                  </small>
                </div>
                <div className="relative z-0 w-full mb-4 group">
                  <input
                    data-aos="fade-left"
                    type="text"
                    name="nombre"
                    id="floating_name"
                    onChange={handleChange}
                    value={values.nombre}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-neutral-50 focus:outline-none focus:ring-0 focus:border-neutral-50 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_name"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:dark:text-neutral-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Nombre y apellido
                  </label>
                  <small className="text-danger">
                    {errors.nombre && touched.nombre && errors.nombre}
                  </small>
                </div>
                <div className="relative z-0 w-full mb-4 group flex">
                  <Menu placement="bottom-start">
                    <MenuHandler>
                      <Button
                        ripple={false}
                        variant="text"
                        color="blue-gray"
                        className="relative items-center -ms-6  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6  top-7 -z-10 origin-[0] d-flex"
                      >
                        <img
                          src={flags.svg}
                          alt={name}
                          className="h-4 w-4 rounded-full object-cover"
                        />
                        {countryCallingCode}
                      </Button>
                    </MenuHandler>
                    <MenuList className="max-h-[20rem] max-w-[18rem] border-0 bg-neutral-950 text-gray-500">
                      {filteredCountries.map(
                        ({ name, flags, countryCallingCode }, index) => (
                          <MenuItem
                            key={name}
                            value={name}
                            className="flex items-center gap-2"
                            onClick={() => setCountry(index)}
                          >
                            <img
                              src={flags.svg}
                              alt={name}
                              className="h-5 w-5 rounded-full object-cover"
                            />
                            {name}
                            <span className="ml-auto">
                              {countryCallingCode}
                            </span>
                          </MenuItem>
                        )
                      )}
                    </MenuList>
                  </Menu>
                  <input
                    data-aos="fade-left"
                    type="text"
                    name="tel"
                    id="floating_tel"
                    onChange={handleChange}
                    value={values.tel}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-neutral-50 focus:outline-none focus:ring-0 focus:border-neutral-50 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_tel"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:dark:text-neutral-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 d-flex justify-content-end"
                  >
                    <div className="ms-16">Número de teléfono (Opcional)</div>
                  </label>
                </div>
                <small className="text-danger">
                  {errors.tel && touched.tel && errors.tel}
                </small>
                <div className="relative z-0 w-full mb-4 mt-4 group">
                  <textarea
                    data-aos="fade-left"
                    rows={4}
                    name="msg"
                    id="floating_textarea"
                    onChange={handleChange}
                    value={values.msg}
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-neutral-50 focus:outline-none focus:ring-0 focus:border-neutral-50 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_textarea"
                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:dark:text-neutral-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Mensaje
                  </label>
                  <small className="text-danger">
                    {errors.msg && touched.msg && errors.msg}
                  </small>
                </div>
                <div className="text-end">
                  <button
                    data-aos="fade-left"
                    type="submit"
                    onClick={handleSubmit}
                    className="text-white bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
