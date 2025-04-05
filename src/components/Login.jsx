import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import  "../App.css";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        
        // Simulated login logic
        if (email === "admin@example.com" && password === "admin123") {
            navigate("/admin-dashboard");
        } else if (email === "student@example.com" && password === "student123") {
            navigate("/student-dashboard");
        } else {
            alert("Invalid credentials!");
        }
    };

    return (
        <>
        
       
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card style={{ width: "25rem", padding: "20px" }}>
                <Card.Body>
                    <h2 className="text-center">Login</h2>
                    <Form onSubmit={handleLogin}>
                        <Form.Group controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>
                        {/* hell0 */}
                        <Form.Group controlId="password" className="mt-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        
                        <Button className="mt-4 w-100" variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
        
        </>
    );
};

export default Login;