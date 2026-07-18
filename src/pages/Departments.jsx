import "../Styles/department.css";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { useState, useEffect } from "react";
import API from "../api/Departmentapi";

function Department() {
  const [showform, setshowform] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [departments, setDepartments] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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

  const handleEdit = (department) => {
    setFormData({
      name: department.name,
      code: department.code,
      hod: department.hod,
      description: department.description,
    });

    setEditingId(department._id);
    setshowform(true);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this department?",
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/${id}`);

      alert("Department Deleted Successfully!");

      fetchDepartments();
    } catch (error) {
      console.log(error);
      alert("Failed to delete department.");
    }
  };

  const filteredDepartments = departments.filter((department) => {
    const search = searchTerm.toLowerCase();

    return (
      (department.name || "").toLowerCase().includes(search) ||
      (department.code || "").toLowerCase().includes(search) ||
      (department.hod || "").toLowerCase().includes(search)
    );
  });

  return (
    <>
      <Navbar />

      <div className="dashboard-container">
        <Sidebar />

        <main className="main-content">
          <div className="department-header">
            <h1 className="page-title">Departments</h1>

            <input
              type="text"
              placeholder="Search Department..."
              className="student-search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <button
              className="dep-btn"
              onClick={() => {
                setshowform(true);
              }}
            >
              + Add Department
            </button>
          </div>

          <div className="department-grid">
            {filteredDepartments.map((department) => (
              <div className="dept-card" key={department._id}>
                <h2>{department.name}</h2>

                <p>
                  <strong>Code:</strong> {department.code}
                </p>

                <p>
                  <strong>HOD:</strong> {department.hod}
                </p>

                <p>
                  <strong>Description:</strong> {department.description}
                </p>

                <div className="department-actions">
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(department)}
                  >
                    Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(department._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {showform && (
            <div className="modal-overlay">
              <form className="department-form" onSubmit={handleSubmit}>
                <h2>{editingId ? "Edit Department" : "Add Department"}</h2>

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

                  <button type="submit" className="save-btn">
                    {editingId ? "Update Department" : "Save Department"}
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
