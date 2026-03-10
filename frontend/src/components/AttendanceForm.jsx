import { useState, useEffect } from "react";
import api from "../api";

function AttendanceForm({ onAttendanceAdded }) {

  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState("");
  const [status, setStatus] = useState("Present");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch employees
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await api.get("employees/");
        setEmployees(res.data);
      } catch (err) {
        console.error("Error fetching employees:", err);
        alert("Failed to load employees.");
      }
    };

    fetchEmployees();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!employee || !date) {
      alert("Please select employee and date");
      return;
    }

    const payload = {
      employee: Number(employee),
      date: date,
      status: status
    };

    try {

      setLoading(true);

      await api.post("attendance/", payload);

      alert("Attendance marked successfully ✅");

      // Trigger parent refresh
      if (onAttendanceAdded) {
        onAttendanceAdded();
      }

      // Reset form
      setEmployee("");
      setDate("");
      setStatus("Present");

    } catch (err) {

      console.error("Attendance API Error:", err);

      if (err.response?.data?.non_field_errors) {
        alert(err.response.data.non_field_errors[0]);
      }
      else if (err.response?.data?.date) {
        alert(err.response.data.date[0]);
      }
      else {
        alert("Something went wrong while marking attendance.");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded bg-light">

      <h4 className="mb-3">Mark Attendance</h4>

      {/* Employee */}
      <div className="mb-3">
        <label className="form-label">Employee</label>

        <select
          className="form-control"
          value={employee}
          onChange={(e) => setEmployee(e.target.value)}
        >

          <option value="">Select Employee</option>

          {employees.map((emp) => (
            <option key={emp.id} value={emp.id}>
              {emp.full_name}
            </option>
          ))}

        </select>
      </div>

      {/* Date */}
      <div className="mb-3">
        <label className="form-label">Date</label>

        <input
          type="date"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      {/* Status */}
      <div className="mb-3">
        <label className="form-label">Status</label>

        <select
          className="form-control"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >

          <option value="Present">Present</option>
          <option value="Absent">Absent</option>

        </select>
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        disabled={loading}
      >
        {loading ? "Saving..." : "Mark Attendance"}
      </button>

    </form>
  );
}

export default AttendanceForm;