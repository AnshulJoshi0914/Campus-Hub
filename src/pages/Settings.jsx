import "../Styles/settings.css";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";


function Settings(){
    return(<>
      <Navbar />
      <div className="dashboard-container">
        <Sidebar/>
          <main className="main-content">
            <h1 className="page-title">Settings</h1>
            <div className="settings-card">
                <div className="profile-section">
                    <div className="profile-avatar">👤</div>
                    <h2>Admin</h2>
                </div>
            <div className="input-group">
                <label>Full Name</label>
                <input type="text" default="Admin User"/>
            </div>
            <div className="input-group">
                <label>Phone Number</label>
                <input type="text"  placeholder="Enter phone number"/>
            </div>
            <div className="input-group">
                <label>Email</label>
                <input type="email"   defaultValue="admin@campushub.com"/>
            </div>
            <div className="input-group">
                <label>New Password</label>
                <input type="password" placeholder="New Password"/>
            </div>
            <div className="input-group">
                <label>Confirm Password</label>
                <input type="password" placeholder="Confirm Password"/>
            </div>

            <div className="setting-option">
              <input type="checkbox" />
              <label>Email Notifications</label>
            </div>

            <div className="setting-option">
              <input type="checkbox" />
              <label>Dark Mode (Coming Soon)</label>
            </div>

            <button className="save-btn">
              Save Changes
            </button>

            </div>
          </main>
         </div>
    </>);
}

export default Settings