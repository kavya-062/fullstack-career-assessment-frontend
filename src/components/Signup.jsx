import "./Login.css";

export default function Signup({ setPage }) {
  return (
    <div className="signup-container">
      {/* LEFT SIDE IMAGE */}
      <div className="signup-image">
        <img src="/images/signup2-bg.png" alt="Signup" />
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="signup-form">
        <div className="login-card">
          <h1>Create Account</h1>
          <p>Sign up to start your career assessment</p>

          <input
            type="text"
            placeholder="Username"
            className="login-input"
          />

          <input
            type="password"
            placeholder="Password"
            className="login-input"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="login-input"
          />

          <button
            className="login-btn student"
            onClick={() => setPage("login")}
          >
            Sign Up
          </button>

          <p className="signup-text">
            Already have an account?{" "}
            <span onClick={() => setPage("login")}>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
}