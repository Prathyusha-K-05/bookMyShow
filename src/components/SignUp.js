import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.css';

function SignUp() {
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ width: '400px' }}>
                <h2 className="text-center mb-4">Create Account</h2>
                <form>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className="form-control" placeholder="Enter your username" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="country" className="form-label">Select your country</label>
                        <select id="country" name="country" className="form-select">
                            <option value="india">India</option>
                            <option value="united-states">United States</option>
                            <option value="germany">Germany</option>
                            <option value="singapore">Singapore</option>
                            <option value="malaysia">Malaysia</option>
                            <option value="australia">Australia</option>
                            <option value="spain">Spain</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="Enter your password" />
                    </div>
                    <div className="d-grid mb-3">
                        <button type="submit" className="btn btn-success">Sign up</button>
                    </div>
                </form>
                <div className="text-center">
                    <p>Or</p>
                    <p>Already have an account? <Link to="/signin">Login here</Link></p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
