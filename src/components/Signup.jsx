import { useState } from "react";
import "./Login.css";

export default function Signup({ setPage }) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [passwordStrength, setPasswordStrength] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [otpInputs, setOtpInputs] = useState(["", "", "", "", "", ""]);

  const BASE_URL = "https://fullstack-career-assessment-backend-production.up.railway.app";

  // =============================
  // PASSWORD STRENGTH
  // =============================
  const checkStrength = (val) => {
    if (!val) { setPasswordStrength(""); return; }
    if (val.length < 6) setPasswordStrength("weak");
    else if (val.length < 10 || !/\d/.test(val)) setPasswordStrength("medium");
    else setPasswordStrength("strong");
  };

  // =============================
  // REQUEST OTP (FIXED ONLY)
  // =============================
  const handleSignupClick = async () => {

    console.log("🔥 Signup clicked");

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if(password !== confirmPassword){
      alert("Passwords do not match");
      return;
    }

    try {
      console.log("🚀 Sending OTP request...");

      const res = await fetch(`${BASE_URL}/student/request-otp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email.trim()
        })
      });

      console.log("Status:", res.status);

      let data = null;
      try {
        data = await res.json();
      } catch {}

      console.log("Response:", data);

      if (res.ok) {
        alert("OTP sent to your email!");
        setShowOTP(true);
      } else {
        alert("Failed to send OTP");
      }

    } catch (error) {
      console.error("❌ Backend error:", error);
      alert("Backend connection failed");
    }
  };

  // =============================
  // VERIFY OTP + SAVE USER
  // =============================
  const handleVerifyOTP = async () => {

    const enteredOTP = otpInputs.join("");

    if (enteredOTP.length !== 6) {
      alert("Please enter a valid 6-digit code.");
      return;
    }

    try {
      console.log("🚀 Verifying OTP...");

      const res = await fetch(`${BASE_URL}/student/save`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: firstName + " " + lastName,
          email: email.trim(),
          password: password.trim(),
          course: "Not Selected",
          education: "",
          otp: enteredOTP
        })
      });

      console.log("Verify status:", res.status);

      if(res.ok){
        alert("Account created successfully!");
        setShowOTP(false);
        setPage("login");
      } else {
        const errorData = await res.json().catch(() => ({}));
        alert(errorData.message || "Invalid OTP or Signup failed");
      }

    } catch(error) {
      console.error(error);
      alert("Backend connection failed");
    }
  };

  // OTP input handling (UNCHANGED)
  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;

    const newOtp = [...otpInputs];
    newOtp[index] = value;
    setOtpInputs(newOtp);

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  return (
    <div className="auth-container signup-override">

      <div className="auth-image">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Students Collaborating"
        />
      </div>

      <div className="auth-form-wrapper">
        <div className="auth-card">

          <h1>Create Account</h1>
          <p>Start your career journey</p>

          <div className="auth-name-row">
            <div className="auth-input-group">
              <input
                type="text"
                placeholder="First Name"
                className="auth-input"
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
              />
            </div>

            <div className="auth-input-group">
              <input
                type="text"
                placeholder="Last Name"
                className="auth-input"
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}
              />
            </div>
          </div>

          <div className="auth-input-group">
            <input
              type="email"
              placeholder="Email"
              className="auth-input"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          <div className="auth-input-group">
            <input
              type="password"
              placeholder="Password"
              className="auth-input"
              value={password}
              onChange={(e)=>{
                setPassword(e.target.value);
                checkStrength(e.target.value);
              }}
            />
          </div>

          {password && (
            <div className="password-strength-container">
              <div className={`password-strength-fill strength-${passwordStrength}`}></div>
            </div>
          )}

          <div className="auth-input-group">
            <input
              type="password"
              placeholder="Confirm Password"
              className="auth-input"
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
            />
          </div>

          <button
            className="auth-btn student"
            onClick={handleSignupClick}
          >
            Sign Up
          </button>

          <div className="auth-divider">
            <span>OR</span>
          </div>

          <button className="auth-google-btn">
            <img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="google" />
            Continue with Google
          </button>

          <p className="auth-footer-text">
            Already have an account?{" "}
            <span onClick={()=>setPage("login")}>
              Login
            </span>
          </p>

        </div>
      </div>

      {showOTP && (
        <div className="otp-modal-overlay">
          <div className="otp-modal">

            <h2>Security Verification</h2>
            <p>We've sent a 6-digit code to <strong>{email}</strong></p>

            <div className="otp-input-container">
              {otpInputs.map((digit, idx) => (
                <input
                  key={idx}
                  id={`otp-${idx}`}
                  type="text"
                  maxLength="1"
                  className="otp-input-box"
                  value={digit}
                  onChange={(e) => handleOtpChange(idx, e.target.value)}
                />
              ))}
            </div>

            <button className="otp-verify-btn" onClick={handleVerifyOTP}>
              Verify & Create Account
            </button>

            <div className="otp-cancel" onClick={() => setShowOTP(false)}>
              Cancel
            </div>

          </div>
        </div>
      )}
    </div>
  );
}