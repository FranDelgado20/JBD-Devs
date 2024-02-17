import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const AboutUsPage = () => {
  return (
    <Container className="my-4 text-white">
      <Row>
        {/* <Col lg={12} md={12} sm={12}>
          <h3 className="text-center">
            Tukson Pets - Clínica veterinaria 🐶 🐱 💉
          </h3>
          <hr />
          <p>
            Tukson Pets es la página dedicada a la clínica veterinaria del mismo
            nombre, ubicada en San Miguel de Tucumán, Tucumán, Argentina.
            Nosotros nos comprometemos a cuidar de tu mascota como se merece.
            ¡Traela y deja que disfrute nuestros servicios! ¡Gracias por confiar
            en nosotros!
          </p>
        </Col> */}
          <h3>El equipo de JDB Devs</h3>
          <hr />
        <Col lg={12} md={12} sm={12} className="my-3 bg-Aboutus py-3 rounded-lg">
          <Row>
            <Col lg={2} md={6} sm={12} className="flex justify-center marginImg">
              <img src="/jaime.png" alt="Imagen Jaime" className="img-fluid" />
            </Col>
            <Col lg={10} md={6} sm={12}>
              <h4 className="mt-2">Santiago Agustín Jaime</h4>
              <hr />
              <p>
                Hola! Soy Santiago Agustín Jaime y tengo 20 años. En el año 2021
                hice el ingreso a la carrera de Medicina, quedando afuera por un
                punto. Luego, en el año 2022 decidí optar por irme a otra
                carrera la cual tenía cosas que me interesaban: Ingeniería en
                Sistemas, puesto que me encanta todo lo relacionado a la
                computación. Sin embargo, al cursar durante todo ese año me di
                cuenta que la mayoría de materias me disgustaban, excepto una:
                programación. Tras realizar el curso de FullStack en Rolling
                Code, hoy quiero dedicarme a esta entretenida y desafiante rama
                del mundo de la tecnología
              </p>
              <div className="text-center mb-2">
                <a
                  className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-full text-sm px-4 py-2.5 text-center no-underline"
                  href="https://github.com/SantiJaime"
                  target="_blank"
                >
                  <i className="bi bi-github"></i> Github
                </a>
              </div>
            </Col>
          </Row>
        </Col>
          <hr />
        <Col lg={12} md={12} sm={12} className="my-3 bg-Aboutus py-3 rounded-lg">
          <Row>
            <Col lg={2} md={6} sm={12} className="flex justify-center marginImg">
              <img src="/bude.png" alt="Imagen Bude" className="img-fluid" />
            </Col>
            <Col lg={10} md={6} sm={12}>
              <h4 className="mt-2">Tomás Agustín Budeguer</h4>
              <hr />
              <p>Hola soy budito y vamo lo SANTO URA</p>
              <div className="text-center mb-2">
                <a
                  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-full text-sm px-4 py-2.5 text-center no-underline"
                  href="https://github.com/TomasBudeguer"
                  target="_blank"
                >
                  <i className="bi bi-github"></i> Github
                </a>
              </div>
            </Col>
          </Row>
        </Col>
          <hr />
        <Col lg={12} md={12} sm={12} className="my-3 bg-Aboutus py-3 rounded-lg">
          <Row>
            <Col lg={2} md={6} sm={12} className="flex justify-center marginImg">
              <img src="/dlg.png" alt="Imagen Dlg" className="img-fluid" />
            </Col>
            <Col lg={10} md={6} sm={12}>
              <h4 className="mt-2">Francisco Delgado</h4>
              <hr />
              <p>
                Soy estudiante de Medicina de la UNT y estoy cursando el 3°año
                de la carrera. Decidí adentrarme dentro del mundo de la
                Programación Web ya que me parece un campo de estudio muy amplio
                e interesante y que aportara muchas aptitudes a mi vida laboral
                debido al gran avance de la tecnología en estos últimos años.
              </p>
              <div className="text-center mb-2">
                <a
                  className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-full text-sm px-4 py-2.5 text-center no-underline"
                  href="https://github.com/FranDelgado20"
                  target="_blank"
                >
                  <i className="bi bi-github"></i> Github
                </a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUsPage;
