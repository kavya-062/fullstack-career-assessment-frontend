import { useState } from "react";

export default function SkillAnalysis({ setPage }) {
  // ✅ SINGLE SOURCE OF TRUTH
  const assessmentStatus =
    localStorage.getItem("assessmentStatus") || "pending";

  // ❌ IMPORTANT: DO NOT READ skillAnalysis unless test is completed
  const skills =
    assessmentStatus === "completed"
      ? JSON.parse(localStorage.getItem("skillAnalysis")) || []
      : [];

  const [activeSkill, setActiveSkill] = useState(null);

  // 🔒 BEFORE TEST → SHOW MESSAGE ONLY
  if (assessmentStatus !== "completed") {
    return (
      <div className="assessment-container">
        <h2>Skill Analysis</h2>

        <p style={{ fontWeight: "bold", marginTop: "15px" }}>
          🔒 Skills are locked
        </p>

        <p style={{ color: "#6b7280", marginTop: "8px" }}>
          Unlock skills by writing the assessment test.
        </p>

        <button
          className="next-btn"
          style={{ marginTop: "20px" }}
          onClick={() => setPage("assessment")}
        >
          Write Test
        </button>
      </div>
    );
  }

  // ✅ SKILL DETAILS (ALL MAPPED)
  const skillDetails = {
    Creativity: {
      learn: ["Creative thinking", "Idea generation", "Innovation"],
      tools: ["Canva", "Figma"],
      books: ["Creative Confidence"],
      path: "Explore → Create → Innovate",
    },
    "Visual Design": {
      learn: ["Color theory", "Typography", "UI basics"],
      tools: ["Figma", "Adobe XD"],
      books: ["Don't Make Me Think"],
      path: "Design → UI → UX",
    },
    Imagination: {
      learn: ["Visualization", "Storytelling"],
      tools: ["Sketching"],
      books: ["Steal Like an Artist"],
      path: "Imagine → Express → Create",
    },
    "Logical Thinking": {
      learn: ["Reasoning", "Algorithms"],
      tools: ["LeetCode"],
      books: ["Introduction to Algorithms"],
      path: "Basics → Practice → Advanced",
    },
    "Problem Solving": {
      learn: ["Problem breakdown", "Optimization"],
      tools: ["HackerRank"],
      books: ["Cracking the Coding Interview"],
      path: "Understand → Solve → Improve",
    },
    "Technical Skills": {
      learn: ["Programming", "Databases", "APIs"],
      tools: ["VS Code", "GitHub"],
      books: ["Clean Code"],
      path: "Learn → Build → Deploy",
    },
    Communication: {
      learn: ["Public speaking", "Clarity"],
      tools: ["PowerPoint"],
      books: ["Talk Like TED"],
      path: "Speak → Present → Influence",
    },
    Empathy: {
      learn: ["Emotional intelligence", "Listening"],
      tools: ["Journaling"],
      books: ["Emotional Intelligence – Goleman"],
      path: "Listen → Understand → Support",
    },
    Leadership: {
      learn: ["Decision making", "Team leadership"],
      tools: ["Trello"],
      books: ["Leaders Eat Last"],
      path: "Self → Team → Organization",
    },
    Management: {
      learn: ["Planning", "Execution"],
      tools: ["Jira", "Asana"],
      books: ["The One Minute Manager"],
      path: "Plan → Execute → Deliver",
    },
  };

  // ✅ AFTER TEST → SHOW SKILLS
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "30px",
        padding: "40px",
        alignItems: "center",
      }}
    >
      {/* LEFT IMAGE */}
      <div>
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="skills"
          style={{ width: "100%", borderRadius: "16px" }}
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="assessment-container">
        <h2>Skill Analysis</h2>
        <p style={{ color: "#6b7280", marginBottom: "20px" }}>
          Click a skill to view details.
        </p>

        {skills.map((skill, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              padding: "14px",
              marginBottom: "12px",
              background: "#fff",
            }}
          >
            <div
              onClick={() =>
                setActiveSkill(activeSkill === skill ? null : skill)
              }
              style={{
                cursor: "pointer",
                fontWeight: "bold",
                color: "#2563eb",
              }}
            >
              {skill}
            </div>

            {activeSkill === skill && skillDetails[skill] && (
              <div
                style={{
                  marginTop: "10px",
                  background: "#f9fafb",
                  padding: "12px",
                  borderRadius: "10px",
                }}
              >
                <p><b>📘 Learn:</b> {skillDetails[skill].learn.join(", ")}</p>
                <p><b>🛠 Tools:</b> {skillDetails[skill].tools.join(", ")}</p>
                <p><b>📚 Books:</b> {skillDetails[skill].books.join(", ")}</p>
                <p><b>🚀 Path:</b> {skillDetails[skill].path}</p>
              </div>
            )}
          </div>
        ))}

        <button
          className="next-btn"
          style={{ marginTop: "20px" }}
          onClick={() => setPage("dashboard")}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}