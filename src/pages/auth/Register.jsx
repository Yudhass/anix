import "./styleLoginRegister.css";
import image1 from "./1.png";
import { Link } from 'react-router-dom';

const Register = () => {
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
                            <h2>Create an Account</h2>
                            <p>Start your journey with us today.</p>
                        </div>

                        {/* Username Input */}
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control form-control-lg bg-light fs-6"
                                placeholder="Username"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="input-group mb-3">
                            <input
                                type="email"
                                className="form-control form-control-lg bg-light fs-6"
                                placeholder="Email address"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="input-group mb-3">
                            <input
                                type="password"
                                className="form-control form-control-lg bg-light fs-6"
                                placeholder="Password"
                            />
                        </div>

                        {/* Register Button */}
                        <div className="input-group mb-3">
                            <button className="btn btn-lg btn-primary w-100 fs-6">Register</button>
                        </div>

                        {/* Already Have an Account Link */}
                        <div className="row">
                            <small>
                                Already have an account?
                                <Link to="/login">Login</Link>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
