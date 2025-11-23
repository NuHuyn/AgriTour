import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin, setUser }) => {
  const [currState, setCurrState] = useState("Login");
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    password: "",
    phone: "",
  });

const API_URL = import.meta.env.VITE_API_URL;
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const url =
    currState === "Login"
      ? `${API_URL}/auth/login`
      : `${API_URL}/auth/register`;

  const body =
    currState === "Login"
      ? { email: formData.email, password: formData.password }
      : {
          full_name: formData.full_name,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
        };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Something went wrong");
      return;
    }

    alert(data.message);

    /** Nếu là Login → lưu user */
    if (currState === "Login") {
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);

      if (data.user.role === "partner") {
        navigate("/partner/dashboard");
      } else if (data.user.role === "admin") {
        navigate("/admin/dashboard");
      }
    }

    // Đóng popup sau khi xử lý
    setShowLogin(false);

  } catch (err) {
    console.error("Login/Register error:", err);
    alert("Server error");
  }
};


  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleSubmit}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            className="cross-icon"
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>

        <div className="login-popup-inputs">
          {currState !== "Login" && (
            <input
              type="text"
              name="full_name"
              placeholder="Your name"
              onChange={handleChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Your email"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          {currState !== "Login" && (
            <input
              type="text"
              name="phone"
              placeholder="Phone number (optional)"
              onChange={handleChange}
            />
          )}
        </div>

        <button type="submit">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>

        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>I agree to the terms of use & privacy policy</p>
        </div>

        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
