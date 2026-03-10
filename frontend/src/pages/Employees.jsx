import { useEffect, useState } from "react";
import api from "../api";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
import DashboardLayout from "../Layout/DashboardLayout";

function Employees() {

  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    try {
      const response = await api.get("employees/");
      setEmployees(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <DashboardLayout>

      <div className="container mt-4">
        <h1>Employee Management</h1>

        <EmployeeForm fetchEmployees={fetchEmployees} />

        <EmployeeList
          employees={employees}
          fetchEmployees={fetchEmployees}
        />
      </div>

    </DashboardLayout>
  );
}

export default Employees;