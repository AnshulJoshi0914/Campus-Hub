import React from "react";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Student"
import Attendance from "./pages/Attendance"
import Department from "./pages/Departments";
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
     </Routes>
    </BrowserRouter>
     </>   
    );
}

export default App;