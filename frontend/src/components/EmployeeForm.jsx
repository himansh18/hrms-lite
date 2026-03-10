import { useState } from "react";
import api from "../api";

function EmployeeForm({ fetchEmployees }) {

  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [employee_id, setEmployeeId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("employees/", {
        full_name: full_name,
        email: email,
        department: department,
        employee_id: employee_id
      });

      fetchEmployees();

      setFullName("");
      setEmail("");
      setDepartment("");
      setEmployeeId("");

    } catch (error) {
      console.error(error);
    }
  };

  return (

    
    <div className="card shadow-sm p-4 mb-4">

      <form onSubmit={handleSubmit}>

        {/* 🔵 CHANGE 2: Improved heading style */}
        <h4 className="mb-3">Add Employee</h4>

        <input
          className="form-control mb-3"   
          placeholder="Full Name"
          value={full_name}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <input
          className="form-control mb-3"
          placeholder="Employee ID"
          value={employee_id}
          onChange={(e) => setEmployeeId(e.target.value)}
          required
        />

        <input
          className="form-control mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="form-control mb-3"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />

      
        <button className="btn btn-success w-100">
          Add Employee
        </button>

      </form>

    </div>
  );
}

export default EmployeeForm;