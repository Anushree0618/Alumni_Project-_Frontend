
import React, { useState } from 'react';
import './AddDepartment.css'; 

const AddDepartment = () => {
  const [departmentName, setDepartmentName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!departmentName.trim()) {
      alert('Please enter a department name');
      return;
    }
    // TODO: Handle department submission logic here (API call etc.)
    alert(`Department "${departmentName}" added successfully!`);
    setDepartmentName('');
  };

  return (
    <div className="add-department-container">
      <form onSubmit={handleSubmit} className="add-department-form">
        <h2>Add Department</h2>
        <label htmlFor="deptName">Department Name: <span className="required">*</span></label>
        <input
          id="deptName"
          type="text"
          placeholder="Enter department name"
          value={departmentName}
          onChange={(e) => setDepartmentName(e.target.value)}
        />
        <button type="submit">Add Department</button>
      </form>
    </div>
  );
};

export default AddDepartment;
