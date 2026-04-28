import { useState } from "react";
import "./Login.css";

export default function Signup({ setPage }) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // --- NEW SECURITY STATES ---
  const [passwordStrength, setPasswordStrength] = useState(""); // "weak", "medium", "strong"
  const [showOTP, setShowOTP] = useState(false);
  const [otpInputs, setOtpInputs] = useState(["", "", "", "", "", ""]);


  // =============================
  // SAVE USER TO BACKEND (LOGIC SAME)
  // =============================

  // =============================
  // PASSWORD STRENGTH LOGIC
  // =============================
  const checkStrength = (val) => {
    if (!val) { setPasswordStrength(""); return; }
    if (val.length < 6) setPasswordStrength("weak");
    else if (val.length < 10 || !/\d/.test(val)) setPasswordStrength("medium");
    else setPasswordStrength("strong");
  };

  // =============================
  // SAVE USER TO BACKEND (WITH OTP)
  // =============================

  const handleSignupClick = async () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }
    if(password !== confirmPassword){
      alert("Passwords do not match");
      return;
    }
    
    // Call backend to request real OTP
    try {
      const res = await fetch("http://localhost:8080/student/request-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email })
      });

      if (res.ok) {
        setShowOTP(true);
      } else {
        alert("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      console.log(error);
      alert("Backend connection failed when requesting OTP");
    }
  };

  const handleVerifyOTP = async () => {
    const enteredOTP = otpInputs.join("");
    if (enteredOTP.length !== 6) {
      alert("Please enter a valid 6-digit code.");
      return;
    }

    try {
      const res = await fetch("http://localhost:8080/student/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: firstName + " " + lastName,
          email: email,
          password: password,
          course: "Not Selected",
          education: "",
          otp: enteredOTP // Sending the real OTP to the backend!
        })
      });

      if(res.ok){
        alert("Account secured and created successfully!");
        setShowOTP(false);
        setPage("login");
      } else {
        const errorData = await res.json().catch(() => ({}));
        alert(errorData.message || "Invalid OTP or Signup failed");
      }
    } catch(error) {
      console.log(error);
      alert("Backend connection failed");
    }
  };

  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;
    const newOtp = [...otpInputs];
    newOtp[index] = value;
    setOtpInputs(newOtp);

    // Auto-focus next input
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
              onChange={(e) => {
                setPassword(e.target.value);
                checkStrength(e.target.value);
              }}
            />
          </div>
          
          {/* PASSWORD STRENGTH INDICATOR */}
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

      {/* ================= SIMULATED OTP MODAL ================= */}
      {showOTP && (
        <div className="otp-modal-overlay">
          <div className="otp-modal">
            <h2>Security Verification</h2>
            <p>We've sent a 6-digit code to <strong>{email}</strong> to verify your identity.</p>
            
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
                  onKeyDown={(e) => {
                     // Handle backspace to go to previous input
                     if (e.key === "Backspace" && !digit && idx > 0) {
                        const prevInput = document.getElementById(`otp-${idx - 1}`);
                        if (prevInput) prevInput.focus();
                     }
                  }}
                />
              ))}
            </div>

            <button className="otp-verify-btn" onClick={handleVerifyOTP}>
              Verify & Create Account
            </button>
            <div className="otp-cancel" onClick={() => setShowOTP(false)}>
              Cancel Setup
            </div>
          </div>
        </div>
      )}
    </div>
  );
}