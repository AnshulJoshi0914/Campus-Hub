import Navbar from "../Components/Navbar"
import Sidebar from "../Components/Sidebar"
function Students(){
    const students=[{
        id:1,
        name:"Shivam Dube",
        Roll:"CSE001",
        department:"CSE",
        year:4,
    },
    {
        id:2,
        name:"Harshit Rana",
        Roll:"ECE002",
        department:"ECE",
        year:4,
    },
    {
        id:3,
        name:"Samuel Johnson",
        Roll:"CSE003",
        department:"CSE",
        year:4,
    },];
    return(<>
  <Navbar />
  <div className="dashboard-container">
    <Sidebar />
    <main className="main-content">
      <h1>Students</h1>
      <div className="student-header">
        <input
          type="text"
          placeholder="Search Student..."
          className="student-search"
        />
        <button className="add-student-btn">
          Add Student
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
                <button>Edit</button>
                <button>Delete</button>
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

export default Students