import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>HRMS Dashboard</h1>

      <div style={{ marginTop: "20px" }}>
        <Link to="/employees">Manage Employees</Link>
      </div>

      <div style={{ marginTop: "10px" }}>
        <Link to="/attendance">Manage Attendance</Link>
      </div>
    </div>
  );
}

export default Dashboard;