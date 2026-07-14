import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { useState } from "react";
import "../Styles/Student.css";
function Students() {
  const [showform, setshowform] = useState(false);
  const students = [
    {
      id: 1,
      name: "Shivam Dube",
      roll: "CSE001",
      department: "CSE",
      year: 4,
    },
    {
      id: 2,
      name: "Harshit Rana",
      roll: "ECE002",
      department: "ECE",
      year: 4,
    },
    {
      id: 3,
      name: "Samuel Johnson",
      roll: "CSE003",
      department: "CSE",
      year: 4,
    },
  ];
  function toggle() {
    setshowform((prev) => !prev);
  }
  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <Sidebar />
        <main className="main-content">
          <h1 className="page-title">Students</h1>
          <div className="student-header">
            <input
              type="text"
              placeholder="Search Student..."
              className="student-search"
            />
            <button className="add-student-btn" onClick={toggle}>
              +Add Student
            </button>
          </div>
          <table className="student-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll No</th>
                <th>Department</th>
                <th>Year</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.roll}</td>
                  <td>{student.department}</td>
                  <td>{student.year}</td>
                  <td>
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
      {showform && (
        <div className="modal-overlay">
          <div className="std-form">
            <h2>Add Student</h2>

            <div className="input-group">
              <label>Name</label>
              <input type="text" />
            </div>

            <div className="input-group">
              <label>Roll Number</label>
              <input type="text" />
            </div>

            <div className="input-group">
              <label>Department</label>
              <input type="text" />
            </div>

            <div className="input-group">
              <label>Year</label>
              <input type="number" />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" />
            </div>

            <div className="input-group">
              <label>Phone Number</label>
              <input type="text" />
            </div>

            <div className="form-buttons">
              <button className="cancel-btn" onClick={toggle}>
                Cancel
              </button>

              <button className="save-btn">Save Student</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Students;
