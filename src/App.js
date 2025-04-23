import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Register from "./components/Register";
import AdminDashboard from "./components/AdminDashboard";
import AlumniDashboard from "./components/AlumniDashboard";
import Login from "./components/Login";
import UpcomingEvTable from "./components/UpcomingEvTable";
import EventFeedBack from "./components/EventFeedBack"; // Make sure default export matches!
import UpdateProfile from"./components/UpdateProfile";

import AddDepartment  from "./components/AddDepartment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/alumni-dashboard" element={<AlumniDashboard />} />
        <Route path="/upcoming-events" element={<UpcomingEvTable />} />
        <Route path="/event-feedback" element={<EventFeedBack />} />
        <Route path="/UpdateProfile" element={<UpdateProfile/>}/>
        <Route path="/AddDepartment" element={<AddDepartment/>}/>
      </Routes>
    </Router>
  );
}

export default App;
