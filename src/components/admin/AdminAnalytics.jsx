import { useState } from "react";
import "./Admin.css";

export default function AdminAnalytics({ setPage }) {
  const [selected, setSelected] = useState(null);

  // ---------- DETAIL PAGE ----------
  if (selected) {
    return (
      <div className="admin-page">
        <div className="admin-content">
          <div className="admin-header">
            <h1 style={{ fontSize: "34px" }}>{selected.title}</h1>
            <span style={{ fontSize: "30px" }}>{selected.icon}</span>
          </div>

          <div style={detailCard}>
            <p style={detailText}>{selected.description}</p>

            <ul style={detailList}>
              {selected.points.map((p, i) => (
                <li key={i}>✔ {p}</li>
              ))}
            </ul>
          </div>

          <div style={noteStyle}>
            📌 <b>Why this matters:</b>  
            {selected.importance}
          </div>

          <div className="admin-footer">
            <button className="skip-btn" onClick={() => setSelected(null)}>
              ← Back to Analytics
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ---------- MAIN ANALYTICS PAGE ----------
  return (
    <div className="admin-page">
      <div className="admin-content">

        <div className="admin-header">
          <h1 style={{ fontSize: "34px" }}>System Analytics</h1>
          <span style={{ fontSize: "30px" }}>📊</span>
        </div>

        <div className="admin-list">

          <div style={cardStyle} onClick={() => setSelected(analyticsData.students)}>
            👥 <b>Total Students Participated</b>
          </div>

          <div style={cardStyle} onClick={() => setSelected(analyticsData.completion)}>
            ✅ <b>Assessment Completion Rate</b>
          </div>

          <div style={cardStyle} onClick={() => setSelected(analyticsData.status)}>
            ⚙️ <b>System Status</b>
          </div>

          <div style={cardStyle} onClick={() => setSelected(analyticsData.accuracy)}>
            🎯 <b>Career Recommendation Accuracy</b>
          </div>

          <div style={cardStyle} onClick={() => setSelected(analyticsData.time)}>
            ⏱️ <b>Average Assessment Time</b>
          </div>

          <div style={cardStyle} onClick={() => setSelected(analyticsData.security)}>
            🔐 <b>Data Security</b>
          </div>

        </div>

        <div className="admin-footer">
          <button className="skip-btn" onClick={() => setPage("admin")}>
            ← Back
          </button>
        </div>
      </div>
    </div>
  );
}

/* ---------- ANALYTICS DATA ---------- */
const analyticsData = {
  students: {
    title: "Total Students Participated",
    icon: "👥",
    description:
      "This metric represents the total number of students who have accessed and completed the career assessment system.",
    points: [
      "Shows system popularity and adoption",
      "Helps measure outreach effectiveness",
      "Useful for institutional reporting",
      "Indicates student engagement level",
    ],
    importance:
      "A higher number of participants proves that the system is useful, accessible, and trusted by users.",
  },

  completion: {
    title: "Assessment Completion Rate",
    icon: "✅",
    description:
      "Completion rate indicates the percentage of students who successfully completed the assessment after starting it.",
    points: [
      "Reflects user-friendly interface",
      "Indicates clarity of questions",
      "Shows low drop-off rate",
      "Measures assessment effectiveness",
    ],
    importance:
      "A high completion rate shows that students find the system easy to use and engaging.",
  },

  status: {
    title: "System Status",
    icon: "⚙️",
    description:
      "System status indicates whether the application is currently running smoothly without errors.",
    points: [
      "Ensures continuous availability",
      "Indicates system stability",
      "Monitors technical health",
      "Important for reliability",
    ],
    importance:
      "An active and stable system ensures uninterrupted access for all users.",
  },

  accuracy: {
    title: "Career Recommendation Accuracy",
    icon: "🎯",
    description:
      "This metric evaluates how accurately the system matches users to suitable career paths.",
    points: [
      "Based on interest and personality analysis",
      "Improves career decision-making",
      "Reduces confusion among students",
      "Provides personalized guidance",
    ],
    importance:
      "Accuracy is the core strength of a career assessment system and defines its success.",
  },

  time: {
    title: "Average Assessment Time",
    icon: "⏱️",
    description:
      "Represents the average time taken by a student to complete the assessment.",
    points: [
      "Shows efficiency of system design",
      "Ensures students are not overloaded",
      "Maintains attention span",
      "Improves user experience",
    ],
    importance:
      "Short and effective assessments increase participation and satisfaction.",
  },

  security: {
    title: "Data Security",
    icon: "🔐",
    description:
      "This metric ensures that user data is protected and not misused.",
    points: [
      "No sensitive personal data stored",
      "Secure handling of responses",
      "Follows data protection principles",
      "Safe for educational use",
    ],
    importance:
      "Security builds trust and ensures ethical usage of the system.",
  },
};

/* ---------- STYLES ---------- */
const cardStyle = {
  background: "#ffffff",
  padding: "18px",
  borderRadius: "12px",
  marginBottom: "14px",
  fontSize: "20px",
  cursor: "pointer",
  boxShadow: "0 4px 14px rgba(0,0,0,0.1)",
};

const detailCard = {
  background: "#ffffff",
  padding: "22px",
  borderRadius: "14px",
  boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
};

const detailText = {
  fontSize: "18px",
  marginBottom: "14px",
  lineHeight: "1.6",
};

const detailList = {
  fontSize: "17px",
  lineHeight: "1.7",
};

const noteStyle = {
  marginTop: "20px",
  padding: "16px",
  background: "#f9fafb",
  borderRadius: "10px",
  fontSize: "17px",
};