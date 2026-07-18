import "../Styles/department.css";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { useState, useEffect } from "react";
import API from "../api/Departmentapi";

function Department() {
  const [showform, setshowform] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [departments, setDepartments] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    code: "",
    hod: "",
    description: "",
  });

  const fetchDepartments = async () => {
    try {
      const res = await API.get("/");
      setDepartments(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

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
        alert("Department Updated Successfully!");
      } else {
        await API.post("/", formData);
        alert("Department Added Successfully!");
      }

      fetchDepartments();

      setFormData({
        name: "",
        code: "",
        hod: "",
        description: "",
      });

      setEditingId(null);
      setshowform(false);
    } catch (error) {
      console.log(error);
      alert("Something went wrong.");
    }
  };

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
              onClick={() => setshowform(true)}
            >
              + Add Department
            </button>
          </div>

          <div className="department-grid">
            {departments.map((department) => (
              <div className="dept-card" key={department._id}>
                <h2>{department.name}</h2>

                <p>
                  <strong>Code:</strong> {department.code}
                </p>

                <p>
                  <strong>HOD:</strong> {department.hod}
                </p>

                <p>
                  <strong>Description:</strong>{" "}
                  {department.description}
                </p>

                <div className="department-actions">
                  <button className="edit-btn">
                    Edit
                  </button>

                  <button className="delete-btn">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {showform && (
            <div className="modal-overlay">
              <form
                className="department-form"
                onSubmit={handleSubmit}
              >
                <h2>
                  {editingId
                    ? "Edit Department"
                    : "Add Department"}
                </h2>

                <div className="input-group">
                  <label>Department Name</label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Department Code</label>

                  <input
                    type="text"
                    name="code"
                    value={formData.code}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>HOD</label>

                  <input
                    type="text"
                    name="hod"
                    value={formData.hod}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Description</label>

                  <textarea
                    name="description"
                    rows="3"
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-buttons">
                  <button
                    type="button"
                    className="cancel-btn"
                    onClick={() => setshowform(false)}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="save-btn"
                  >
                    {editingId
                      ? "Update Department"
                      : "Save Department"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </main>
      </div>
    </>
  );
}

export default Department;