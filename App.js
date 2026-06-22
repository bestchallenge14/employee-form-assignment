import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './App.css';
import EmployeeForm from './components/EmployeeForm';

// Week 4: Employee List Component
function EmployeeList(props) {
  // Render the employee list
  return (
    <div className="employee-list">
      <h1>Employee List</h1>
      <ul>
        {props.employees.map((employee) => (
          <li key={employee.EmployeeId}>
            {/* Create a link to the employee detail page */}
            <Link to={`/employees/${employee.EmployeeId}`}>
              {employee.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Main App Component
function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Retrieve data from local storage when the component loads
    const storedEmployees = localStorage.getItem('employees');
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    }
  }, []);

  const saveData = (newEmployeesArray) => {
    // Convert the array to a string and save it
    localStorage.setItem('employees', JSON.stringify(newEmployeesArray));
  };

  const addEmployee = (newEmployee) => {
    // Add the new employee to the list and save it
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    saveData(updatedEmployees);
  };

  return (
    <Router>
      <div className="App">
        {/* Pass the addEmployee function as a prop to the form */}
        <EmployeeForm addEmployee={addEmployee} />
        
        {/* Display the Employee List */}
        <EmployeeList employees={employees} />
      </div>
    </Router>
  );
}

export default App;