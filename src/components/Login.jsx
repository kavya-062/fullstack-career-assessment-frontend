import { useState } from "react";
import "./Login.css";

export default function Login({ setPage, setRole }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  // =============================
  // STUDENT LOGIN (BACKEND CONNECTED)
  // =============================

  const loginAsStudent = async () => {

    if (!username || !password) {

      alert("Please enter username and password");

      return;

    }

    try {

      console.log("Sending login request...");

      const res = await fetch("http://localhost:8086/auth/login-user", {

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


      // if backend gives server error

      if(res.status === 500){

        alert("Server error (check Spring Boot)");

        return;

      }

      if(res.status === 404){

        alert("API not found (check controller)");

        return;

      }


      // read response safely

      let data = null;

      try{

        data = await res.json();

      }
      catch{

        console.log("No JSON returned");

      }


      console.log("User data:", data);


      // if user exists

      if (data && data.id) {
        localStorage.clear();
        localStorage.setItem("studentId", data.id);
        localStorage.setItem("studentName", data.name);
        localStorage.setItem("studentEmail", data.email);

        console.log("Login success, ID:", data.id);


        // your original navigation

        setRole("student");

        setPage("dashboard");

      }
      else {

        alert("Invalid email or password OR user not signed up");

      }

    }
    catch (error) {

      console.error("Backend error:", error);

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

    <div className="login-page">

      <div className="login-card">

        <h1>Career Assessment Tool</h1>

        <p>Discover your future career path</p>


        <input
          type="text"
          placeholder="Username (Email)"
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


        <button
          className="login-btn student"
          onClick={loginAsStudent}
        >
          Login as Student
        </button>


        <button
          className="login-btn admin"
          onClick={loginAsAdmin}
        >
          Login as Admin
        </button>


        <p className="signup-text">

          Don’t have an account?{" "}

          <span onClick={() => setPage("signup")}>

            Sign up

          </span>

        </p>

      </div>


      <div className="login-image">

        <img
          src="/images/careers-bg.png"
          alt="Careers"
        />

      </div>

    </div>

  );

}