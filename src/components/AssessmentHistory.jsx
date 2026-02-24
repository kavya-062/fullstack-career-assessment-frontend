export default function AssessmentHistory({ setPage }) {
  const attempts = localStorage.getItem("assessmentAttempts") || 1;
  const date =
    localStorage.getItem("assessmentDate") ||
    new Date().toLocaleDateString();
  const profile =
    localStorage.getItem("interestProfile") || "Not available";

  return (
    <div className="assessment-container">
      <h2>Assessment History</h2>

      <p style={{ marginTop: "15px" }}>
        📅 <b>Last Attempt:</b> {date}
      </p>

      <p>
        🔁 <b>Total Attempts:</b> {attempts}
      </p>

      <p>
        🧠 <b>Latest Profile:</b> {profile}
      </p>

      <button
        className="next-btn"
        style={{ marginTop: "30px" }}
        onClick={() => setPage("dashboard")}
      >
        Back to Dashboard
      </button>
    </div>
  );
}