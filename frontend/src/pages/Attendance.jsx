import { useState } from "react";
import AttendanceForm from "../components/AttendanceForm";
import AttendanceList from "../components/AttendanceList";
import DashboardLayout from "../Layout/DashboardLayout";

function Attendance() {

  const [refreshFlag, setRefreshFlag] = useState(false);

  // Trigger refresh after attendance added
  const handleAttendanceAdded = () => {
    setRefreshFlag(prev => !prev);
  };

  return (
    <DashboardLayout>

      <div className="container mt-4">

        <h2>Attendance</h2>

        {/* Attendance Form */}
        <AttendanceForm onAttendanceAdded={handleAttendanceAdded} />

        {/* Attendance Table */}
        <AttendanceList refreshFlag={refreshFlag} />

      </div>

    </DashboardLayout>
  );
}

export default Attendance;