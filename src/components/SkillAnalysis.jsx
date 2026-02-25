import { useState } from "react";

export default function SkillAnalysis({ setPage }) {
  const status = localStorage.getItem("assessmentStatus");
  const skills = JSON.parse(localStorage.getItem("skillAnalysis") || "[]");

  // ❌ IF ASSESSMENT NOT COMPLETED
  if (status !== "completed" || skills.length === 0) {
    return (
      <div className="assessment-container">
        <h2>Skill Analysis</h2>

        <p style={{ marginTop: "20px", fontWeight: "bold", color: "#dc2626" }}>
          No skill analysis available
        </p>

        <p style={{ color: "#6b7280" }}>
          Please complete the assessment to view your skill analysis.
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

  const [activeSkill, setActiveSkill] = useState(null);

  // ✅ SKILL DETAILS WITH BOOKS & RESOURCES
  const skillDetails = {
    Creativity: {
      learn: ["Creative thinking", "Idea generation", "Innovation"],
      tools: ["Canva", "Figma"],
      books: ["Creative Confidence – Tom Kelley", "Steal Like an Artist"],
      resources: ["Coursera – Creative Thinking", "YouTube – The Futur"],
      path: "Explore → Create → Innovate",
    },
    "Visual Design": {
      learn: ["Color theory", "Typography", "UI basics"],
      tools: ["Figma", "Adobe XD"],
      books: ["Don't Make Me Think", "Refactoring UI"],
      resources: ["Google UX Course", "Behance"],
      path: "Design → UI → UX",
    },
    Imagination: {
      learn: ["Storytelling", "Visualization"],
      tools: ["Sketching"],
      books: ["Steal Like an Artist", "Show Your Work"],
      resources: ["Medium Design Blogs", "Pinterest"],
      path: "Imagine → Express → Create",
    },
    "Logical Thinking": {
      learn: ["Reasoning", "Algorithms"],
      tools: ["LeetCode"],
      books: ["Introduction to Algorithms", "Think Like a Programmer"],
      resources: ["GeeksforGeeks", "HackerEarth"],
      path: "Basics → Practice → Advanced",
    },
    "Problem Solving": {
      learn: ["Problem breakdown", "Optimization"],
      tools: ["HackerRank"],
      books: ["Cracking the Coding Interview"],
      resources: ["Codeforces", "LeetCode Discuss"],
      path: "Understand → Solve → Improve",
    },
    "Technical Skills": {
      learn: ["Programming", "Databases", "APIs"],
      tools: ["VS Code", "GitHub"],
      books: ["Clean Code", "You Don’t Know JS"],
      resources: ["freeCodeCamp", "MDN Docs"],
      path: "Learn → Build → Deploy",
    },
    Communication: {
      learn: ["Public speaking", "Clarity"],
      tools: ["PowerPoint"],
      books: ["Talk Like TED"],
      resources: ["Toastmasters", "TED Talks"],
      path: "Speak → Present → Influence",
    },
    Empathy: {
      learn: ["Emotional intelligence", "Listening"],
      tools: ["Journaling"],
      books: ["Emotional Intelligence – Daniel Goleman"],
      resources: ["MindTools", "Psychology Today"],
      path: "Listen → Understand → Support",
    },
    Leadership: {
      learn: ["Decision making", "Team leadership"],
      tools: ["Trello"],
      books: ["Leaders Eat Last"],
      resources: ["Harvard Business Review"],
      path: "Self → Team → Organization",
    },
    Management: {
      learn: ["Planning", "Execution"],
      tools: ["Jira", "Asana"],
      books: ["The One Minute Manager"],
      resources: ["Coursera – Project Management"],
      path: "Plan → Execute → Deliver",
    },
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "40px",
        padding: "40px",
        alignItems: "center",
      }}
    >
      {/* LEFT IMAGE (REDUCED SIZE ONLY) */}
      <div style={{ textAlign: "center" }}>
        <img
          src="/images/ana-bg1.png"
          alt="Skill Analysis"
          style={{
            width: "70%",   // ✅ reduced from 100% → 80%
            borderRadius: "18px",
            boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
          }}
        />
      </div>

      {/* RIGHT CONTENT */}
      <div className="assessment-container">
        <h2>Skill Analysis</h2>

        <p style={{ marginTop: "10px", color: "#6b7280" }}>
          Click on a skill to view learning details.
        </p>

        <div style={{ marginTop: "20px" }}>
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "14px",
                marginBottom: "14px",
                background: "#fff",
              }}
            >
              <div
                onClick={() =>
                  setActiveSkill(activeSkill === skill ? null : skill)
                }
                style={{
                  padding: "16px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  color: "#2563eb",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>✔ {skill}</span>
                <span>{activeSkill === skill ? "−" : "+"}</span>
              </div>

              {activeSkill === skill && skillDetails[skill] && (
                <div
                  style={{
                    padding: "14px",
                    background: "#f9fafb",
                    borderTop: "1px solid #e5e7eb",
                    borderRadius: "0 0 14px 14px",
                    fontSize: "14px",
                  }}
                >
                  <p><b>📘 Learn:</b> {skillDetails[skill].learn.join(", ")}</p>
                  <p><b>🛠 Tools:</b> {skillDetails[skill].tools.join(", ")}</p>
                  <p><b>📚 Books:</b> {skillDetails[skill].books.join(", ")}</p>
                  <p><b>🎓 Resources:</b> {skillDetails[skill].resources.join(", ")}</p>
                  <p><b>🚀 Path:</b> {skillDetails[skill].path}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          className="next-btn"
          style={{ marginTop: "30px" }}
          onClick={() => setPage("dashboard")}
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
}