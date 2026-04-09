import { useState } from "react";
import "./SkillAnalysis.css";

export default function SkillAnalysis({ setPage }) {

  const status = localStorage.getItem("assessmentStatus");

  const skills =
    JSON.parse(localStorage.getItem("skillAnalysis") || "[]");


  if (status !== "completed" || skills.length === 0) {

    return (

      <div className="skill-empty">

        <h2>Skill Analysis</h2>

        <p className="error-text">

          No skill analysis available

        </p>

        <p>

          Please complete the assessment to view your skill analysis.

        </p>

        <button
          className="gold-btn"
          onClick={()=>setPage("dashboard")}
        >

          Back to Dashboard

        </button>

      </div>

    );

  }


  const [activeSkill,setActiveSkill] = useState(null);


  const skillDetails = {

    Creativity:{
      learn:["Creative thinking","Idea generation"],
      tools:["Canva","Figma"],
      books:["Creative Confidence"],
      resources:["Coursera"],
      path:"Explore → Create → Innovate"
    },

    "Visual Design":{
      learn:["Color theory","Typography"],
      tools:["Figma"],
      books:["Refactoring UI"],
      resources:["Google UX"],
      path:"Design → UI → UX"
    },

    Imagination:{
      learn:["Storytelling"],
      tools:["Sketch"],
      books:["Steal Like an Artist"],
      resources:["Pinterest"],
      path:"Imagine → Create"
    },

    Communication:{
      learn:["Public speaking"],
      tools:["PowerPoint"],
      books:["Talk Like TED"],
      resources:["TED Talks"],
      path:"Speak → Influence"
    },

    Empathy:{
      learn:["Emotional intelligence"],
      tools:["Journaling"],
      books:["Emotional Intelligence"],
      resources:["MindTools"],
      path:"Listen → Support"
    },

    Listening:{
      learn:["Active listening"],
      tools:["Notes"],
      books:["Listening Skills"],
      resources:["Podcasts"],
      path:"Hear → Understand"
    }

  };


  return (

    <>

    {/* TOP BANNER */}

    <div className="top-header">

      <div className="web-name">

        🎓 Career-Assessment

      </div>

    </div>


    <div className="skill-page">


      {/* LEFT IMAGE */}

      <div className="skill-image">

        <img src="/images/ana-bg1.png"/>

      </div>



      {/* RIGHT CONTENT */}

      <div className="skill-content">

        <h1>Skill Analysis</h1>

        <p className="subtitle">

          Click a skill to view learning details

        </p>


        {skills.map((skill,index)=>(

          <div
            key={index}
            className="skill-item"
          >

            <div
              className="skill-header"

              onClick={()=>setActiveSkill(
                activeSkill===skill ? null : skill
              )}

            >

              <span>

                ✔ {skill}

              </span>

              <span>

                {activeSkill===skill ? "−" : "+"}

              </span>

            </div>



            {activeSkill===skill &&
            skillDetails[skill] &&(

              <div className="skill-details">

                <p>
                  📘 <b>Learn:</b>
                  {skillDetails[skill].learn.join(", ")}
                </p>

                <p>
                  🛠 <b>Tools:</b>
                  {skillDetails[skill].tools.join(", ")}
                </p>

                <p>
                  📚 <b>Books:</b>
                  {skillDetails[skill].books.join(", ")}
                </p>

                <p>
                  🎓 <b>Resources:</b>
                  {skillDetails[skill].resources.join(", ")}
                </p>

                <p>
                  🚀 <b>Path:</b>
                  {skillDetails[skill].path}
                </p>

              </div>

            )}

          </div>

        ))}


        <button
          className="gold-btn"
          onClick={()=>setPage("dashboard")}
        >

          Back to Dashboard

        </button>

      </div>

    </div>

    </>

  );

}