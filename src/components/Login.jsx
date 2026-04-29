import { useState } from "react";
import "./Login.css";

export default function Login({ setPage, setRole }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const BASE_URL = "https://fullstack-career-assessment-backend-production.up.railway.app";

  // =============================
  // STUDENT LOGIN
  // =============================
  const loginAsStudent = async () => {

    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }

    try {

      console.log("🚀 Sending login request...");

      const res = await fetch(`${BASE_URL}/auth/login-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: username.trim(),
          password: password.trim()
        })
      });

      console.log("Response status:", res.status);

      if (res.status === 500) {
        alert("Server error (check backend)");
        return;
      }

      if (res.status === 404) {
        alert("API not found (check controller)");
        return;
      }

      let data = null;

      try {
        data = await res.json();
      } catch {
        console.log("No JSON returned");
      }

      console.log("User data:", data);

      // ✅ success condition
      if (res.ok && data) {

        localStorage.clear();

        localStorage.setItem("studentId", data.id || "");
        localStorage.setItem("studentName", data.name || "");
        localStorage.setItem("studentEmail", data.email || "");

        console.log("✅ Login success");

        setRole("student");
        setPage("dashboard");

      } else {
        alert("Invalid email or password OR user not signed up");
      }

    } catch (error) {

      console.error("❌ Backend error:", error);
      alert("Backend connection failed");
    }
  };

  // =============================
  // ADMIN LOGIN (UNCHANGED)
  // =============================
  const loginAsAdmin = () => {

    if (!username || !password) {
      alert("Please enter username and password");
      return;
    }

    setRole("admin");
    setPage("admin");
  };

  return (
    <div className="auth-container">

      <div className="auth-image">
        <img
          src="/images/careers-bg.png"
          alt="Careers Illustration"
        />
      </div>

      <div className="auth-form-wrapper">
        <div className="auth-card">

          <h1>Welcome Back</h1>
          <p>Login to your account to continue</p>

          <div className="auth-input-group">
            <input
              type="text"
              placeholder="Username (Email)"
              className="auth-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="auth-input-group">
            <input
              type="password"
              placeholder="Password"
              className="auth-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            className="auth-btn student"
            onClick={loginAsStudent}
          >
            Login as Student
          </button>

          <button
            className="auth-btn admin"
            onClick={loginAsAdmin}
          >
            Login as Admin
          </button>

          <p className="auth-footer-text">
            Don’t have an account?{" "}
            <span onClick={() => setPage("signup")}>
              Sign up
            </span>
          </p>

        </div>
      </div>
    </div>
  );
}