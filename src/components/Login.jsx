import { useState } from "react";
import "./Login.css";

export default function Login({ setPage, setRole }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginAsStudent = () => {
    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }
    setRole("student");
    setPage("dashboard");
  };

  const loginAsAdmin = () => {
    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }
    setRole("admin");
    setPage("admin");
  };

  return (
    <div className="login-page">
      {/* LOGIN CARD */}
      <div className="login-card">
        <h1>Career Assessment Tool</h1>
        <p>Discover your future career path</p>

        <input
          type="text"
          placeholder="Username"
          className="login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-btn student" onClick={loginAsStudent}>
          Login as Student
        </button>

        <button className="login-btn admin" onClick={loginAsAdmin}>
          Login as Admin
        </button>

        {/* SIGN UP TEXT */}
        <p className="signup-text">
          Don’t have an account?{" "}
          <span onClick={() => setPage("signup")}>Sign up</span>
        </p>
      </div>

      {/* ✅ LOGIN PAGE IMAGE (PREVIOUS IMAGE ONLY) */}
      <div className="login-image">
        <img src="/images/careers-bg.png" alt="Careers" />
      </div>
    </div>
  );
}