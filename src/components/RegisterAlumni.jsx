import React, { useState } from "react";
import { Form, Button, Container, Alert } from "react-bootstrap";
import axios from "axios";

const RegisterAlumni = () => {
  const [formData, setFormData] = useState({
    amname: "",
    email: "",
    contact: "",
    age: "",
    company: "",
    gender: "",
    deptId: "",
    bid: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/alumni/register", formData);
      setMessage(response.data);
    } catch (error) {
      setMessage("Registration failed!");
    }
  };

  return (
    <Container className="mt-5">
      <h2>Alumni Registration</h2>
      {message && <Alert variant="info">{message}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="amname">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="amname" onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="contact">
          <Form.Label>Contact</Form.Label>
          <Form.Control type="text" name="contact" onChange={handleChange} required />
        </Form.Group>
        <Form.Group controlId="age">
          <Form.Label>Age</Form.Label>
          <Form.Control type="number" name="age" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="company">
          <Form.Label>Company</Form.Label>
          <Form.Control type="text" name="company" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="gender">
          <Form.Label>Gender</Form.Label>
          <Form.Select name="gender" onChange={handleChange}>
            <option>Select...</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">Register</Button>
      </Form>
    </Container>
  );
};

export default RegisterAlumni;
