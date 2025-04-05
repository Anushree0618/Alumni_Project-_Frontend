import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AlumniExperiences from "./AlumniExperiences ";
import About from "./About";
import  "../App.css";
import Contact from "./Contact";
import img1 from "../assets/img1.avif";
import img2 from "../assets/img2.avif";
import img3 from "../assets/img3.webp";


const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* Navigation Bar */}
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#">Alumni Event Management System</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About Us</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                            <Button 
                                variant="outline-warning" 
                                className="ms-3"
                                onClick={() => navigate("/login")}
                            >
                                Login
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Hero Section */}



  
    <Carousel fade interval={3000} className="hero-carousel">
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
        <Carousel.Caption>
          <h1>Welcome to the Alumni Network</h1>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second slide" />
        <Carousel.Caption>
          <h1>Stay Connected with Alumni</h1>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />
        <Carousel.Caption>
          <h1>Join Us in Alumni Events</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  


           
            <AlumniExperiences/>
            {/* About Us Section */}
            <About/>
            {/* Contact Section */}
            <Contact/>
        </>
    );
};

export default Home;
