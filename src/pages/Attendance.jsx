import "../Styles/Attendance.css";
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import API from "../api/Studentapi";
import AAPI from "../api/Attendanceapi";
function Attendance() {
  const [attendance, setAttendance] = useState([]);
  const fetchStudents = async () => {
    try {
      const res = await API.get("/");
      console.log(res.data);
      setAttendance(
        res.data.data.map((student) => ({
          ...student,
          status: "Present",
        })),
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleStatusChange = (id, status) => {
    setAttendance((prev) =>
      prev.map((student) =>
        student._id === id ? { ...student, status } : student,
      ),
    );
  };

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <Sidebar />
        <main className="main-content">
          <div className="attendance-header">
            <h1>Attendance</h1>
            <button classanme="save-btn">Save Attendance</button>
          </div>
          <input
            type="text"
            className="attendance-search"
            placeholder="Students Name.."
          />
          <table className="attendance-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll No</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {attendance.map((student) => (
                <tr key={student._id}>
                  <td>{student.name}</td>
                  <td>{student.rollNo}</td>
                  <td>
                    <label>
                      <input
                        type="radio"
                        name={student._id}
                        checked={student.status === "Present"}
                        onChange={() =>
                          handleStatusChange(student._id, "Present")
                        }
                      />
                      Present
                    </label>

                    <span className="empty_span"></span>

                    <label>
                      <input
                        type="radio"
                        name={student._id}
                        checked={student.status === "Absent"}
                        onChange={() =>
                          handleStatusChange(student._id, "Absent")
                        }
                      />
                      Absent
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </>
  );
}

export default Attendance;
