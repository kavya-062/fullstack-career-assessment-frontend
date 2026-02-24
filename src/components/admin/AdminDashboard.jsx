import "./Admin.css";

export default function AdminDashboard({ setPage }) {
  return (
    <div className="admin-page">
      <div className="admin-content">
        <div className="admin-header">
          <h1>Admin Dashboard</h1>
          <span>🛠️</span>
        </div>

        <div className="admin-banner">
          <div>
            <h2>Welcome, Admin</h2>
            <p>
              Manage assessment tools, career recommendations, and system
              progress from one place.
            </p>
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4149/4149658.png"
            alt="admin"
          />
        </div>

        <div className="admin-cards">
          <div className="admin-card" onClick={() => setPage("admin-questions")}>
            <span>📝</span>
            <h3>Manage Questions</h3>
            <p>Edit and review assessment questions</p>
          </div>

          <div className="admin-card" onClick={() => setPage("admin-careers")}>
            <span>🎯</span>
            <h3>Career Recommendations</h3>
            <p>Update career mapping and guidance</p>
          </div>

          <div className="admin-card" onClick={() => setPage("admin-analytics")}>
            <span>📊</span>
            <h3>Progress & Analytics</h3>
            <p>View assessment participation</p>
          </div>
        </div>

        <div className="admin-footer">
          <button className="skip-btn" onClick={() => setPage("login")}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}