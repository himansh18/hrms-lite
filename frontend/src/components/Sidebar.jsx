import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-dark text-white vh-100 p-3" style={{width:"220px"}}>

      <h4 className="mb-4">HRMS</h4>

      <ul className="nav flex-column">

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/">
            Dashboard
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/employees">
            Employees
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white" to="/attendance">
            Attendance
          </Link>
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;