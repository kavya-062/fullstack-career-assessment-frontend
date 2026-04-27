import "./Home.css";

export default function Home({ setPage }) {
  return (
    <div className="home-wrapper">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-logo" onClick={() => setPage("home")}>
          Career<span>Path</span>
        </div>
        <div className="nav-links">
          <button className="nav-login-btn" onClick={() => setPage("login")}>Login / Sign Up</button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <div className="hero-bg">
        <button className="hero-cta-btn" onClick={() => setPage("signup")}>Get Started Today</button>
      </div>

      {/* ABOUT US SECTION */}
      <div className="about-section">
        <h2>About Us</h2>

        <p className="about-intro">
          The Career Assessment Tool is a web-based platform designed to
          help students identify suitable career paths based on their
          skills, interests, and personality traits.
        </p>

        <p className="about-intro">
          Choosing the right career can be challenging for students.
          This system helps reduce confusion by providing structured
          assessments and meaningful insights into career options.
        </p>

        {/* KEY FEATURES */}
        <h3>Key Features</h3>
        <div className="features-grid">
          <div className="feature-card">
            <h4>Career Assessments</h4>
            <p>
              Analyze student interests through well-structured career
              assessment questionnaires.
            </p>
          </div>

          <div className="feature-card">
            <h4>Personality & Skill Evaluation</h4>
            <p>
              Evaluate personality traits and skill levels to guide
              students toward suitable careers.
            </p>
          </div>

          <div className="feature-card">
            <h4>Personalized Recommendations</h4>
            <p>
              Generate career recommendations based on assessment
              results and student preferences.
            </p>
          </div>

          <div className="feature-card">
            <h4>User-Friendly Interface</h4>
            <p>
              Simple, interactive, and easy-to-use design for a smooth
              user experience.
            </p>
          </div>
        </div>

        {/* USER ROLES */}
        <h3>User Roles</h3>
        <div className="roles-grid">
          <div className="role-card">
            <h4>Student</h4>
            <p>
              Take assessments, view results, and explore suitable career
              options based on personalized recommendations.
            </p>
          </div>

          <div className="role-card">
            <h4>Admin</h4>
            <p>
              Manage assessment questions, update career data, and
              analyze student results to improve recommendations.
            </p>
          </div>
        </div>

        <p className="about-footer">
          This platform aims to support students in making informed and
          confident career decisions while planning their future paths
          effectively.
        </p>
      </div>

    </div>
  );
}