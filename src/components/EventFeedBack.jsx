import React, { useState } from 'react';
import './EventFeedBack.css'; // Make sure the CSS file exists and is named correctly

const FeedbackForm = () => {
  const [event, setEvent] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!email.trim()) validationErrors.email = "Alumni Email is required";
    if (!message.trim()) validationErrors.message = "Feedback Message is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // TODO: Replace with actual submission logic
    console.log('Submitted:', { event, email, message });

    // Reset form
    setEvent('');
    setEmail('');
    setMessage('');
    setErrors({});
  };

  return (
    <div className="feedback-form-container">
      <h2>Add Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Select Event</label>
          <select value={event} onChange={(e) => setEvent(e.target.value)}>
            <option value="">Select Event</option>
            <option value="Event 1">Event 1</option>
            <option value="Event 2">Event 2</option>
            <option value="Event 3">Event 3</option>
          </select>
        </div>

        <div className="form-group">
          <label>Alumni Email <span className="required">*</span></label>
          <input
            type="email"
            placeholder="Enter Alumni Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label>Feedback Message <span className="required">*</span></label>
          <textarea
            placeholder="Give Feedback Here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>

        <button type="submit" className="submit-button">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
