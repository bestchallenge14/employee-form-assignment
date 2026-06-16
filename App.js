import React, { useState, useEffect } from 'react';
import './App.css';
import EmployeeForm from './components/EmployeeForm';

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
    <div className="App">
      {/* Pass the addEmployee function as a prop to the form */}
      <EmployeeForm addEmployee={addEmployee} />
    </div>
  );
}

export default App;