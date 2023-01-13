import React, { useContext, useState } from "react";
import axios from "axios";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
const Register = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    username: undefined,
    password: undefined,
    email: undefined,
    city: undefined,
    phone: undefined,
  });
  const { loading, error, dispatch } = useContext(AuthContext);
  const handleChange = (e) => {
    setUserDetails((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(userDetails);
    // dispatch({ type: "LOGIN_START" });
    try {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/register`, userDetails);
        navigate("/login");
    } catch (err) {
        error.message=err
    }
  };
  return (
    <>
      <div className="register-page">
        <div className="form">
          <form className="register-form">
            <input
              type="text"
              id="username"
              className="name-input"
              placeholder="username"
              onChange={handleChange}
            />
            <input
              type="email"
              id="email"
              className="email-input"
              placeholder="Email Address"
              onChange={handleChange}
            />
            <input
              type="number"
              id="phone"
              className="name-input"
              placeholder="Contact Number"
              onChange={handleChange}
            />
            <input
              type="text"
              id="city"
              className="name-input"
              placeholder="City"
              onChange={handleChange}
            />
            <input
              type="password"
              id="password"
              className="password-input"
              placeholder="password"
              onChange={handleChange}
            />

            <button
              disabled={loading}
              onClick={handleClick}
            >
              create
            </button>
            {error && <span>{error.message}</span>}
            <p className="message">
              Already registered?
              <a href="/login">Sign In</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
