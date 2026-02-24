import "./Admin.css";

export default function ManageQuestions({ setPage }) {
  return (
    <div className="admin-page">
      <div className="admin-content">
        {/* HEADER */}
        <div className="admin-header">
          <h1>Manage Assessment Questions</h1>
          <span>📝</span>
        </div>

        {/* QUESTIONS CARD */}
        <div className="admin-list">
          <h3>🎯 Interest-Based Questions</h3>
          <ul>
            <li>🎯 Which activity do you enjoy the most?</li>
            <li>📚 What subject do you like the most?</li>
            <li>🛠️ Do you enjoy hands-on practical work?</li>
            <li>🎨 Do you prefer creative or technical tasks?</li>
          </ul>

          <br />

          <h3>🧠 Personality & Behavior</h3>
          <ul>
            <li>🧠 How do you approach a difficult problem?</li>
            <li>👥 Do you prefer working alone or in a team?</li>
            <li>⏱️ How do you handle pressure and deadlines?</li>
            <li>🔁 Are you comfortable adapting to new situations?</li>
          </ul>

          <br />

          <h3>💡 Skills & Career Orientation</h3>
          <ul>
            <li>💡 Which skill are you strongest in?</li>
            <li>📈 Are you interested in leadership roles?</li>
            <li>🌍 Do you prefer a stable job or a dynamic career?</li>
            <li>💻 Are you interested in technology-based careers?</li>
          </ul>
        </div>

        {/* FOOTER */}
        <div className="admin-footer">
          <button className="skip-btn" onClick={() => setPage("admin")}>
            ← Back to Admin Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}