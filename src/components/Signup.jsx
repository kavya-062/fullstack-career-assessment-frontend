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
  // REQUEST OTP (FIXED)
  // =============================
  const handleSignupClick = async () => {

    console.log("🔥 Signup button clicked"); // DEBUG

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
        alert("OTP sent successfully!");
        setShowOTP(true);
      } else {
        alert("Failed to send OTP");
      }

    } catch (error) {
      console.error("❌ ERROR:", error);
      alert("Backend connection failed");
    }
  };


  // =============================
  // VERIFY OTP
  // =============================
  const handleVerifyOTP = async () => {

    const enteredOTP = otpInputs.join("");

    if (enteredOTP.length !== 6) {
      alert("Enter valid 6 digit OTP");
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

      console.log("Verify Status:", res.status);

      if(res.ok){
        alert("Account created successfully!");
        setShowOTP(false);
        setPage("login");
      } else {
        alert("Invalid OTP");
      }

    } catch(error) {
      console.error(error);
      alert("Backend error");
    }
  };


  // OTP input handling
  const handleOtpChange = (index, value) => {
    if (isNaN(value)) return;

    const newOtp = [...otpInputs];
    newOtp[index] = value;
    setOtpInputs(newOtp);

    if (value && index < 5) {
      const next = document.getElementById(`otp-${index + 1}`);
      if (next) next.focus();
    }
  };


  return (
    <div className="auth-container signup-override">

      <div className="auth-image">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Students"
        />
      </div>

      <div className="auth-form-wrapper">
        <div className="auth-card">

          <h1>Create Account</h1>

          <input placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
          <input placeholder="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)} />
          <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />

          <input type="password" placeholder="Password"
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value);
              checkStrength(e.target.value);
            }}
          />

          <input type="password" placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
          />

          <button onClick={handleSignupClick}>
            Sign Up
          </button>

        </div>
      </div>

      {/* OTP MODAL */}
      {showOTP && (
        <div>
          <h3>Enter OTP</h3>

          {otpInputs.map((digit, i) => (
            <input
              key={i}
              id={`otp-${i}`}
              value={digit}
              onChange={(e)=>handleOtpChange(i, e.target.value)}
            />
          ))}

          <button onClick={handleVerifyOTP}>
            Verify OTP
          </button>
        </div>
      )}

    </div>
  );
}