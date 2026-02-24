export default function Results({ setPage, interest }) {
  // Calculate total answers
  const totalAnswers = Object.values(interest).reduce(
    (sum, value) => sum + value,
    0
  );

  // ❌ IF NO QUESTIONS ANSWERED
  if (totalAnswers === 0) {
    // 🚫 CLEAR ANY PREVIOUS DATA
    localStorage.removeItem("assessmentStatus");
    localStorage.removeItem("recommendedCareers");
    localStorage.removeItem("skillAnalysis");
    localStorage.removeItem("assessmentUnlocked"); // ✅ ADDITION

    return (
      <div className="assessment-container">
        <h2>Results</h2>

        <p style={{ marginTop: "20px", fontWeight: "bold", color: "#dc2626" }}>
          Result not found
        </p>

        <p style={{ marginTop: "10px", color: "#6b7280" }}>
          You did not answer any questions. Please take the assessment to get
          personalized career recommendations.
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

  // Determine highest interest
  const maxScore = Math.max(...Object.values(interest));
  const topInterests = Object.keys(interest).filter(
    (key) => interest[key] === maxScore
  );

  let profile = "Balanced / Mixed Interests";
  let message = "Explore multiple career domains.";
  let careers = [];
  let skills = [];

  if (topInterests.length === 1) {
    switch (topInterests[0]) {
      case "R":
        profile = "Technical / Realistic";
        message = "Careers like Software Engineer, Data Analyst suit you.";
        careers = ["Software Engineer", "Data Analyst", "Mechanical Engineer"];
        skills = ["Logical Thinking", "Problem Solving", "Technical Skills"];
        break;

      case "A":
        profile = "Creative / Artistic";
        message = "Careers like Designer, Content Creator suit you.";
        careers = ["UI/UX Designer", "Graphic Designer", "Content Writer"];
        skills = ["Creativity", "Visual Design", "Imagination"];
        break;

      case "S":
        profile = "Social / Helping";
        message = "Careers like Teacher, Counselor suit you.";
        careers = ["Teacher", "Psychologist", "Counselor"];
        skills = ["Communication", "Empathy", "Listening"];
        break;

      case "E":
        profile = "Leadership / Enterprising";
        message = "Careers like Manager, Entrepreneur suit you.";
        careers = ["Entrepreneur", "Business Analyst", "Manager"];
        skills = ["Leadership", "Decision Making", "Risk Taking"];
        break;

      default:
        break;
    }
  }

  // ✅ SAVE ONLY WHEN ANSWERS EXIST (NO CHANGE)
  localStorage.setItem("assessmentStatus", "completed");
  localStorage.setItem("recommendedCareers", JSON.stringify(careers));
  localStorage.setItem("skillAnalysis", JSON.stringify(skills));
  localStorage.setItem("interestProfile", profile);
  localStorage.setItem("assessmentDate", new Date().toLocaleDateString());
  localStorage.setItem(
    "assessmentAttempts",
    Number(localStorage.getItem("assessmentAttempts") || 0) + 1
  );

  // 🔓 THIS IS THE ONLY IMPORTANT ADDITION
  localStorage.setItem("assessmentUnlocked", "true");

  return (
    <div className="assessment-container">
      <h2>Results</h2>

      <p style={{ marginTop: "20px", fontWeight: "bold" }}>
        Interest Profile: {profile}
      </p>

      <p style={{ marginTop: "10px", color: "#6b7280" }}>
        {message}
      </p>

      <button
        className="next-btn"
        style={{ marginTop: "30px" }}
        onClick={() => setPage("dashboard")}
      >
        Back
      </button>
    </div>
  );
}