import "../Styles/department.css";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { useState } from "react";
function Department() {
  const [showform, setshowform] = useState(false);

  const departments = [
    {
      id: 1,
      name: "Computer Science",
      students: 120,
      hod: "Dr. Sharma",
      icon: "💻",
    },
    {
      id: 2,
      name: "Electronics",
      students: 95,
      hod: "Dr. Gupta",
      icon: "⚡",
    },
    {
      id: 3,
      name: "Mechanical",
      students: 80,
      hod: "Dr. Kumar",
      icon: "⚙",
    },
    {
      id: 4,
      name: "Civil",
      students: 60,
      hod: "Dr. Verma",
      icon: "🧱",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <Sidebar />
        <main className="main-content">
          <div className="department-header">
            <h1 className="page-title">Departments</h1>
            <button
              className="dep-btn"
              onClick={() => {
                setshowform(!showform);
              }}
            >
              + Add Department
            </button>
          </div>
          <div className="department-grid">
            {departments.map((departments) => (
              <div className="dept-card" key={departments.id}>
                <h2>
                  {departments.icon}
                  {departments.name}
                </h2>
                <p>
                  Students:<strong>{departments.students}</strong>
                </p>
                <p>
                  HOD:<strong>{departments.hod}</strong>
                </p>
                <div className="department-actions">
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </div>
              </div>
            ))}
          </div>
          {showform && (
            <div className="modal-overlay">
              <div className="department-form">
                <h2>Add Department</h2>

                <div className="input-group">
                  <label>Department Name</label>
                  <input type="text" />
                </div>

                <div className="input-group">
                  <label>HOD</label>
                  <input type="text" />
                </div>

                <div className="input-group">
                  <label>Student Strength</label>
                  <input type="number" />
                </div>

                <div className="form-buttons">
                  <button
                    className="cancel-btn"
                   onClick={() => setshowform(false)}
                  >
                    Cancel
                  </button>
                  <button className="save-btn">Save</button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}

export default Department;
