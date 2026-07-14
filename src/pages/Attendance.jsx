import "../Styles/Attendance.css";
import { useState } from "react";
import Navbar  from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
function Attendance(){
    const students = [
        {
            id: 1,
            name: "Shivam Dube",
            roll: "CSE001",
            status: "Present",
        },
        {
            id: 2,
            name: "Harshit Rana",
            roll: "ECE002",
            status: "Absent",
        },
        {
            id: 3,
            name: "Samuel Johnson",
            roll: "CSE003",
            status: "Present",
        },
    ];

    const [attendance,setattendance] = useState(students);
    
    return(<>
        <Navbar/>
        <div className="dashboard-container">
            <Sidebar />
            <main className="main-content">
                <div className="attendance-header">
                     <h1>Attendance</h1>
                     <button classanme="save-btn">Save Attendance</button>
                </div>
                 <input type="text" className="attendance-search" placeholder="Students Name.."/>
                 <table className="attendance-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Roll No</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {attendance.map((student)=>(
                            <tr key={student.id}>
                                <td>{student.name}</td>
                                <td>{student.roll}</td>
                                <td><label>
                                    <input type="radio" name={student.id}/>
                                    Present
                                    </label>
                                    <span className="empty_span"></span>
                                    <label>
                                        <input type="radio" name={student.roll}/>
                                        Absent
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                 </table>
            </main>
        </div>
    </>);
}

export default Attendance 