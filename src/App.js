// App.js
import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, CardBody, CardTitle, CardText, CardImg, Navbar, NavbarBrand, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const services = [
  { title: 'Plumbing', description: 'Fixing leaks, installing pipes, and more.', image: 'images/plumbing.jpg' },
  { title: 'Electrical', description: 'Wiring, lighting, and electrical repairs.', image: 'images/electriction.jpeg' },
  { title: 'Carpentry', description: 'Building, repairing, and custom woodworking.', image: 'images/carpenter.jpg' },
  { title: 'Painting', description: 'Interior and exterior painting services.', image: 'images/painting.jpeg' },
];

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Navbar  color="dark" dark expand="md">
        <Container>
          <NavbarBrand href="/">Handyman Services</NavbarBrand>
          <div className='ml-auto '>
          <NavbarToggler onClick={toggle} />
          </div>
          
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#faq">F.A.Q</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#sample-work">Sample Work</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>

      {/* Landing Section */}
      <Container>
        <section id="home" className="landing-section my-5">
          <Row className="align-items-center">
            <Col md="6">
              <img src="images/main.png" alt="Handyman Services" className="img-fluid" />
            </Col>
            <Col md="6" className="text-center">
              <h1 className="display-4">Welcome to Handyman Services</h1>
              <p className="lead">Your one-stop solution for home repairs and improvements</p>
              <Button color="primary" size="lg">Get Started</Button>
            </Col>
          </Row>
        </section>
     
        {/* Services Section */}
        <section className="services-section mb-5">
          <h2 className='h2s'>Our Services</h2>
          <Row>
            {services.map((service, index) => (
              <Col md="3" key={index} className="mb-4">
                <Card>
                  <CardImg top width="100%" src={service.image} alt={service.title} />
                  <CardBody>
                    <CardTitle tag="h5">{service.title}</CardTitle>
                    <CardText>{service.description}</CardText>
                    <Button color="primary">Learn More</Button>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </section>
      </Container>
     
     

      {/* Footer */}
      <footer className="footer text-center py-4">
        <Container>
          <Row>
            <Col>
              <p>&copy; 2024 Handyman Services. All rights reserved.</p>
              <p>Email: <a href="mailto:info@handymanservices.com">info@handymanservices.com</a></p>
              <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default App;


