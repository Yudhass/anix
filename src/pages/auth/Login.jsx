import "./styleLoginRegister.css";
import image1 from "./1.png";
import googleIcon from "./google.png";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="row border rounded-5 p-3 bg-white shadow box-area">
                {/* Left Box */}
                <div
                    className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
                    style={{ background: "#103cbe" }}
                >
                    <div className="featured-image mb-3">
                        <img src={image1} className="img-fluid" style={{ width: "250px" }} alt="Featured" />
                    </div>
                    <p
                        className="text-white fs-2"
                        style={{ fontFamily: "'Courier New', Courier, monospace", fontWeight: "600" }}
                    >
                        Be Verified
                    </p>
                    <small
                        className="text-white text-wrap text-center"
                        style={{ width: "17rem", fontFamily: "'Courier New', Courier, monospace" }}
                    >
                        Join experienced Designers on this platform.
                    </small>
                </div>

                {/* Right Box */}
                <div className="col-md-6 right-box">
                    <div className="row align-items-center">
                        {/* Header */}
                        <div className="header-text text-black mb-4">
                            <h2>Hello, Again</h2>
                            <p>We are happy to have you back.</p>
                        </div>

                        {/* Email Input */}
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control form-control-lg bg-light fs-6"
                                placeholder="Email address"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="input-group mb-1">
                            <input
                                type="password"
                                className="form-control form-control-lg bg-light fs-6"
                                placeholder="Password"
                            />
                        </div>

                        {/* Remember Me and Forgot Password */}
                        <div className="input-group mb-5 d-flex justify-content-between">
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="formCheck" />
                                <label htmlFor="formCheck" className="form-check-label text-secondary">
                                    <small>Remember Me</small>
                                </label>
                            </div>
                            <div className="forgot">
                                <small>
                                    <a href="#">Forgot Password?</a>
                                </small>
                            </div>
                        </div>

                        {/* Login Button */}
                        <div className="input-group mb-3">
                            <button className="btn btn-lg btn-primary w-100 fs-6">Login</button>
                        </div>

                        {/* Sign in with Google */}
                        <div className="input-group mb-3">
                            <button className="btn btn-lg btn-light w-100 fs-6">
                                <img src={googleIcon} style={{ width: "20px" }} className="me-2" alt="Google Icon" />
                                <small>Sign In with Google</small>
                            </button>
                        </div>

                        {/* Sign Up Link */}
                        <div className="row">
                            <small>
                                Don have an account? 
                                <Link to="/register">Register</Link>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login