import React from "react";

export default function Results({ setPage, interest }) {
  // ===== TOTAL ANSWERS =====
  const totalAnswers = Object.values(interest).reduce(
    (sum, value) => sum + value,
    0
  );

  // ❌ IF NO QUESTIONS ANSWERED
  if (totalAnswers === 0) {
    localStorage.removeItem("assessmentStatus");
    localStorage.removeItem("recommendedCareers");
    localStorage.removeItem("skillAnalysis");
    localStorage.removeItem("assessmentUnlocked");

    return (
      <div className="result-bg">
        <div className="result-overlay">
          <div className="result-card-full pop-in">
            <h1 className="result-title error">🚫 Result Not Found</h1>

            <p className="result-text">
              You didn’t answer any questions.
            </p>

            <p className="quote reveal-quote">
              “Your career journey begins when you decide to explore.”
            </p>

            <button
              className="result-btn"
              onClick={() => setPage("dashboard")}
            >
              Start Assessment 🚀
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ===== FIND TOP INTERESTS =====
  const maxScore = Math.max(...Object.values(interest));
  const topInterests = Object.keys(interest).filter(
    (key) => interest[key] === maxScore
  );

  // ===== RESULT + SKILL MAPPING (FIXED) =====
  let profile = "Balanced / Mixed Interests";
  let message = "You have interests in multiple domains.";
  let skills = [];

  topInterests.forEach((type) => {
    switch (type) {
      case "R":
        profile = "Technical / Realistic";
        message = "Careers like Software Engineer suit you.";
        skills.push("Logical Thinking", "Problem Solving", "Technical Skills");
        break;

      case "A":
        profile = "Creative / Artistic";
        message = "Careers like Designer, Content Creator suit you.";
        skills.push("Creativity", "Visual Design", "Imagination");
        break;

      case "S":
        profile = "Social / Helping";
        message = "Careers like Teacher, Counselor suit you.";
        skills.push("Communication", "Empathy", "Listening");
        break;

      case "E":
        profile = "Leadership / Enterprising";
        message = "Careers like Manager, Entrepreneur suit you.";
        skills.push("Leadership", "Decision Making", "Management");
        break;

      default:
        break;
    }
  });

  // ✅ REMOVE DUPLICATE SKILLS
  skills = [...new Set(skills)];

  // ✅ SAVE RESULT FOR SKILL ANALYSIS
  localStorage.setItem("assessmentStatus", "completed");
  localStorage.setItem("skillAnalysis", JSON.stringify(skills));
  localStorage.setItem("assessmentUnlocked", "true");

  // ===== UI =====
  return (
    <div className="result-bg">
      <div className="result-overlay">
        <div className="result-card-full pop-in">
          <h1 className="result-title success">🎉 HURRAYYYYY!</h1>

          <p className="profile">
            🌟 Interest Profile:
            <span> {profile}</span>
          </p>

          <p className="result-text">{message}</p>

          <p className="quote reveal-quote">
            “Hey! You just discovered your destination.
            <br />
            Now it’s time to build the path.”
          </p>

          <button
            className="result-btn"
            onClick={() => setPage("dashboard")}
          >
            Go to Dashboard 🚀
          </button>
        </div>
      </div>
    </div>
  );
}