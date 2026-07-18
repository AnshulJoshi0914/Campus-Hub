import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import React, { useState, useEffect } from "react";
import API from "../api/Studentapi";
import "../Styles/Student.css";

function Students() {
  const [showform, setshowform] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    department: "",
    year: "",
    email: "",
    phone: "",
  });

  const fetchStudents = async () => {
    try {
      const res = await API.get("/");
      setStudents(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  function toggle() {
    setshowform((prev) => !prev);
  }
  const handleEdit = (student) => {
    setFormData({
      name: student.name,
      rollNo: student.rollNo,
      email: student.email,
      department: student.department,
      year: student.year,
      phone: student.phone,
    });

    setEditingId(student._id);
    setshowform(true);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?",
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/${id}`);

      alert("Student Deleted Successfully!");

      fetchStudents();
    } catch (error) {
      console.log(error);
      alert("Failed to delete student.");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await API.put(`/${editingId}`, formData);
      } else {
        await API.post("/", formData);
      }

      alert("Student Added Successfully!");

      fetchStudents();

      setshowform(false);

      setFormData({
        name: "",
        rollNo: "",
        department: "",
        year: "",
        email: "",
        phone: "",
      });
      setEditingId(null);
      setshowform(false);

      fetchStudents();
    } catch (error) {
      console.log(error);
      alert("Error adding student");
    }
  };

  const filteredStudents = students.filter((student) => {
  const search = searchTerm.toLowerCase();

  return (
    (student.name || "").toLowerCase().includes(search) ||
    (student.rollNo || "").toLowerCase().includes(search) ||
    (student.department || "").toLowerCase().includes(search) ||
    (student.email || "").toLowerCase().includes(search) ||
    (student.phone || "").includes(search) ||
    String(student.year).includes(search)
  );
});
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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button className="add-student-btn" onClick={toggle}>
              + Add Student
            </button>
          </div>

          <table className="student-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll No</th>
                <th>Department</th>
                <th>Year</th>
                <th>Email</th>
                <th>Phone No</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student._id}>
                  <td>{student.name}</td>
                  <td>{student.rollNo}</td>
                  <td>{student.department}</td>
                  <td>{student.year}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(student)}
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(student._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>

      {showform && (
        <div className="modal-overlay">
          <form className="std-form" onSubmit={handleSubmit}>
            <h2>{editingId ? "Edit Student" : "Add Student"}</h2>

            <div className="input-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Roll Number</label>
              <input
                type="text"
                name="rollNo"
                value={formData.rollNo}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Department</label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Year</label>
              <input
                type="number"
                name="year"
                value={formData.year}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-buttons">
              <button type="button" className="cancel-btn" onClick={toggle}>
                Cancel
              </button>

              <button type="submit" className="save-btn">
                {editingId ? "Update Student" : "Save Student"}
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Students;
