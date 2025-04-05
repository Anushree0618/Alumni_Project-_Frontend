import React from 'react'
import { Navbar, Nav, Container, Button } from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
const Contact = () => {
  return (
    <section id="contact" className="py-5 text-center">
    <Container>
        <h2>Contact Us</h2>
        <p className="lead">Have questions or need assistance? Reach out to us!</p>
        <p>Email: support@alumninetwork.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>Address: 123 Alumni Street, City, Country</p>
    </Container>
</section>
  )
}

export default Contact