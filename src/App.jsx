import React from "react";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Student"
import Attendance from "./pages/Attendance"
import Department from "./pages/Departments";
import Settings from "./pages/Settings";
import Login from "./pages/Login"
import AttendanceHistory from "./pages/AttendanceHistory";
import {BrowserRouter,Route,Routes} from "react-router-dom";

function App(){
    return( 
        <>
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/Student" element={<Students/>}/>
        <Route path="/Attendance" element={<Attendance/>}/>
        <Route path="/Departments" element={<Department/>}/>
        <Route path="/Settings" element={<Settings/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/AttendanceHistory" element={<AttendanceHistory />} />
     </Routes>
    </BrowserRouter>
     </>   
    );
}

export default App;