

import React from "react";
import { Link } from "react-router-dom"; // ✅ Added import
import "./AlumniDashboar.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/*<aside className="sidebar">
        <h2 className="logo">Alumni Network System</h2>
        <nav>
          <ul>
            <li><Link to="/">🏠 Home</Link></li>
            <li><Link to="/upcoming-events">📅 Upcoming Event</Link></li>
            <li><Link to="/event-feedback">📝 Event Feedback</Link></li>
            <li><Link to="/Update Profile">👤 Update Profile</Link></li>
            <li>🚪 Logout</li>
          </ul>
        </nav>
      </aside>*/}
<aside className="sidebar">
  <h2 className="logo">Alumni Network System</h2>
  <nav>
    <ul>
      <li><a href="/">🏠 Home</a></li>
      <li><a href="/upcoming-events">📅 Upcoming Events</a></li>
      <li><a href="/event-feedback">📝 Event Feedback</a></li>
      <li><a href="/UpdateProfile">👤 Update Profile</a></li>
      <li><a href="/logout">🚪 Logout</a></li>
    </ul>
  </nav>
</aside>

      <main className="main-content">
        <header className="header-bar">
          <h1>Welcome to the Alumni Management System!</h1>
          <p>Stay connected, stay informed, and be engaged with our Alumni Network.</p>
        </header>

        <section className="cards">
          <div className="card">
            <h3>📅 Upcoming Events</h3>
            <p>Check out our upcoming events and activities.</p>
            <Link to="/upcoming-events">
              <button>View Events</button>
            </Link>
          </div>
          
          <div className="card">
            <h3>👤 Update Profile</h3>
            <p>Keep your profile updated with the latest information.</p>
            <Link to="/UpdateProfile">
            <button>Update Now</button>
            </Link>
          </div>

          <div className="card">
            <h3>📝 Feedback</h3>
            <p>We value your feedback! Let us know your thoughts!</p>
            <Link to="/event-feedback">
               <button>Give Feedback</button>
            </Link>
            
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
