import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';
function Signin() {
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ width: '350px' }}>
                <h2 className="text-center mb-4">Log In</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" placeholder="Enter your username" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="Enter your password" />
                    </div>
                    <div className="d-grid mb-3">
                        <Link to="/" className="btn btn-primary">Login</Link>
                    </div>
                </form>
                <div className="text-center">
                    <p>Or</p>
                    <button className="btn btn-light w-100 border d-flex align-items-center justify-content-center mb-3">
                        <img src="https://cdn-icons-png.flaticon.com/128/300/300221.png" alt="Google Icon" className="me-2" style={{ width: '20px' }} />
                        Continue With Google
                    </button>
                    <p>New user? <Link to="/signup">Sign up here</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Signin;
