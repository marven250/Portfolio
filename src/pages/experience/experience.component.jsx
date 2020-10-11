import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import VIVINTLOGO from "../../assets/img/experience/Vivint.png";
import REVATURE from "../../assets/img/experience/RevatureNoBack.png";
import TRILOGY from "../../assets/img/experience/TrilogyNoBack.png";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
     
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={TRILOGY}
                  alt="Trilogy Logo"
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Instructor</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">
                      Teaching Assistant
                    </strong>
                    <br />
                    <strong>Role:</strong> Student Support
                    <br />
                    <strong>Description:</strong> <u>Explained </u>
                    all aspects of web development: HTML, CSS, JavaScript, MERN
                    stack, Version Control (git), Deployment, etc.
                    <br />
                    <br />
                    <strong>Duration:</strong> Mar 2020 - Present
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>

      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={REVATURE}
                  alt="Revature Logo"
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    Associate Software Engineer
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">
                      Full Stack Developer
                    </strong>
                    <br />
                    <strong>Role:</strong> Back-end & Front-End Support
                    <br />
                    <strong>Description:</strong> <u>Collaborated</u> with
                    colleagues throughout all phases of the software development
                    lifecycle, and <u>Developed</u> Software Applications to
                    meet client demands.
                    <br />
                    <br />
                    <strong>Duration:</strong> April 2020 - August 2020
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>

      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header
                as="h5"
                className="d-flex justify-content-center flex-wrap"
              >
                <Card.Img
                  variant="top"
                  className="img-resize"
                  src={VIVINTLOGO}
                  alt="Vivint Logo"
                />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">
                    Sales Representative
                  </Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">
                      Customer Service representative
                    </strong>
                    <br />
                    <strong>Role:</strong> Customer Support
                    <br />
                    <strong>Description:</strong>
                    <u>Operated</u> as a dynamic sales professional who utilized
                    premier communication skills to effectively build value on
                    company products, and <u> Provided </u>
                    outstanding customer service and sales support to over 80
                    new and existing clients to help promote good brand image
                    <br />
                    <br />
                    <strong>Duration:</strong> Mar 2017 - April 2018
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
