
import React from "react";
import "./AlumniDashboar.css"; // Optional: reuse the same CSS

const UpcomingEvents = () => {
  const events = []; // You can fetch data later

  return (
    <div className="upcoming-events-container">
      <h2 className="table-title">Upcoming Event Table</h2>
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
            
          <tr>
            <th>Sr.No.</th>
            <th>Name</th>
            <th>Location</th>
            <th>Date</th>
            <th>Time</th>
            <th>DeptId</th>
          </tr>
        </thead>
        <tbody>
          {events.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center">No upcoming events.</td>
            </tr>
          ) : (
            events.map((event, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{event.name}</td>
                <td>{event.location}</td>
                <td>{event.date}</td>
                <td>{event.time}</td>
                <td>{event.deptId}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UpcomingEvents;
