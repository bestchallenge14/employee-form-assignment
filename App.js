import React, { useState, useEffect } from 'react';
import EmployeeForm from './components/EmployeeForm';
// Corrected path to point inside the components folder
import './components/EmployeeForm.css'; 

function EmployeeList(props) {
  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <ul>
        {props.employees.map((employee) => (
          <li key={employee.EmployeeId} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px', marginBottom: '10px' }}>
            <span style={{ fontSize: '1.1em', fontWeight: 'bold' }}>
              {employee.name}
            </span>
            <button 
              onClick={() => props.deleteEmployee(employee.EmployeeId)}
              style={{ padding: '4px 8px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem('employees');
    if (savedData) {
      setEmployees(JSON.parse(savedData));
    }
  }, []);

  const addEmployee = (newEmployee) => {
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  const deleteEmployee = (idToDelete) => {
    const updatedEmployees = employees.filter((employee) => employee.EmployeeId !== idToDelete);
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
  };

  return (
    <div className="App">
      <EmployeeForm addEmployee={addEmployee} />
      <EmployeeList employees={employees} deleteEmployee={deleteEmployee} />
    </div>
  );
}

export default App;