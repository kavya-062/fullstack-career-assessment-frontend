import { useState } from "react";
import "./Login.css";

export default function Signup({ setPage }) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  // =============================
  // SAVE USER TO BACKEND (LOGIC SAME)
  // =============================

  const handleSignup = async () => {

    if (!firstName || !lastName || !email || !password || !confirmPassword) {

      alert("Please fill all fields");
      return;

    }

    if(password !== confirmPassword){

      alert("Passwords do not match");
      return;

    }

    try{

      const res = await fetch("http://localhost:8086/student/save", {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({

          name: firstName + " " + lastName,

          email: email,

          password: password,

          course: "Not Selected",

          // FIXED HERE
          education: ""

        })

      });

      if(res.ok){

        alert("Signup successful");

        setPage("login");

      }
      else{

        alert("Signup failed");

      }

    }
    catch(error){

      console.log(error);

      alert("Backend connection failed");

    }

  };



  return (

    <div className="signup-container">


      {/* LEFT IMAGE */}

      <div className="signup-image">

        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692"
          alt="signup"
        />

      </div>



      {/* RIGHT FORM */}

      <div className="signup-form">

        <div className="login-card">

          <h1>Create Account</h1>

          <p>Start your career journey</p>



          {/* FIRST + LAST NAME */}

          <div className="name-row">

            <input
              type="text"
              placeholder="First Name"
              className="login-input"
              value={firstName}
              onChange={(e)=>setFirstName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Last Name"
              className="login-input"
              value={lastName}
              onChange={(e)=>setLastName(e.target.value)}
            />

          </div>



          <input
            type="email"
            placeholder="Email"
            className="login-input"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />


          <input
            type="password"
            placeholder="Password"
            className="login-input"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />


          <input
            type="password"
            placeholder="Confirm Password"
            className="login-input"
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
          />


          <button
            className="login-btn student"
            onClick={handleSignup}
          >
            Sign Up
          </button>



          {/* OR divider */}

          <div className="divider">

            <span>OR</span>

          </div>



          {/* GOOGLE BUTTON */}

          <button className="google-btn">

            <img
              src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
              alt="google"
            />

            Continue with Google

          </button>



          <p className="signup-text">

            Already have an account?

            <span onClick={()=>setPage("login")}>

              Login

            </span>

          </p>

        </div>

      </div>

    </div>

  );

}