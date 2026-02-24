import { useEffect } from "react";
import "./Dashboard.css";

export default function Dashboard({ setPage }) {
  const assessmentStatus =
    localStorage.getItem("assessmentStatus") || "pending";

  const recommendedCareers = JSON.parse(
    localStorage.getItem("recommendedCareers") || "[]"
  );

  // 🔒 KEEP SKILLS LOCKED UNTIL ASSESSMENT IS COMPLETED
  useEffect(() => {
    if (assessmentStatus !== "completed") {
      localStorage.removeItem("assessmentUnlocked");
      localStorage.removeItem("skillAnalysis");
    }
  }, [assessmentStatus]);

  return (
    <div className="dashboard-page">
      <div className="dashboard-overlay">
        <h1 className="dashboard-title">Student Dashboard</h1>
        <p className="dashboard-subtitle">
          Explore yourself. Discover your future.
        </p>

        <div className="dashboard-info">
          {assessmentStatus === "completed" ? (
            <p className="status done">✅ Assessment Completed</p>
          ) : (
            <p className="status pending">⏳ Assessment Not Completed</p>
          )}

          {assessmentStatus === "completed" &&
            recommendedCareers.length > 0 && (
              <div className="recommend-box">
                <h4>🎯 Recommended Careers</h4>
                <ul>
                  {recommendedCareers.slice(0, 3).map((c, i) => (
                    <li key={i}>• {c}</li>
                  ))}
                </ul>
              </div>
            )}
        </div>

        <div className="dashboard-cards">
          {/* EXISTING 4 CARDS */}
          <div className="dash-card" onClick={() => setPage("assessment")}>
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
            <h3>Take Assessment</h3>
            <p>Interest, Personality & Skills</p>
          </div>

          <div className="dash-card" onClick={() => setPage("results")}>
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828919.png" />
            <h3>Results</h3>
            <p>Career recommendations</p>
          </div>

          <div className="dash-card" onClick={() => setPage("library")}>
            <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" />
            <h3>Career Library</h3>
            <p>Explore career paths</p>
          </div>

          <div className="dash-card logout" onClick={() => setPage("login")}>
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828479.png" />
            <h3>Logout</h3>
            <p>Exit dashboard</p>
          </div>

          {/* ASSESSMENT HISTORY */}
          <div className="dash-card" onClick={() => setPage("history")}>
            <img src="https://cdn-icons-png.flaticon.com/512/3652/3652191.png" />
            <h3>Assessment History</h3>
            <p>View previous attempts</p>
          </div>

          {/* SKILL ANALYSIS */}
          <div className="dash-card" onClick={() => setPage("skills")}>
            <img src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png" />
            <h3>Skill Analysis</h3>
            <p>Your strengths & gaps</p>
          </div>
        </div>
      </div>
    </div>
  );
}