import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import AHAPI from "../api/Attendanceapi";

function AttendanceHistory() {
  const [records, setRecords] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const fetchAttendance = async () => {
    try {
      const res = await AHAPI.get("/");
      setRecords(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAttendance();
  }, []);

  const filteredRecords = records.filter((record) => {
    const matchesSearch = record.student?.name
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesDate = selectedDate === "" || record.date === selectedDate;

    const matchesDepartment =
      selectedDepartment === "" ||
      record.student?.department === selectedDepartment;

    return matchesSearch && matchesDate && matchesDepartment;
  });

  return (
    <>
      <Navbar />

      <div className="dashboard-container">
        <Sidebar />

        <main className="main-content">
          <h1>Attendance History</h1>

          <div className="attendance-filters">
            <input
              type="text"
              placeholder="Search Student..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />

            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              <option value="">All Departments</option>
              <option value="CSE">CSE</option>
              <option value="ECE">ECE</option>
              <option value="ME">ME</option>
              <option value="CE">CE</option>
            </select>
          </div>
          <table className="attendance-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll No</th>
                <th>Department</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredRecords.map((record) => (
                <tr key={record._id}>
                  <td>{record.student?.name}</td>
                  <td>{record.student?.rollNo}</td>
                  <td>{record.student?.department}</td>
                  <td>{record.date}</td>
                  <td>{record.status}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2>Attendance Percentage</h2>

          <table className="attendance-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll No</th>
                <th>Percentage</th>
              </tr>
            </thead>

            <tbody>
              {Object.values(
                records.reduce((acc, record) => {
                  const id = record.student._id;

                  if (!acc[id]) {
                    acc[id] = {
                      name: record.student.name,
                      rollNo: record.student.rollNo,
                      total: 0,
                      present: 0,
                    };
                  }

                  acc[id].total++;

                  if (record.status === "Present") {
                    acc[id].present++;
                  }

                  return acc;
                }, {}),
              ).map((student) => (
                <tr key={student.rollNo}>
                  <td>{student.name}</td>
                  <td>{student.rollNo}</td>
                  <td>
                    {((student.present / student.total) * 100).toFixed(2)}%
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

export default AttendanceHistory;
