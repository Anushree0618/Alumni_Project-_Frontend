import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// import 'bootstrap/dist/css/bootstrap.min.css';


import AlumniExperiences from "./AlumniExperiences ";
import About from "./About";
import Login from "./Login";
//import  "../App.css";


// import Contact from "./Contact";
// import img1 from "../assets/img1.avif";
// import img2 from "../assets/img2.avif";
// import img3 from "../assets/img3.webp";
import Contact from "./Contact";
import img1 from "../assets/img1.avif";
import img2 from "../assets/img2.avif";
import img3 from "../assets/imgLogo.jpg";



const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            {/* Navigation Bar */}
            
            <Navbar  bg="dark" variant="dark" expand="lg" fixed="top">
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
                                onClick={() => navigate("/login")}>
                            </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Hero Section */}



  
    {/* <Carousel fade interval={3000} className="hero-carousel">
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
    </Carousel> */}
  

  
  {/* <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="src/assets/img7.jpg" class="d-block w-100" alt=""/>
    </div>
    <div class="carousel-item">
      <img src="src/assets/img2.avif" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="src/assets/img1.avif" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}

<Carousel fade interval={3000}>
  <Carousel.Item>
    <img className="d-block w-100" src={img1} alt="First slide" />
    <Carousel.Caption>
      <h3>Welcome to the Alumni Network</h3>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
  <img className="d-block w-100" src={img2} alt="Second slide" />
  <Carousel.Caption className="carousel-caption-top">
    <h3>Stay Connected with Alumni</h3>
  </Carousel.Caption>
</Carousel.Item>

  <Carousel.Item>
    <img className="d-block w-100" src={img3} alt="Third slide" />
    <Carousel.Caption>
      <h3>Join Us in Alumni Events</h3>
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
