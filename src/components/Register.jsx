import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [logintype, setLogintype] = useState("STUDENT");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8080/api/auth/register", { username, password, email, contact, logintype });
            alert("Registration successful! Please login.");
            navigate("/");
        } catch (error) {
            alert("Registration failed!");
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="text" placeholder="Contact" value={contact} onChange={(e) => setContact(e.target.value)} />
                <select value={logintype} onChange={(e) => setLogintype(e.target.value)}>
                    <option value="STUDENT">Student</option>
                    <option value="ADMIN">Admin</option>
                </select>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
