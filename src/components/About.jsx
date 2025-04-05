import React from 'react'
import { Navbar, Nav, Container, Button } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  return (
    <section id="about" className="py-5  text-center">
                <Container>
                    <h2>About Us</h2>
                    <p className="lead">We are a dedicated platform that connects alumni, providing opportunities to network, share experiences, and stay updated on events.</p>
                    <p>Our goal is to foster a strong alumni community that supports both personal and professional growth.</p>
                </Container>
            </section>

  )
}

export default About