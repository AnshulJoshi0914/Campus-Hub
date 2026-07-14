import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
function Dashboard(){<>
    <Navbar />

    <div className="dashboard-container">
        <Sidebar />

        <main className="main-content">
            <h1 className="Dashboard-title">Dashboard</h1>
            <div className="cards-title">
                <DashboardCard title="Total Students" value="250"/>
                <DashboardCard title="Present Students" value="220"/>
                <DashboardCard title="Absent Students" value="30"/>
                <DashboardCard title="Departments" value="6"/>
            </div>

            <div className="Dashboard-bottom">
                <div className="chart-box">
                    <h2>Weekly Attendance..</h2>
                    <p>Chart loading soon...</p>
                </div>
            <div className="Recent-box">
                <h2>Recent Students...</h2>
                 <ul>
                    <li>Shivam Dube</li>
                    <li>Harshit Rana</li>
                    <li>Samuel Johnson</li>
                 </ul>
            </div>
            </div>
        </main>
    </div>
</>
};

export default Dashboard;