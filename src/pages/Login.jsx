import { Link } from "react-router-dom";
import "../styles/Login.css";

function Login() {
    return (
        <div className="login-page">

            <div className="login-card">

                <h1 className="logo">
                    🎓 CampusHub
                </h1>

                <p className="subtitle">
                    College Management System
                </p>

                <h2>
                    Welcome Back!
                </h2>

                <p className="login-text">
                    Login to your account
                </p>

                <div className="input-group">

                    <label>Email</label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                    />

                </div>

                <div className="input-group">

                    <label>Password</label>

                    <input
                        type="password"
                        placeholder="Enter your password"
                    />

                </div>

                <div className="login-options">

                    <label>
                        <input type="checkbox" />
                        Remember Me
                    </label>

                    <Link to="/">
                        Forgot Password?
                    </Link>

                </div>

                <button className="login-btn">
                    Login
                </button>

            </div>

        </div>
    );
}

export default Login;