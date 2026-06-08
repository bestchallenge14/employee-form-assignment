import React, { Component } from 'react';
import './EmployeeForm.css';

class EmployeeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      jobTitle: '',
      department: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('New Employee Added:', this.state);
    this.setState({ name: '', email: '', jobTitle: '', department: '' });
  }

  render() {
    return (
      <div className="employee-form">
        <h2>Add New Employee</h2>
        <form onSubmit={this.handleSubmit}>
          
          <label>Name:</label>
          <input 
            type="text" 
            name="name" 
            value={this.state.name} 
            onChange={this.handleChange} 
            required 
          />

          <label>Email:</label>
          <input 
            type="email" 
            name="email" 
            value={this.state.email} 
            onChange={this.handleChange} 
            required 
          />

          <label>Job Title:</label>
          <input 
            type="text" 
            name="jobTitle" 
            value={this.state.jobTitle} 
            onChange={this.handleChange} 
            required 
          />

          <label>Department:</label>
          <input 
            type="text" 
            name="department" 
            value={this.state.department} 
            onChange={this.handleChange} 
            required 
          />

          <button type="submit">Add Employee</button>
        </form>
      </div>
    );
  }
}

export default EmployeeForm;