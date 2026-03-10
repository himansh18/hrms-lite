import { useEffect, useState } from "react";
import api from "../api";

function AttendanceList({ refreshFlag }) {

  const [attendance, setAttendance] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 10;

  useEffect(() => {

    const fetchAttendance = async () => {
      try {
        const res = await api.get("attendance/");
        setAttendance(res.data);
      } catch (error) {
        console.error("Error fetching attendance:", error);
      }
    };

    fetchAttendance();

  }, [refreshFlag]);

  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = attendance.slice(indexOfFirstRow, indexOfLastRow);

  const totalPages = Math.ceil(attendance.length / rowsPerPage);

  return (
    <div className="card shadow-sm mt-4">

      <div className="card-body">

        <h4 className="mb-3">Attendance Records</h4>

        <div className="table-responsive">

          <table className="table table-striped table-hover align-middle">

            <thead className="table-dark">
              <tr>
                <th>Employee</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {currentRows.length > 0 ? (
                currentRows.map((a) => (
                  <tr key={a.id}>
                    <td>{a.employee_name}</td>
                    <td>{a.date}</td>

                    <td>
                      <span
                        className={`badge rounded-pill px-3 py-2 ${
                          a.status === "Present"
                            ? "bg-success"
                            : a.status === "Absent"
                            ? "bg-danger"
                            : "bg-secondary"
                        }`}
                      >
                        {a.status}
                      </span>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="text-center text-muted">
                    No Attendance Records Found
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

        {/* Pagination */}

        {totalPages > 1 && (
          <div className="d-flex justify-content-between align-items-center mt-3">

            <button
              className="btn btn-outline-secondary btn-sm"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </button>

            <span>
              Page {currentPage} of {totalPages}
            </span>

            <button
              className="btn btn-outline-secondary btn-sm"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>

          </div>
        )}

      </div>

    </div>
  );
}

export default AttendanceList;