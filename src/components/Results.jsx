import React, { useEffect, useRef } from "react";

export default function Results({ setPage, interest }) {

  const savedRef = useRef(false);   // prevents duplicate API call


  const totalAnswers = Object.values(interest).reduce(
    (sum, value) => sum + value,
    0
  );


  if (totalAnswers === 0) {

    localStorage.removeItem("assessmentStatus");
    localStorage.removeItem("recommendedCareers");
    localStorage.removeItem("skillAnalysis");
    localStorage.removeItem("assessmentUnlocked");

    return (

      <div className="result-bg">

        <div className="result-overlay">

          <div className="result-card-full pop-in">

            <h1 className="result-title error">
              🚫 Result Not Found
            </h1>

            <p className="result-text">
              You didn’t answer any questions.
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



  const maxScore = Math.max(...Object.values(interest));

  const topInterests = Object.keys(interest).filter(
    (key) => interest[key] === maxScore
  );


  let profile = "Balanced / Mixed Interests";

  let message = "You have interests in multiple domains.";

  let skills = [];


  topInterests.forEach((type) => {

    switch (type) {

      case "R":

        profile = "Technical / Realistic";

        message = "Careers like Software Engineer suit you.";

        skills.push(
          "Logical Thinking",
          "Problem Solving",
          "Technical Skills"
        );

        break;


      case "A":

        profile = "Creative / Artistic";

        message = "Careers like Designer, Content Creator suit you.";

        skills.push(
          "Creativity",
          "Visual Design",
          "Imagination"
        );

        break;


      case "S":

        profile = "Social / Helping";

        message = "Careers like Teacher, Counselor suit you.";

        skills.push(
          "Communication",
          "Empathy",
          "Listening"
        );

        break;


      case "E":

        profile = "Leadership / Enterprising";

        message = "Careers like Manager, Entrepreneur suit you.";

        skills.push(
          "Leadership",
          "Decision Making",
          "Management"
        );

        break;

      default:
        break;

    }

  });


  skills = [...new Set(skills)];


  localStorage.setItem("assessmentStatus", "completed");

  localStorage.setItem("skillAnalysis", JSON.stringify(skills));

  localStorage.setItem("assessmentUnlocked", "true");



  // SEND RESULT TO BACKEND ONLY ONCE
  useEffect(() => {

    if (savedRef.current) return;

    savedRef.current = true;


    const sendResultToBackend = async () => {

      try {

        await fetch("https://fullstack-career-assessment-backend-production.up.railway.app/api/results/results", {

          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({

            studentId: localStorage.getItem("studentId"),

            profile: profile,

            message: message,

            skills: skills.join(", "),

            completed: true,

            logic_score: interest["R"] || 0,

            creativity_score: interest["A"] || 0,

            communication_score: interest["S"] || 0,

            recommended_career: profile

          }),

        });

      } catch (error) {

        console.error("Backend connection failed", error);

      }

    };

    sendResultToBackend();

  }, []);



  return (

    <div className="result-bg">

      <div className="result-overlay">

        <div className="result-card-full pop-in">

          <h1 className="result-title success">
            🎉 HURRAYYYYY!
          </h1>

          <p className="profile">
            🌟 Interest Profile:
            <span> {profile}</span>
          </p>

          <p className="result-text">
            {message}
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