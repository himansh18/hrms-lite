import api from "../api";

function EmployeeList({ employees, fetchEmployees }) {

  const deleteEmployee = async (id) => {
    try {
      await api.delete(`employees/${id}/`);
      fetchEmployees();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="card shadow-sm mt-4">

      <div className="card-body">

        <h4 className="mb-3">Employee List</h4>

        <div className="table-responsive">

          <table className="table table-striped table-hover align-middle">

            <thead className="table-dark">
              <tr>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {employees.length > 0 ? (
                employees.map((emp) => (
                  <tr key={emp.id}>
                    <td>{emp.employee_id}</td>
                    <td>{emp.full_name}</td>
                    <td>{emp.email}</td>
                    <td>{emp.department}</td>

                    <td className="text-center">
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deleteEmployee(emp.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center text-muted">
                    No Employees Found
                  </td>
                </tr>
              )}
            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default EmployeeList;