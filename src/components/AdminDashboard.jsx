import React from 'react';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminDashboard() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-dark text-white p-3 vh-100" style={{ width: '250px' }}>
        <h5 className="text-center mb-4">Menu</h5>
        <nav className="nav flex-column">

          <Link to="/home" className="nav-link text-white">🏠 Home</Link>

          {/* Department Dropdown */}
          <div className="dropdown">
            <button className="btn btn-dark dropdown-toggle w-100 text-start" type="button" data-bs-toggle="dropdown">
              🏢 Department
            </button>

            <ul className="dropdown-menu dropdown-menu-dark">
              <li><Link className="dropdown-item" to="/add-department">Add Department</Link></li>
              <li><Link className="dropdown-item" to="/view-department">View Department</Link></li>
            </ul>
          </div>

          {/* Alumni Dropdown */}
          <div className="dropdown mt-2">
            <button className="btn btn-dark dropdown-toggle w-100 text-start" type="button" data-bs-toggle="dropdown">
              👥 Alumni
            </button>

            <ul className="dropdown-menu dropdown-menu-dark">
              <li><Link className="dropdown-item" to="/add-alumni">Add Alumni</Link></li>
            </ul>
          </div>

          {/* Event Dropdown */}
          <div className="dropdown mt-2">
            <button className="btn btn-dark dropdown-toggle w-100 text-start" type="button" data-bs-toggle="dropdown">
              📅 Event
            </button>

            <ul className="dropdown-menu dropdown-menu-dark">
              <li><Link className="dropdown-item" to="/add-event">Add Event</Link></li>
              <li><Link className="dropdown-item" to="/view-event">View Event</Link></li>
            </ul>
          </div>

          {/* Alumni View */}
          <Link to="/alumni-view" className="nav-link text-white mt-2">🔍 View Alumni</Link>

          {/* Feedback */}
          <Link to="/feedback" className="nav-link text-white mt-2">💬 View Feedback</Link>

          {/* Logout */}
          <Link to="/logout" className="nav-link text-white mt-2">🚪 Logout</Link>
        </nav>
      </div>

      {/* Main Content */}
      {/* <div className="p-4" style={{ flex: 1 }}>
        <h2 className="text-primary text-center">Welcome to the Admin Dashboard!</h2>
        <p className="text-center">Stay connected, stay informed, and be engaged with our Alumni Network.</p>

        <div className="row text-center mt-4">
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">All Events</h5>
                <p className="card-text">Check out all our events and activities</p>
                <Link to="/view-event" className="btn btn-primary">View Events</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">All Alumni</h5>
                <p className="card-text">View all alumni information</p>
                <Link to="/alumni-view" className="btn btn-primary">View Alumni</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title">Feedback</h5>
                <p className="card-text">Let us know your thoughts!</p>
                <Link to="/feedback" className="btn btn-primary">View Feedback</Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="p-4" style={{ flex: 1 }}>
      <h2 className="text-center vibrant-title">Welcome to the Admin Dashboard!</h2>
      <p className="text-center">Empowering alumni connections and insights.</p>

  {/* Centered Card Section */}
  <div className="container">
  <div className="row justify-content-center text-center mt-3">
    {/* Card 1 */}
    <div className="col-md-7 mb-2">
      <div className="card shadow h-100">
        <div className="card-body">
          <h5 className="card-title">All Events</h5>
          <p className="card-text">Check out all our events and activities</p>
          {/* <Link to="/view-event" className="btn btn-primary">View Events</Link> */}
          <Link to="/view-event" className="btn custom-event-btn">View Events</Link>

        </div>
      </div>
    </div>

    {/* Card 2 */}
    <div className="col-md-7 mb-2">
      <div className="card shadow h-100">
        <div className="card-body">
          <h5 className="card-title">All Alumni</h5>
          <p className="card-text">View all alumni information</p>
          {/* <Link to="/alumni-view" className="btn btn-primary">View Alumni</Link> */}
          <Link to="/alumni-view" className="btn custom-alumni-btn">View Alumni</Link>
        </div>
      </div>
    </div>

    {/* Card 3 */}
    <div className="col-md-7 mb-2">
      <div className="card shadow h-100">
        <div className="card-body">
          <h5 className="card-title">Feedback</h5>
          <p className="card-text">Let us know your thoughts!</p>
          {/* <Link to="/feedback" className="btn btn-primary">View Feedback</Link> */}
          <Link to="/feedback" className="btn custom-feedback-btn">View Feedback</Link>

        </div>
      </div>
    </div>

  </div>
</div>

  


</div>

    </div>
  );
}

export default AdminDashboard;
